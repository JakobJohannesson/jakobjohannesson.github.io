#!/usr/bin/env python3
"""Generate feed.html from markdown files in rss_feed/."""

import os
import re
from datetime import datetime

FEED_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "rss_feed")
OUTPUT_FILE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "feed.html")


def parse_md_file(filepath):
    """Parse a feed markdown file into a dict."""
    with open(filepath, encoding="utf-8") as f:
        content = f.read()

    item = {"filename": os.path.basename(filepath)}

    # Title
    m = re.search(r"^# (.+)$", content, re.MULTILINE)
    item["title"] = m.group(1).strip() if m else ""

    # Published
    m = re.search(r"\*\*Published:\*\*\s*(.+)", content)
    item["pub_date_raw"] = m.group(1).strip() if m else ""

    # Source
    m = re.search(r"\*\*Source:\*\*\s*\[([^\]]*)\]\(([^)]*)\)", content)
    item["source_url"] = m.group(2).strip() if m else ""

    # Cision ID
    m = re.search(r"\*\*Cision ID:\*\*\s*(.+)", content)
    item["cision_id"] = m.group(1).strip() if m else ""

    # MFN ID
    m = re.search(r"\*\*MFN ID:\*\*\s*(.+)", content)
    item["mfn_id"] = m.group(1).strip() if m else ""

    # Company (MFN)
    m = re.search(r"\*\*Company:\*\*\s*(.+)", content)
    item["company"] = m.group(1).strip() if m else ""

    # Keywords
    m = re.search(r"\*\*Keywords:\*\*\s*(.+)", content)
    item["keywords"] = m.group(1).strip() if m else ""

    # Body (everything after ---)
    parts = content.split("---", 1)
    item["body"] = parts[1].strip() if len(parts) > 1 else ""

    # Determine source type
    item["source_type"] = "mfn" if item["mfn_id"] else "cision"

    # Company display name
    if item["company"]:
        item["company_display"] = item["company"]
    elif item["cision_id"]:
        item["company_display"] = item["cision_id"].replace("-", " ").title()
    else:
        item["company_display"] = ""

    # Parse date for sorting
    item["sort_date"] = _parse_date(item["pub_date_raw"])

    return item


def _parse_date(date_str):
    """Parse various date formats into a datetime for sorting."""
    # MFN format: 2026-03-28 17:48:40
    try:
        return datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S")
    except ValueError:
        pass
    # Cision format: Sat, 28 Mar 2026 09:16:02 GMT
    try:
        return datetime.strptime(date_str, "%a, %d %b %Y %H:%M:%S %Z")
    except ValueError:
        pass
    try:
        return datetime.strptime(date_str.replace(" GMT", ""), "%a, %d %b %Y %H:%M:%S")
    except ValueError:
        pass
    return datetime.min


def escape_html(text):
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def body_preview(body, max_chars=300):
    """Get a plain text preview of the body."""
    # Strip markdown formatting
    text = re.sub(r"\*\*([^*]+)\*\*", r"\1", body)
    text = re.sub(r"\*([^*]+)\*", r"\1", text)
    text = re.sub(r"!\[[^\]]*\]\([^)]*\)", "", text)
    text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)
    text = re.sub(r"#{1,6}\s*", "", text)
    text = re.sub(r"\n+", " ", text)
    text = text.strip()
    if len(text) > max_chars:
        text = text[:max_chars].rsplit(" ", 1)[0] + "..."
    return text


