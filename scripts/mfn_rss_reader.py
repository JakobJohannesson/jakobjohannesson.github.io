#!/usr/bin/env python3
"""Fetch new press releases from MFN.se feed and save them to rss_feed/."""

import argparse
import hashlib
import html as html_module
import json
import os
import re
import ssl
import time
from urllib.request import urlopen, Request

FEED_URL = (
    "https://mfn.se/all/s/nordic?limit=144&filter="
    "(and(or(.properties.lang%3D%22en%22)(.properties.lang%3D%22sv%22))"
    "(or(a.market_segment_ids%40%3E%5B13%5D)"
    "(a.market_segment_ids%40%3E%5B14%5D)"
    "(a.market_segment_ids%40%3E%5B15%5D)"
    "(a.market_segment_ids%40%3E%5B17%5D)"
    "(a.market_segment_ids%40%3E%5B18%5D)"
    "(a.market_segment_ids%40%3E%5B24%5D)"
    "(a.market_segment_ids%40%3E%5B25%5D)"
    "(a.market_segment_ids%40%3E%5B56%5D)"
    "(a.market_segment_ids%40%3E%5B21%5D)))"
)
BASE_URL = "https://mfn.se"
FEED_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "rss_feed")
PDF_DIR = os.path.join(FEED_DIR, "pdfs")
SEEN_FILE = os.path.join(FEED_DIR, "mfn_seen_ids.json")

USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

SSL_CTX = ssl.create_default_context()
SSL_CTX.check_hostname = False
SSL_CTX.verify_mode = ssl.CERT_NONE


def load_seen_ids():
    if os.path.exists(SEEN_FILE):
        with open(SEEN_FILE) as f:
            return set(json.load(f))
    return set()


def save_seen_ids(ids):
    with open(SEEN_FILE, "w") as f:
        json.dump(sorted(ids), f, indent=2)


def slugify(text):
    text = text.lower().strip()
    text = re.sub(r"[åä]", "a", text)
    text = re.sub(r"ö", "o", text)
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")[:80]


def fetch_url(url):
    req = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(req, timeout=30, context=SSL_CTX) as resp:
        return resp.read().decode("utf-8", errors="replace")


def fetch_url_binary(url):
    req = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(req, timeout=60, context=SSL_CTX) as resp:
        return resp.read()


def download_pdf(pdf_url, id_hash):
    """Download a PDF and save it to PDF_DIR. Returns the local filename or None."""
    os.makedirs(PDF_DIR, exist_ok=True)
    url_filename = pdf_url.rstrip("/").split("/")[-1]
    local_name = f"{id_hash}_{url_filename}"
    local_path = os.path.join(PDF_DIR, local_name)
    if os.path.exists(local_path):
        return local_name
    try:
        data = fetch_url_binary(pdf_url)
        with open(local_path, "wb") as f:
            f.write(data)
        print(f"  Downloaded PDF: {local_name}")
        return local_name
    except Exception as e:
        print(f"  Warning: could not download PDF {pdf_url}: {e}")
        return None


def strip_html(text):
    text = re.sub(r"<br\s*/?>", "\n", text)
    text = re.sub(r"<[^>]+>", "", text)
    text = html_module.unescape(text)
    text = text.replace("\xa0", " ")
    return text.strip()


