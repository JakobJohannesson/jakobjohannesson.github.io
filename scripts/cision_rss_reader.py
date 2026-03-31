#!/usr/bin/env python3
"""Fetch new press releases from Cision RSS feed and save them to rss_feed/."""

import argparse
import hashlib
import html as html_module
import json
import os
import re
import ssl
import time
import xml.etree.ElementTree as ET
from urllib.request import urlopen, Request

RSS_URL = "https://news.cision.com/se/ListItems?format=rss"
FEED_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "rss_feed")
PDF_DIR = os.path.join(FEED_DIR, "pdfs")
SEEN_FILE = os.path.join(FEED_DIR, "seen_guids.json")

SSL_CTX = ssl.create_default_context()
SSL_CTX.check_hostname = False
SSL_CTX.verify_mode = ssl.CERT_NONE


def load_seen_guids():
    if os.path.exists(SEEN_FILE):
        with open(SEEN_FILE) as f:
            return set(json.load(f))
    return set()


def save_seen_guids(guids):
    with open(SEEN_FILE, "w") as f:
        json.dump(sorted(guids), f, indent=2)


def slugify(text):
    text = text.lower().strip()
    text = re.sub(r"[åä]", "a", text)
    text = re.sub(r"ö", "o", text)
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")[:80]


def fetch_url(url):
    req = Request(url, headers={"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"})
    with urlopen(req, timeout=30, context=SSL_CTX) as resp:
        return resp.read()


def download_pdf(pdf_url, guid_hash):
    """Download a PDF and save it to PDF_DIR. Returns the local filename or None."""
    os.makedirs(PDF_DIR, exist_ok=True)
    # Derive filename from the URL's last path component + guid hash for uniqueness
    url_filename = pdf_url.rstrip("/").split("/")[-1]
    local_name = f"{guid_hash}_{url_filename}"
    local_path = os.path.join(PDF_DIR, local_name)
    if os.path.exists(local_path):
        return local_name
    try:
        data = fetch_url(pdf_url)
        with open(local_path, "wb") as f:
            f.write(data)
        print(f"  Downloaded PDF: {local_name}")
        return local_name
    except Exception as e:
        print(f"  Warning: could not download PDF {pdf_url}: {e}")
        return None


def strip_html(text):
    """Remove HTML tags and decode entities."""
    text = re.sub(r"<br\s*/?>", "\n", text)
    text = re.sub(r"<[^>]+>", "", text)
    text = html_module.unescape(text)
    text = text.replace("\xa0", " ")
    return text.strip()