def generate_html(items):
    """Generate the full feed.html page."""
    items.sort(key=lambda x: x["sort_date"], reverse=True)

    rows = []
    for item in items:
        source_badge = (
            '<span class="feed-badge feed-badge-mfn">MFN</span>'
            if item["source_type"] == "mfn"
            else '<span class="feed-badge feed-badge-cision">Cision</span>'
        )

        company_html = ""
        if item["company_display"]:
            company_html = f'<span class="feed-company">{escape_html(item["company_display"])}</span>'

        preview = escape_html(body_preview(item["body"]))

        date_display = item["pub_date_raw"]
        # Simplify date display
        if item["sort_date"] != datetime.min:
            date_display = item["sort_date"].strftime("%Y-%m-%d %H:%M")

        source_link = ""
        if item["source_url"]:
            source_link = f'<a href="{escape_html(item["source_url"])}" class="feed-source-link" target="_blank">Source</a>'

        rows.append(f"""
      <div class="feed-item" onclick="toggleFeedItem(this)">
        <div class="feed-item-header">
          <div class="feed-item-meta">
            {source_badge}
            {company_html}
            <span class="feed-date">{escape_html(date_display)}</span>
          </div>
          <h3 class="feed-item-title">{escape_html(item["title"])}</h3>
          <p class="feed-item-preview">{preview}</p>
        </div>
        <div class="feed-item-body" style="display:none;">
          <div class="feed-item-body-inner">
            {_md_to_html(item["body"])}
          </div>
          <div class="feed-item-footer">
            {source_link}
          </div>
        </div>
      </div>""")

    items_html = "\n".join(rows)

    # Count by source
    cision_count = sum(1 for i in items if i["source_type"] == "cision")
    mfn_count = sum(1 for i in items if i["source_type"] == "mfn")

    return f"""<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en"><head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">

<title>Feed – Aktiecase.com</title>
<style>
code{{white-space: pre-wrap;}}
span.smallcaps{{font-variant: small-caps;}}
div.columns{{display: flex; gap: min(4vw, 1.5em);}}
div.column{{flex: auto; overflow-x: auto;}}
div.hanging-indent{{margin-left: 1.5em; text-indent: -1.5em;}}
ul.task-list{{list-style: none;}}
ul.task-list li input[type="checkbox"] {{
  width: 0.8em;
  margin: 0 0.8em 0.2em -1em;
  vertical-align: middle;
}}
</style>

<script src="site_libs/quarto-nav/quarto-nav.js"></script>
<script src="site_libs/quarto-nav/headroom.min.js"></script>
<link href="image/kaka.png" rel="icon" type="image/png">
<script src="site_libs/quarto-html/quarto.js" type="module"></script>
<script src="site_libs/quarto-html/popper.min.js"></script>
<script src="site_libs/quarto-html/tippy.umd.min.js"></script>
<script src="site_libs/quarto-html/anchor.min.js"></script>
<link href="site_libs/quarto-html/tippy.css" rel="stylesheet">
<script src="site_libs/bootstrap/bootstrap.min.js"></script>
<link href="site_libs/bootstrap/bootstrap-icons.css" rel="stylesheet">
<link href="site_libs/bootstrap/bootstrap-4adc78a17a60de5a17a6a54b05501aa1.min.css" rel="stylesheet" append-hash="true" id="quarto-bootstrap" data-mode="light">
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="fonts/fonts_styles.css">

<style>
  .feed-container {{
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
  }}
  .feed-header {{
    margin-bottom: 30px;
  }}
  .feed-header h1 {{
    font-family: 'Century Gothic bold', sans-serif;
    font-size: 48px;
    margin-bottom: 10px;
  }}
  .feed-stats {{
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
  }}
  .feed-filters {{
    display: flex;
    gap: 10px;
    margin-bottom: 25px;
    flex-wrap: wrap;
  }}
  .feed-filter-btn {{
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    padding: 6px 16px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background: #fff;
    cursor: pointer;
    color: #282828;
    transition: all 0.2s;
  }}
  .feed-filter-btn:hover {{
    background: #f0f0f0;
  }}
  .feed-filter-btn.active {{
    background: #282828;
    color: #fff;
    border-color: #282828;
  }}
  .feed-search {{
    width: 100%;
    max-width: 400px;
    padding: 8px 14px;
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin-bottom: 20px;
    color: #282828;
  }}
  .feed-search:focus {{
    outline: none;
    border-color: #888;
  }}
  .feed-item {{
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 12px;
    cursor: pointer;
    transition: box-shadow 0.2s, border-color 0.2s;
    background: #fff;
  }}
  .feed-item:hover {{
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    border-color: #ccc;
  }}
  .feed-item.expanded {{
    border-color: #999;
  }}
  .feed-item-header {{
  }}
  .feed-item-meta {{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
    flex-wrap: wrap;
  }}
  .feed-badge {{
    font-family: 'Arial', sans-serif !important;
    font-size: 11px !important;
    font-weight: bold;
    padding: 2px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    color: #fff !important;
  }}
  .feed-badge-cision {{
    background: #2563eb;
  }}
  .feed-badge-mfn {{
    background: #0e6655;
  }}
  .feed-company {{
    font-family: 'Arial', sans-serif !important;
    font-size: 14px !important;
    font-weight: bold;
    color: #282828 !important;
  }}
  .feed-date {{
    font-family: 'Arial', sans-serif !important;
    font-size: 13px !important;
    color: #888 !important;
  }}
  .feed-item-title {{
    font-family: 'Century Gothic bold', sans-serif;
    font-size: 22px;
    margin: 0 0 6px 0;
    color: #282828;
  }}
  .feed-item-preview {{
    font-family: 'Arial', sans-serif;
    font-size: 15px;
    color: #555;
    margin: 0;
    line-height: 1.5;
  }}
  .feed-item-body {{
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid #e8e8e8;
  }}
  .feed-item-body-inner {{
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    color: #282828;
    line-height: 1.7;
  }}
  .feed-item-body-inner p {{
    font-size: 16px;
    margin-bottom: 12px;
  }}
  .feed-item-body-inner h1,
  .feed-item-body-inner h2,
  .feed-item-body-inner h3 {{
    font-family: 'Century Gothic bold', sans-serif;
    margin-top: 18px;
    margin-bottom: 8px;
  }}
  .feed-item-body-inner h1 {{ font-size: 24px; }}
  .feed-item-body-inner h2 {{ font-size: 20px; }}
  .feed-item-body-inner h3 {{ font-size: 18px; }}
  .feed-item-footer {{
    margin-top: 14px;
    padding-top: 10px;
    border-top: 1px solid #eee;
  }}
  .feed-source-link {{
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    color: #2563eb !important;
    text-decoration: none;
  }}
  .feed-source-link:hover {{
    text-decoration: underline;
  }}
  .feed-empty {{
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    color: #888;
    text-align: center;
    padding: 40px;
  }}
</style>

</head>

<body class="nav-fixed quarto-light">

<div id="quarto-search-results"></div>
  <header id="quarto-header" class="headroom fixed-top">
    <nav class="navbar navbar-expand-lg " data-bs-theme="dark">
      <div class="navbar-container container-fluid">
      <div class="navbar-brand-container mx-auto">
    <a class="navbar-brand" href="index.html">
    <span class="navbar-title">Aktiecase.com</span>
    </a>
  </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" role="menu" aria-expanded="false" aria-label="Toggle navigation" onclick="if (window.quartoToggleHeadroom) {{ window.quartoToggleHeadroom(); }}">
  <span class="navbar-toggler-icon"></span>
</button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav navbar-nav-scroll me-auto">
  <li class="nav-item">
    <a class="nav-link" href="posts.html">
<span class="menu-text">Bloggen</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="bokhyllan.html">
<span class="menu-text">Bokhyllan</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="feed.html">
<span class="menu-text">Feed</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="agm.html">
<span class="menu-text">AGM</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="about.html">
<span class="menu-text">Om Aktiecase.com</span></a>
  </li>
</ul>
            <ul class="navbar-nav navbar-nav-scroll ms-auto">
  <li class="nav-item compact">
    <a class="nav-link" href="index.xml"> <i class="bi bi-rss" role="img">
</i>
<span class="menu-text"></span></a>
  </li>
</ul>
          </div>
            <div class="quarto-navbar-tools">
</div>
      </div>
    </nav>
</header>

<div id="quarto-content" class="quarto-container page-columns page-rows-contents page-layout-article page-navbar">
<div id="quarto-margin-sidebar" class="sidebar margin-sidebar zindex-bottom">
</div>
<main class="content" id="quarto-document-content">

<div class="feed-container">
  <div class="feed-header">
    <h1>Press Releases</h1>
    <div class="feed-stats">{len(items)} releases — {cision_count} from Cision, {mfn_count} from MFN</div>
  </div>

  <div class="feed-filters">
    <button class="feed-filter-btn active" onclick="filterFeed('all')">All</button>
    <button class="feed-filter-btn" onclick="filterFeed('cision')">Cision</button>
    <button class="feed-filter-btn" onclick="filterFeed('mfn')">MFN</button>
  </div>

  <input type="text" class="feed-search" placeholder="Search releases..." oninput="searchFeed(this.value)">

  <div id="feed-items">
    {items_html}
  </div>

  <div class="feed-empty" id="feed-empty" style="display:none;">No matching releases found.</div>
</div>

</main>
</div>

<footer class="footer">
  <div class="nav-footer">
    <div class="nav-footer-left">
<p>Copyright 2026, Jakob Johannesson - <a href="https://www.aktiecase.com">Main page</a></p>
</div>
    <div class="nav-footer-center">
      &nbsp;
    </div>
    <div class="nav-footer-right">
      <ul class="footer-items list-unstyled">
    <li class="nav-item compact">
    <a class="nav-link" href="https://github.com/jakobjohannesson">
      <i class="bi bi-github" role="img">
</i>
    </a>
  </li>
    <li class="nav-item compact">
    <a class="nav-link" href="https://x.com/aktiecase">
      <i class="bi bi-twitter" role="img">
</i>
    </a>
  </li>
    <li class="nav-item compact">
    <a class="nav-link" href="https://bsky.app/profile/aktiecase.bsky.social">
      <i class="bi bi-heart" role="img">
</i>
    </a>
  </li>
</ul>
    </div>
  </div>
</footer>

<script>
function toggleFeedItem(el) {{
  var body = el.querySelector('.feed-item-body');
  if (body.style.display === 'none') {{
    body.style.display = 'block';
    el.classList.add('expanded');
  }} else {{
    body.style.display = 'none';
    el.classList.remove('expanded');
  }}
}}

function filterFeed(type) {{
  var items = document.querySelectorAll('.feed-item');
  var buttons = document.querySelectorAll('.feed-filter-btn');
  buttons.forEach(function(btn) {{ btn.classList.remove('active'); }});
  event.target.classList.add('active');

  var visible = 0;
  items.forEach(function(item) {{
    var badge = item.querySelector('.feed-badge');
    var itemType = badge.classList.contains('feed-badge-mfn') ? 'mfn' : 'cision';
    if (type === 'all' || itemType === type) {{
      item.style.display = '';
      visible++;
    }} else {{
      item.style.display = 'none';
    }}
  }});
  document.getElementById('feed-empty').style.display = visible === 0 ? '' : 'none';
}}

function searchFeed(query) {{
  var items = document.querySelectorAll('.feed-item');
  var q = query.toLowerCase();
  var visible = 0;
  items.forEach(function(item) {{
    var text = item.textContent.toLowerCase();
    if (text.indexOf(q) !== -1) {{
      item.style.display = '';
      visible++;
    }} else {{
      item.style.display = 'none';
    }}
  }});
  document.getElementById('feed-empty').style.display = visible === 0 ? '' : 'none';
}}
</script>

</body></html>"""


