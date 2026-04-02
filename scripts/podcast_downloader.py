#!/usr/bin/env python3
"""Download new episodes from the Market Makers podcast RSS feed as MP3 files
and upload them to the gs://podcasts_feed GCS bucket."""

import json
import os
import re
import ssl
import subprocess
import tempfile
import xml.etree.ElementTree as ET
from urllib.request import urlopen, Request

RSS_URL = "https://feeds.acast.com/public/shows/marketmakers"
GCS_BUCKET = "gs://podcasts_feed"
SEEN_GCS_PATH = f"{GCS_BUCKET}/seen_episodes.json"

SSL_CTX = ssl.create_default_context()
SSL_CTX.check_hostname = False
SSL_CTX.verify_mode = ssl.CERT_NONE


def load_seen():
    """Load seen episodes from GCS bucket."""
    try:
        result = subprocess.run(
            ["gsutil", "cat", SEEN_GCS_PATH],
            capture_output=True, text=True, timeout=30
        )
        if result.returncode == 0:
            return set(json.loads(result.stdout))
    except Exception as e:
        print(f"Could not load seen file from GCS: {e}")
    return set()


def save_seen(seen):
    """Save seen episodes to GCS bucket."""
    with tempfile.NamedTemporaryFile(mode="w", suffix=".json", delete=False) as f:
        json.dump(sorted(seen), f, indent=2)
        tmp_path = f.name
    try:
        subprocess.run(
            ["gsutil", "cp", tmp_path, SEEN_GCS_PATH],
            check=True, timeout=30
        )
    finally:
        os.unlink(tmp_path)


def gcs_file_exists(gcs_path):
    """Check if a file exists in GCS."""
    result = subprocess.run(
        ["gsutil", "stat", gcs_path],
        capture_output=True, timeout=15
    )
    return result.returncode == 0


def upload_to_gcs(local_path, gcs_path):
    """Upload a local file to GCS."""
    subprocess.run(
        ["gsutil", "cp", local_path, gcs_path],
        check=True, timeout=300
    )


def slugify(text):
    text = text.lower().strip()
    text = re.sub(r"[åä]", "a", text)
    text = re.sub(r"ö", "o", text)
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")[:80]


def fetch_url(url):
    req = Request(url, headers={
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"
    })
    with urlopen(req, timeout=60, context=SSL_CTX) as resp:
        return resp.read()


def main():
    seen = load_seen()

    print("Fetching Market Makers RSS feed...")
    xml_bytes = fetch_url(RSS_URL)
    root = ET.fromstring(xml_bytes)
    channel = root.find("channel")

    new_count = 0
    for item in channel.findall("item"):
        guid = item.findtext("guid", "")
        if not guid or guid in seen:
            continue

        title = item.findtext("title", "")
        enclosure = item.find("enclosure")
        if enclosure is None:
            continue

        mp3_url = enclosure.get("url", "")
        if not mp3_url:
            continue

        slug = slugify(title)
        filename = f"{slug}.mp3"
        gcs_path = f"{GCS_BUCKET}/{filename}"

        if gcs_file_exists(gcs_path):
            seen.add(guid)
            continue

        print(f"Downloading: {title}")
        try:
            data = fetch_url(mp3_url)
            with tempfile.NamedTemporaryFile(suffix=".mp3", delete=False) as f:
                f.write(data)
                tmp_path = f.name
            upload_to_gcs(tmp_path, gcs_path)
            os.unlink(tmp_path)
            print(f"  Uploaded: {filename} ({len(data) / 1024 / 1024:.1f} MB)")
            seen.add(guid)
            new_count += 1
        except Exception as e:
            print(f"  Error downloading {title}: {e}")
            if os.path.exists(tmp_path):
                os.unlink(tmp_path)

    save_seen(seen)
    print(f"Done. {new_count} new episodes downloaded.")


if __name__ == "__main__":
    main()