def html_to_markdown(body_html):
    md = body_html
    for i in range(1, 7):
        md = re.sub(
            rf"<h{i}[^>]*>(.*?)</h{i}>",
            lambda m, level=i: f"\n{'#' * level} {strip_html(m.group(1))}\n",
            md, flags=re.DOTALL,
        )
    md = re.sub(r"<(?:strong|b)>(.*?)</(?:strong|b)>", r"**\1**", md, flags=re.DOTALL)
    md = re.sub(r"<(?:em|i)>(.*?)</(?:em|i)>", r"*\1*", md, flags=re.DOTALL)
    md = re.sub(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>', r"![](\1)", md)
    md = re.sub(
        r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</a>',
        lambda m: f"[{strip_html(m.group(2))}]({m.group(1)})",
        md, flags=re.DOTALL,
    )
    md = re.sub(r"<li[^>]*>(.*?)</li>", lambda m: f"- {strip_html(m.group(1))}", md, flags=re.DOTALL)
    md = re.sub(r"<p[^>]*>", "\n\n", md)
    md = re.sub(r"</p>", "", md)
    md = re.sub(r"<br\s*/?>", "\n", md)
    md = re.sub(r"<[^>]+>", "", md)
    md = html_module.unescape(md)
    md = md.replace("\xa0", " ")
    md = re.sub(r"\n{3,}", "\n\n", md)
    return md.strip()


def parse_feed_items(page_html):
    """Parse the MFN feed listing page for individual items."""
    items = []
    for match in re.finditer(
        r'<div\s+class="short-item\s+compressible\s*[^"]*"\s+id="([^"]+)"\s+onclick="goToNewsItem\(event,\s*\'([^\']+)\'\)"',
        page_html,
    ):
        item_id = match.group(1)
        item_path = match.group(2)
        block_start = match.start()
        block_end = page_html.find("</div>\n\t      </div>", block_start)
        if block_end == -1:
            block_end = page_html.find("</span>\n\n\n\n\n\n", block_start)
        block = page_html[block_start:block_end + 200] if block_end > -1 else page_html[block_start:block_start + 2000]

        date_m = re.search(r'class="compressed-date">([^<]+)<', block)
        time_m = re.search(r'class="compressed-time">([^<]+)<', block)
        author_m = re.search(r'author="([^"]+)"', block)
        author_name_m = re.search(r'class="title-link author-link[^"]*"[^>]*>([^<]+)<', block)
        title_m = re.search(r'class="title-link item-link"[^>]*title="([^"]*)"[^>]*>([^<]+)<', block)

        pub_date = ""
        if date_m and time_m:
            pub_date = f"{date_m.group(1)} {time_m.group(1)}"

        mfn_id = author_m.group(1) if author_m else ""
        company = html_module.unescape(author_name_m.group(1).strip()) if author_name_m else ""
        title = html_module.unescape(title_m.group(1).strip()) if title_m else ""

        items.append({
            "id": item_id,
            "path": item_path,
            "url": BASE_URL + item_path,
            "pub_date": pub_date,
            "mfn_id": mfn_id,
            "company": company,
            "title": title,
        })
    return items


def fetch_article(url):
    """Fetch the full article from an MFN press release page."""
    try:
        page_html = fetch_url(url)
    except Exception as e:
        print(f"  Warning: could not fetch article {url}: {e}")
        return None

    result = {}

    # Extract all PDF attachments from the full page (deduplicated, preserving order)
    seen_pdfs = set()
    pdf_urls = []
    for pdf_url in re.findall(r'https://storage\.mfn\.se/[^\s"\'<>]+\.pdf', page_html):
        if pdf_url not in seen_pdfs:
            seen_pdfs.add(pdf_url)
            pdf_urls.append(pdf_url)
    result["pdf_urls"] = pdf_urls

    # Try MFN-native format first (content s-mfn)
    mfn_match = re.search(r'class="content s-mfn">(.*?)</div>\s*<div class="footer">', page_html, re.DOTALL)
    if mfn_match:
        body_html = mfn_match.group(1)
        result["body_md"] = html_to_markdown(body_html)
        return result

    # Try OB format (content s-ob) with <pre> tags
    ob_match = re.search(r'class="content s-ob">\s*<pre>(.*?)</pre>', page_html, re.DOTALL)
    if ob_match:
        body_html = ob_match.group(1)
        text = strip_html(body_html)
        result["body_md"] = text
        return result

    # Fallback: try any content div after content-body
    content_match = re.search(r'class="content s-[^"]*">(.*?)</div>\s*<div class="footer">', page_html, re.DOTALL)
    if content_match:
        body_html = content_match.group(1)
        result["body_md"] = html_to_markdown(body_html)
        return result

    return result if result.get("pdf_urls") else None


def save_item(item, article, id_hash=None):
    slug = slugify(item["title"])
    if id_hash is None:
        id_hash = hashlib.md5(item["id"].encode()).hexdigest()[:8]
    filename = f"mfn_{slug}_{id_hash}.md"
    filepath = os.path.join(FEED_DIR, filename)

    body = article["body_md"] if article and article.get("body_md") else "(Article content could not be fetched)"

    # Download PDFs and build reference section
    pdf_section = ""
    if article and article.get("pdf_urls"):
        pdf_lines = []
        for pdf_url in article["pdf_urls"]:
            local_name = download_pdf(pdf_url, id_hash)
            if local_name:
                pdf_lines.append(f"- [PDF]({pdf_url}) → `pdfs/{local_name}`")
            else:
                pdf_lines.append(f"- [PDF]({pdf_url})")
        if pdf_lines:
            pdf_section = "\n**Attachments:**\n" + "\n".join(pdf_lines) + "\n"

    content = f"""# {item['title']}

**Published:** {item['pub_date']}
**Source:** [{item['url']}]({item['url']})
**MFN ID:** {item['mfn_id']}
**Company:** {item['company']}
{pdf_section}
---

{body}
"""
    with open(filepath, "w") as f:
        f.write(content)
    print(f"Saved: {filename}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, default=0, help="Max items to process (0 = all)")
    args = parser.parse_args()

    os.makedirs(FEED_DIR, exist_ok=True)
    os.makedirs(PDF_DIR, exist_ok=True)
    seen = load_seen_ids()

    page_html = fetch_url(FEED_URL)
    items = parse_feed_items(page_html)

    if args.limit > 0:
        items = items[:args.limit]

    new_count = 0
    for item in items:
        if item["id"] not in seen:
            print(f"Fetching: {item['title'][:60]}...")
            article = fetch_article(item["url"])
            save_item(item, article)
            seen.add(item["id"])
            new_count += 1
            time.sleep(1)

    save_seen_ids(seen)
    print(f"Processed {len(items)} items, {new_count} new.")


if __name__ == "__main__":
    main()