def _md_to_html(md_text):
    """Simple markdown to HTML conversion."""
    html = escape_html(md_text)

    # Headings
    html = re.sub(r"^### (.+)$", r"<h3>\1</h3>", html, flags=re.MULTILINE)
    html = re.sub(r"^## (.+)$", r"<h2>\1</h2>", html, flags=re.MULTILINE)
    html = re.sub(r"^# (.+)$", r"<h1>\1</h1>", html, flags=re.MULTILINE)

    # Bold
    html = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", html)

    # Italic
    html = re.sub(r"\*([^*]+)\*", r"<em>\1</em>", html)

    # Images (escaped earlier, so fix)
    html = re.sub(
        r"!\[([^\]]*)\]\(([^)]+)\)",
        r'<img src="\2" alt="\1" style="max-width:100%;margin:10px 0;">',
        html,
    )

    # Links (escaped earlier, so fix)
    html = re.sub(r"\[([^\]]*)\]\(([^)]+)\)", r'<a href="\2" target="_blank">\1</a>', html)

    # List items
    html = re.sub(r"^- (.+)$", r"<li>\1</li>", html, flags=re.MULTILINE)

    # Paragraphs - split by double newlines
    paragraphs = re.split(r"\n\n+", html)
    result = []
    for p in paragraphs:
        p = p.strip()
        if not p:
            continue
        if p.startswith("<h") or p.startswith("<li"):
            result.append(p)
        else:
            p = p.replace("\n", "<br>")
            result.append(f"<p>{p}</p>")

    return "\n".join(result)


def main():
    items = []
    for filename in os.listdir(FEED_DIR):
        if filename.endswith(".md"):
            filepath = os.path.join(FEED_DIR, filename)
            try:
                item = parse_md_file(filepath)
                if item["title"]:
                    items.append(item)
            except Exception as e:
                print(f"Warning: failed to parse {filename}: {e}")

    html = generate_html(items)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Generated feed.html with {len(items)} items.")


if __name__ == "__main__":
    main()
