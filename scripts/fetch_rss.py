#!/usr/bin/env python3
"""Fetch new press releases from Cision RSS feed and save them to rss_feed/."""

import hashlib
import json
import os
import re
import xml.etree.ElementTree as ET
from datetime import datetime
from urllib.request import urlopen

RSS_URL = "https://news.cision.com/se/ListItems?format=rss"
FEED_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "rss_feed")
SEEN_FILE = os.path.join(FEED_DIR, "seen_guids.json")


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


def fetch_feed():
    with urlopen(RSS_URL, timeout=30) as resp:
        return resp.read()


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


def save_item(item):
    slug = slugify(item["title"])
    guid_hash = hashlib.md5(item["guid"].encode()).hexdigest()[:8]
    filename = f"{slug}_{guid_hash}.md"
    filepath = os.path.join(FEED_DIR, filename)

    content = f"""# {item['title']}

**Published:** {item['pub_date']}
**Source:** [{item['link']}]({item['link']})
**GUID:** {item['guid']}

---

{item['description']}
"""
    with open(filepath, "w") as f:
        f.write(content)
    print(f"Saved: {filename}")


def main():
    os.makedirs(FEED_DIR, exist_ok=True)
    seen = load_seen_guids()

    xml_bytes = fetch_feed()
    items = parse_items(xml_bytes)

    new_count = 0
    for item in items:
        if item["guid"] not in seen:
            save_item(item)
            seen.add(item["guid"])
            new_count += 1

    save_seen_guids(seen)
    print(f"Processed {len(items)} items, {new_count} new.")


if __name__ == "__main__":
    main()
