#!/usr/bin/env python3
"""Backfill PDF downloads for existing rss_feed .md files that have no Attachments section."""

import os
import re
import ssl
import time
import argparse
from urllib.request import urlopen, Request

FEED_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "rss_feed")
PDF_DIR = os.path.join(FEED_DIR, "pdfs")

USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

SSL_CTX = ssl.create_default_context()
SSL_CTX.check_hostname = False
SSL_CTX.verify_mode = ssl.CERT_NONE


def fetch_url(url):
    req = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(req, timeout=30, context=SSL_CTX) as resp:
        return resp.read()


def extract_pdf_urls_cision(page_html):
    """Extract mb.cision.com PDF links from a Cision page."""
    seen, results = set(), []
    for url in re.findall(r'https://mb\.cision\.com/[^\s"\'<>]+\.pdf', page_html):
        if url not in seen:
            seen.add(url)
            results.append(url)
    return results


def extract_pdf_urls_mfn(page_html):
    """Extract storage.mfn.se PDF links from an MFN page."""
    seen, results = set(), []
    for url in re.findall(r'https://storage\.mfn\.se/[^\s"\'<>]+\.pdf', page_html):
        if url not in seen:
            seen.add(url)
            results.append(url)
    return results


def download_pdf(pdf_url, id_hash):
    """Download a PDF and save to PDF_DIR. Returns local filename or None."""
    os.makedirs(PDF_DIR, exist_ok=True)
    url_filename = pdf_url.rstrip("/").split("/")[-1]
    local_name = f"{id_hash}_{url_filename}"
    local_path = os.path.join(PDF_DIR, local_name)
    if os.path.exists(local_path):
        return local_name
    try:
        data = fetch_url(pdf_url)
        with open(local_path, "wb") as f:
            f.write(data)
        return local_name
    except Exception as e:
        print(f"    Warning: could not download {pdf_url}: {e}")
        return None


def patch_md_file(filepath, pdf_urls, id_hash):
    """Add Attachments section to an existing .md file and download PDFs."""
    with open(filepath) as f:
        content = f.read()

    pdf_lines = []
    for pdf_url in pdf_urls:
        local_name = download_pdf(pdf_url, id_hash)
        if local_name:
            pdf_lines.append(f"- [PDF]({pdf_url}) → `pdfs/{local_name}`")
        else:
            pdf_lines.append(f"- [PDF]({pdf_url})")

    if not pdf_lines:
        return False

    attachment_block = "\n**Attachments:**\n" + "\n".join(pdf_lines) + "\n"

    # Insert attachment block just before the --- separator
    new_content = content.replace("\n---\n", f"{attachment_block}\n---\n", 1)
    if new_content == content:
        # No --- found; append at end of header block (after last ** line before body)
        new_content = content + attachment_block

    with open(filepath, "w") as f:
        f.write(new_content)
    return True


def main():
    parser = argparse.ArgumentParser(description="Backfill PDFs for existing rss_feed .md files")
    parser.add_argument("--limit", type=int, default=0, help="Max files to process (0 = all)")
    parser.add_argument("--dry-run", action="store_true", help="Only show what would be done")
    args = parser.parse_args()

    os.makedirs(PDF_DIR, exist_ok=True)

    md_files = sorted(f for f in os.listdir(FEED_DIR) if f.endswith(".md"))
    if args.limit > 0:
        md_files = md_files[:args.limit]

    total = len(md_files)
    patched = 0
    skipped = 0
    errors = 0

    for i, fname in enumerate(md_files, 1):
        filepath = os.path.join(FEED_DIR, fname)
        with open(filepath) as f:
            content = f.read()

        # Skip if already has attachments section
        if "**Attachments:**" in content:
            skipped += 1
            continue

        # Extract source URL
        source_match = re.search(r'\*\*Source:\*\* \[([^\]]+)\]\(([^)]+)\)', content)
        if not source_match:
            skipped += 1
            continue

        source_url = source_match.group(2)

        # Determine type and extract id_hash from filename
        hash_match = re.search(r'_([0-9a-f]{8})\.md$', fname)
        if not hash_match:
            skipped += 1
            continue
        id_hash = hash_match.group(1)

        is_cision = fname.startswith("cision_")
        is_mfn = fname.startswith("mfn_")

        if not is_cision and not is_mfn:
            skipped += 1
            continue

        print(f"[{i}/{total}] {fname}")

        if args.dry_run:
            print(f"  Would fetch: {source_url}")
            continue

        try:
            page_bytes = fetch_url(source_url)
            page_html = page_bytes.decode("utf-8", errors="replace")
        except Exception as e:
            print(f"  Error fetching page: {e}")
            errors += 1
            time.sleep(1)
            continue

        if is_cision:
            pdf_urls = extract_pdf_urls_cision(page_html)
        else:
            pdf_urls = extract_pdf_urls_mfn(page_html)

        if not pdf_urls:
            skipped += 1
            time.sleep(0.5)
            continue

        print(f"  Found {len(pdf_urls)} PDF(s): {pdf_urls}")
        did_patch = patch_md_file(filepath, pdf_urls, id_hash)
        if did_patch:
            patched += 1
        time.sleep(0.75)  # Be polite to servers

    print(f"\nDone. Patched: {patched}, Skipped: {skipped}, Errors: {errors}")


if __name__ == "__main__":
    main()