def html_to_markdown(body_html):
    """Convert article HTML to markdown, preserving structure."""
    md = body_html

    # Convert headings
    for i in range(1, 7):
        md = re.sub(rf"<h{i}[^>]*>(.*?)</h{i}>", lambda m: f"\n{'#' * i} {strip_html(m.group(1))}\n", md, flags=re.DOTALL)

    # Convert bold
    md = re.sub(r"<(?:strong|b)>(.*?)</(?:strong|b)>", r"**\1**", md, flags=re.DOTALL)

    # Convert italic
    md = re.sub(r"<(?:em|i)>(.*?)</(?:em|i)>", r"*\1*", md, flags=re.DOTALL)

    # Convert images to markdown
    md = re.sub(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>', r"![](\1)", md)

    # Convert links
    md = re.sub(r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', lambda m: f"[{strip_html(m.group(2))}]({m.group(1)})", md, flags=re.DOTALL)

    # Convert list items
    md = re.sub(r"<li[^>]*>(.*?)</li>", lambda m: f"- {strip_html(m.group(1))}", md, flags=re.DOTALL)

    # Convert paragraphs to double newlines
    md = re.sub(r"<p[^>]*>", "\n\n", md)
    md = re.sub(r"</p>", "", md)

    # Convert line breaks
    md = re.sub(r"<br\s*/?>", "\n", md)

    # Strip remaining HTML tags
    md = re.sub(r"<[^>]+>", "", md)

    # Decode HTML entities
    md = html_module.unescape(md)
    md = md.replace("\xa0", " ")

    # Clean up excessive whitespace
    md = re.sub(r"\n{3,}", "\n\n", md)
    return md.strip()


def extract_cision_id(link):
    """Extract company identifier from Cision URL.

    e.g. https://news.cision.com/se/svenska-franchise-foreningen/r/...
    returns 'svenska-franchise-foreningen'
    """
    match = re.search(r"news\.cision\.com/se/([^/]+)/", link)
    if match:
        return match.group(1)
    return ""


def fetch_article(link):
    """Fetch the full article from a Cision press release page."""
    try:
        raw = fetch_url(link)
        page_html = raw.decode("utf-8", errors="replace")
    except Exception as e:
        print(f"  Warning: could not fetch article {link}: {e}")
        return None

    result = {}

    # Extract article body
    art_start = page_html.find("<article>")
    art_end = page_html.find("</article>")
    if art_start == -1 or art_end == -1:
        return None

    article_html = page_html[art_start:art_end]

    # Extract keywords
    kw_start = article_html.find('<div class="keyword-container">')
    if kw_start > -1:
        kw_section = article_html[kw_start:]
        raw_keywords = re.findall(r">([^<]+)</a>", kw_section)
        result["keywords"] = [html_module.unescape(k) for k in raw_keywords]
    else:
        result["keywords"] = []

    # Extract body: from first <p> to keyword-container (or end)
    first_p = article_html.find("<p>")
    if first_p == -1:
        first_p = article_html.find("<p ")
    if first_p == -1:
        return None

    body_end = kw_start if kw_start > -1 else len(article_html)
    body_html = article_html[first_p:body_end]

    # Extract image URLs before converting
    result["images"] = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', body_html)

    # Extract PDF links from the full page
    result["pdf_urls"] = re.findall(r'https://mb\.cision\.com/[^\s"\'<>]+\.pdf', page_html)

    # Convert to markdown
    result["body_md"] = html_to_markdown(body_html)

    return result


def fetch_feed():
    return fetch_url(RSS_URL)


def parse_items(xml_bytes):
    root = ET.fromstring(xml_bytes)
    items = []
    for item in root.iter("item"):
        title = item.findtext("title", "")
        link = item.findtext("link", "")
        guid = item.findtext("guid", "")
        description = item.findtext("description", "")
        pub_date = item.findtext("pubDate", "")
        items.append({
            "title": title,
            "link": link,
            "guid": guid,
            "description": description,
            "pub_date": pub_date,
        })
    return items


def save_item(item, article):
    cision_id = extract_cision_id(item["link"])
    slug = slugify(item["title"])
    guid_hash = hashlib.md5(item["guid"].encode()).hexdigest()[:8]
    filename = f"cision_{slug}_{guid_hash}.md"
    filepath = os.path.join(FEED_DIR, filename)

    keywords_str = ", ".join(article["keywords"]) if article and article.get("keywords") else ""
    body = article["body_md"] if article and article.get("body_md") else item["description"]

    # Download PDFs and build reference section
    pdf_section = ""
    if article and article.get("pdf_urls"):
        pdf_lines = []
        for pdf_url in article["pdf_urls"]:
            local_name = download_pdf(pdf_url, guid_hash)
            if local_name:
                pdf_lines.append(f"- [PDF]({pdf_url}) → `pdfs/{local_name}`")
            else:
                pdf_lines.append(f"- [PDF]({pdf_url})")
        if pdf_lines:
            pdf_section = "\n**Attachments:**\n" + "\n".join(pdf_lines) + "\n"

    content = f"""# {item['title']}

**Published:** {item['pub_date']}
**Source:** [{item['link']}]({item['link']})
**GUID:** {item['guid']}
**Cision ID:** {cision_id}
**Keywords:** {keywords_str}
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
    seen = load_seen_guids()

    xml_bytes = fetch_feed()
    items = parse_items(xml_bytes)

    if args.limit > 0:
        items = items[:args.limit]

    new_count = 0
    for item in items:
        if item["guid"] not in seen:
            print(f"Fetching: {item['title'][:60]}...")
            article = fetch_article(item["link"])
            save_item(item, article)
            seen.add(item["guid"])
            new_count += 1
            time.sleep(1)  # Be polite to Cision servers

    save_seen_guids(seen)
    print(f"Processed {len(items)} items, {new_count} new.")


if __name__ == "__main__":
    main()
