#!/usr/bin/env python3
"""Generate agm.html from 'kallelse' files in rss_feed/, assessed against SEB policy."""

import html as html_module
import os
import re
from datetime import datetime

FEED_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "rss_feed")
OUTPUT_FILE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "agm.html")

# ---------------------------------------------------------------------------
# Policy rules derived from agm/policy.md
# Each rule maps a topic keyword to a check function and policy reference.
# ---------------------------------------------------------------------------

POLICY_RULES = [
    {
        "id": "board_chair_not_ceo",
        "topic": "CEO should not be board member",
        "description": (
            "The Company's CEO should not be a member of the Board of Directors. "
            "Former CEO should generally not be appointed Chair."
        ),
        "section": "Composition and responsibility of the Board of Directors",
    },
    {
        "id": "no_deputy_board",
        "topic": "No deputy board members",
        "description": "Deputy board members should not be appointed.",
        "section": "Composition and responsibility of the Board of Directors",
    },
    {
        "id": "board_independence",
        "topic": "Board independence",
        "description": (
            "Majority of board members must be independent of the company. "
            "At least two must also be independent of major shareholders."
        ),
        "section": "Composition and responsibility of the Board of Directors",
    },
    {
        "id": "board_one_year_term",
        "topic": "Board elected for max one year",
        "description": "Board members shall be elected until the next AGM, max one year.",
        "section": "Composition and responsibility of the Board of Directors",
    },
    {
        "id": "nomination_committee",
        "topic": "Nomination Committee appointment",
        "description": (
            "The AGM shall appoint or specify how the Nomination Committee is appointed. "
            "Chair of the Board should not be a member of the Nomination Committee."
        ),
        "section": "Nomination Committee",
    },
    {
        "id": "board_remuneration_fixed",
        "topic": "Board remuneration should be fixed",
        "description": (
            "Board remuneration should be a fixed amount decided by the AGM. "
            "Chair's higher workload should be reflected. Gradual adjustment preferred."
        ),
        "section": "Remuneration of Board members",
    },
    {
        "id": "auditor_independence",
        "topic": "Auditor independence",
        "description": (
            "Auditor must be independent. Open procurement process required. "
            "Auditors should not undertake other consulting services."
        ),
        "section": "Audit and internal control",
    },
    {
        "id": "exec_remuneration_guidelines",
        "topic": "Executive remuneration guidelines at AGM",
        "description": (
            "Guidelines for remuneration of senior executives shall be approved by the AGM. "
            "Incentive programmes must include sustainability targets."
        ),
        "section": "Remuneration of senior executives and incentive programmes",
    },
    {
        "id": "incentive_sustainability",
        "topic": "Incentive programmes linked to sustainability",
        "description": (
            "Incentive programmes should include a clear and strong link to the Company's "
            "relevant and material sustainability goals. Performance criteria required for "
            "programmes without own investment."
        ),
        "section": "Remuneration of senior executives and incentive programmes",
    },
    {
        "id": "new_shares_preferential",
        "topic": "New share issues with preferential rights",
        "description": (
            "Issues of new shares shall be conducted with preferential right for existing "
            "shareholders. Directed issues must be specifically motivated."
        ),
        "section": "New issues of shares",
    },
    {
        "id": "buyback_lowest_price",
        "topic": "Buybacks of lowest-priced share type",
        "description": (
            "Buybacks shall only be made of the lowest-priced share type. "
            "Shareholders should vote on buybacks at the AGM."
        ),
        "section": "Capital structure",
    },
    {
        "id": "equal_treatment",
        "topic": "Equal treatment of shareholders",
        "description": (
            "Shares with same financial rights must be treated equally. "
            "No anti-takeover provisions in Articles of Association."
        ),
        "section": "Equal treatment",
    },
    {
        "id": "full_documentation",
        "topic": "Full documentation before AGM",
        "description": (
            "Full decision-making documentation must be available on the website "
            "in good time before the AGM."
        ),
        "section": "General Meetings",
    },
]


def parse_md_file(filepath):
    """Parse a kallelse markdown file."""
    with open(filepath, encoding="utf-8") as f:
        content = f.read()

    item = {"filename": os.path.basename(filepath), "raw": content}

    m = re.search(r"^# (.+)$", content, re.MULTILINE)
    item["title"] = m.group(1).strip() if m else ""

    m = re.search(r"\*\*Published:\*\*\s*(.+)", content)
    item["pub_date_raw"] = m.group(1).strip() if m else ""

    m = re.search(r"\*\*Source:\*\*\s*\[([^\]]*)\]\(([^)]*)\)", content)
    item["source_url"] = m.group(2).strip() if m else ""

    m = re.search(r"\*\*(?:Cision ID|MFN ID):\*\*\s*(.+)", content)
    item["company_id"] = m.group(1).strip() if m else ""

    m = re.search(r"\*\*Company:\*\*\s*(.+)", content)
    item["company"] = m.group(1).strip() if m else ""

    if not item["company"] and item["company_id"]:
        item["company"] = item["company_id"].replace("-", " ").title()

    item["source_type"] = "mfn" if "MFN ID" in content else "cision"

    parts = content.split("---", 1)
    item["body"] = parts[1].strip() if len(parts) > 1 else ""

    # Parse date
    item["sort_date"] = _parse_date(item["pub_date_raw"])

    return item


def _parse_date(date_str):
    for fmt in ["%Y-%m-%d %H:%M:%S", "%a, %d %b %Y %H:%M:%S %Z"]:
        try:
            return datetime.strptime(date_str.replace(" GMT", ""), fmt.replace(" %Z", ""))
        except ValueError:
            pass
    return datetime.min


def extract_agenda_items(body):
    """Extract numbered agenda items (Punkt N) from the body text."""
    items = []

    # Match "Punkt N:" or "Punkt N a):" patterns
    pattern = r"\*\*Punkt\s+([\d]+(?:\s*[a-z]\))?)\s*[:\)]\s*([^*]+)\*\*"
    for m in re.finditer(pattern, body, re.IGNORECASE):
        num = m.group(1).strip().rstrip(":")
        title = m.group(2).strip().rstrip("*").strip()
        # Get context: text following this heading until the next Punkt or end
        start = m.end()
        next_m = re.search(r"\*\*Punkt\s+\d+", body[start:], re.IGNORECASE)
        end = start + next_m.start() if next_m else min(start + 2000, len(body))
        context = body[start:end].strip()
        items.append({"num": num, "title": title, "context": context})

    # Also try to extract the full agenda list if present
    if not items:
        dagordning_m = re.search(
            r"(?:FÖRSLAG TILL DAGORDNING|DAGORDNING)(.*?)(?:\*\*BESLUTSFÖRSLAG|\*\*Punkt)",
            body, re.DOTALL | re.IGNORECASE,
        )
        if dagordning_m:
            text = dagordning_m.group(1)
            for line in re.split(r"[-•]\s*", text):
                line = line.strip()
                if line and len(line) > 5:
                    items.append({"num": "", "title": line, "context": ""})

    return items


def assess_agenda_item(item, body):
    """Assess a single agenda item against SEB policy rules. Returns list of assessments."""
    assessments = []
    title_lower = item["title"].lower()
    context_lower = item["context"].lower()
    combined = title_lower + " " + context_lower

    # --- Board composition ---
    if any(kw in combined for kw in ["val till styrelsen", "val av styrelse", "styrelseledamöter"]):
        # Check for deputy members
        if "suppleant" in combined:
            assessments.append(flag("no_deputy_board", "warning",
                "Proposal includes deputy board members. SEB policy recommends against this."))
        else:
            assessments.append(flag("no_deputy_board", "ok",
                "No deputy board members proposed."))

        # Check independence
        if "oberoende" in combined:
            # Try to count independent members
            indep_m = re.findall(r"(\d+)\s*av\s*(?:de\s*)?(\d+)", combined)
            if indep_m:
                indep, total = int(indep_m[0][0]), int(indep_m[0][1])
                if indep > total / 2:
                    assessments.append(flag("board_independence", "ok",
                        f"{indep} of {total} proposed board members are independent (majority)."))
                else:
                    assessments.append(flag("board_independence", "warning",
                        f"Only {indep} of {total} proposed members are independent. Policy requires majority."))
            else:
                assessments.append(flag("board_independence", "info",
                    "Independence is mentioned but specific numbers could not be extracted."))
        else:
            assessments.append(flag("board_independence", "info",
                "No explicit independence information found in proposal."))

        # Check one-year term
        if any(kw in combined for kw in ["nästa årsstämma", "fram till slutet av nästa"]):
            assessments.append(flag("board_one_year_term", "ok",
                "Board elected until next AGM (max one year). Aligns with policy."))

        # Check CEO on board
        if any(kw in combined for kw in ["verkställande direktör", "vd"]):
            if any(kw in combined for kw in ["omval", "nyval"]):
                # VD mentioned in board election context - potential issue
                if "styrelseledamot" in combined and ("vd" in combined or "verkställande" in combined):
                    assessments.append(flag("board_chair_not_ceo", "info",
                        "CEO/VD is referenced in board context. Verify CEO is not proposed as board member."))

    # --- Board number ---
    if any(kw in combined for kw in ["antalet styrelseledamöter", "antal styrelseledamöter"]):
        if "suppleant" not in combined or "utan" in combined:
            assessments.append(flag("no_deputy_board", "ok",
                "Proposal specifies board size without deputy members."))

    # --- Board chair ---
    if "styrelseordförande" in combined and "val" in combined:
        assessments.append(flag("board_chair_not_ceo", "info",
            "Board chair election proposed. Verify proposed chair is not current or former CEO."))

    # --- Board remuneration ---
    if any(kw in combined for kw in ["arvode till styrelse", "arvoden till styrelse", "styrelsearvode"]):
        if any(kw in combined for kw in ["ordförande", "ordföranden"]):
            assessments.append(flag("board_remuneration_fixed", "ok",
                "Board remuneration differentiates chair from other members. Aligns with policy."))
        else:
            assessments.append(flag("board_remuneration_fixed", "info",
                "Board remuneration proposed. Verify chair's higher workload is reflected."))

    # --- Auditor ---
    if any(kw in combined for kw in ["val av revisor", "revisor"]):
        assessments.append(flag("auditor_independence", "info",
            "Auditor election/re-election proposed. Verify open procurement and independence."))

    # --- Nomination Committee ---
    if "valberedning" in combined and any(kw in combined for kw in ["beslut om", "instruktion"]):
        assessments.append(flag("nomination_committee", "info",
            "Nomination committee procedure proposed. Verify chair of board is not a member."))

    # --- Executive remuneration ---
    if any(kw in combined for kw in ["ersättning till ledande", "riktlinjer för ersättning",
                                      "ersättningsrapport"]):
        if "hållbar" in combined or "sustainability" in combined:
            assessments.append(flag("exec_remuneration_guidelines", "ok",
                "Executive remuneration guidelines include sustainability references. Aligns with policy."))
        else:
            assessments.append(flag("exec_remuneration_guidelines", "warning",
                "Executive remuneration guidelines proposed but no explicit sustainability link found. "
                "SEB policy requires meaningful sustainability targets."))

    # --- Incentive programmes ---
    if any(kw in combined for kw in ["teckningsoption", "incitamentsprogram", "aktiesparprogram",
                                      "optionsprogram"]):
        findings = []
        if any(kw in combined for kw in ["hållbar", "sustainability", "miljö", "klimat"]):
            findings.append(("ok", "Incentive programme references sustainability goals."))
        else:
            findings.append(("warning",
                "Incentive programme proposed without explicit sustainability link. "
                "SEB policy requires clear connection to sustainability goals."))

        if any(kw in combined for kw in ["marknadsvärde", "marknadsmässig", "marknadspris"]):
            findings.append(("ok", "Participants acquire at market value (own investment element)."))
        elif any(kw in combined for kw in ["prestation", "performance", "mätbar"]):
            findings.append(("ok", "Programme includes performance criteria."))
        else:
            findings.append(("info",
                "Verify programme has either own investment at market price or clear performance criteria."))

        if any(kw in combined for kw in ["tre år", "3 år", "fyra år", "4 år", "långsiktig"]):
            findings.append(("ok", "Programme has long-term horizon (3+ years). Aligns with policy."))

        if any(kw in combined for kw in ["maximal", "tak ", "begränsa", "cap"]):
            findings.append(("ok", "Programme has a cap on costs/dilution."))

        for status, msg in findings:
            assessments.append(flag("incentive_sustainability", status, msg))

    # --- New share issues / authorization ---
    if any(kw in combined for kw in ["nyemission", "bemyndigande", "emission"]):
        if "företrädesrätt" in combined:
            if "avvikelse" in combined or "utan företrädesrätt" in combined:
                if any(kw in combined for kw in ["motivera", "skäl", "syfte"]):
                    assessments.append(flag("new_shares_preferential", "ok",
                        "Directed issue proposed with stated justification. Policy requires specific motivation."))
                else:
                    assessments.append(flag("new_shares_preferential", "warning",
                        "Directed issue proposed without clear justification. "
                        "SEB policy requires specific motivation for deviating from preferential rights."))
            else:
                assessments.append(flag("new_shares_preferential", "ok",
                    "Issue with preferential rights for existing shareholders. Aligns with policy."))

        if "nästa årsstämma" in combined:
            assessments.append(flag("new_shares_preferential", "ok",
                "Authorization limited until next AGM. Aligns with policy."))

    # --- Buybacks ---
    if any(kw in combined for kw in ["förvärv av egna", "återköp"]):
        assessments.append(flag("buyback_lowest_price", "info",
            "Buyback authorization proposed. Verify buybacks target lowest-priced share type."))

    # --- Dividend / capital structure ---
    if any(kw in combined for kw in ["utdelning", "vinst eller förlust", "vinstdisposition",
                                      "dispositioner"]):
        assessments.append(flag("equal_treatment", "info",
            "Dividend/profit distribution proposed. Verify equal treatment of share classes."))

    # --- Discharge of liability ---
    if "ansvarsfrihet" in combined:
        if "individuell" in combined or "separata" in combined:
            assessments.append(flag("equal_treatment", "ok",
                "Individual discharge votes for each board member. Good governance practice."))
        else:
            assessments.append(flag("equal_treatment", "info",
                "Discharge of liability proposed. Consider whether individual votes would be appropriate."))

    # Default if nothing matched
    if not assessments:
        assessments.append(flag("full_documentation", "neutral",
            "Standard procedural item. No specific policy concerns."))

    return assessments


def flag(rule_id, status, message):
    """Create an assessment flag."""
    rule = next((r for r in POLICY_RULES if r["id"] == rule_id), None)
    return {
        "rule_id": rule_id,
        "status": status,
        "message": message,
        "policy_section": rule["section"] if rule else "",
        "policy_description": rule["description"] if rule else "",
    }


def escape(text):
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def status_icon(status):
    if status == "ok":
        return '<span class="agm-status agm-ok">ALIGNED</span>'
    elif status == "warning":
        return '<span class="agm-status agm-warning">REVIEW</span>'
    elif status == "info":
        return '<span class="agm-status agm-info">INFO</span>'
    return '<span class="agm-status agm-neutral">STANDARD</span>'


def generate_html(agm_items):
    agm_items.sort(key=lambda x: x["sort_date"], reverse=True)

    companies_html = []
    for agm in agm_items:
        agenda = extract_agenda_items(agm["body"])
        if not agenda:
            continue

        # Assess each agenda item
        agenda_rows = []
        summary = {"ok": 0, "warning": 0, "info": 0, "neutral": 0}
        for ai in agenda:
            assessments = assess_agenda_item(ai, agm["body"])
            for a in assessments:
                summary[a["status"]] = summary.get(a["status"], 0) + 1

            assessment_html = ""
            for a in assessments:
                assessment_html += f"""
                <div class="agm-assessment">
                  {status_icon(a['status'])}
                  <div class="agm-assessment-text">
                    <div class="agm-assessment-msg">{escape(a['message'])}</div>
                    <div class="agm-assessment-ref">Policy: {escape(a['policy_section'])}</div>
                  </div>
                </div>"""

            title_display = ai["title"]
            if ai["num"]:
                title_display = f"Punkt {ai['num']}: {ai['title']}"

            agenda_rows.append(f"""
            <div class="agm-agenda-item">
              <div class="agm-agenda-title">{escape(title_display)}</div>
              <div class="agm-assessments">
                {assessment_html}
              </div>
            </div>""")

        source_badge = (
            '<span class="feed-badge feed-badge-mfn">MFN</span>'
            if agm["source_type"] == "mfn"
            else '<span class="feed-badge feed-badge-cision">Cision</span>'
        )

        date_display = agm["sort_date"].strftime("%Y-%m-%d %H:%M") if agm["sort_date"] != datetime.min else agm["pub_date_raw"]

        source_link = ""
        if agm["source_url"]:
            source_link = f'<a href="{escape(agm["source_url"])}" class="feed-source-link" target="_blank">Full notice</a>'

        summary_html = (
            f'<span class="agm-summary-ok">{summary["ok"]} aligned</span> '
            f'<span class="agm-summary-warning">{summary["warning"]} review</span> '
            f'<span class="agm-summary-info">{summary["info"]} info</span>'
        )

        companies_html.append(f"""
      <div class="agm-company" onclick="toggleAgm(this)">
        <div class="agm-company-header">
          <div class="feed-item-meta">
            {source_badge}
            <span class="feed-date">{escape(date_display)}</span>
            {source_link}
          </div>
          <h3 class="agm-company-title">{escape(agm['company'] or agm['title'])}</h3>
          <div class="agm-company-subtitle">{escape(agm['title'])}</div>
          <div class="agm-summary">{summary_html}</div>
        </div>
        <div class="agm-body" style="display:none;">
          <div class="agm-agenda-list">
            {''.join(agenda_rows)}
          </div>
        </div>
      </div>""")

    items_html = "\n".join(companies_html)

    return f"""<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en"><head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">

<title>AGM – Aktiecase.com</title>
<style>
code{{white-space: pre-wrap;}}
span.smallcaps{{font-variant: small-caps;}}
div.columns{{display: flex; gap: min(4vw, 1.5em);}}
div.column{{flex: auto; overflow-x: auto;}}
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
  .agm-container {{
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
  }}
  .agm-header {{
    margin-bottom: 30px;
  }}
  .agm-header h1 {{
    font-family: 'Century Gothic bold', sans-serif;
    font-size: 48px;
    margin-bottom: 10px;
  }}
  .agm-header-description {{
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
  }}
  .agm-legend {{
    display: flex;
    gap: 16px;
    margin-bottom: 25px;
    flex-wrap: wrap;
    font-family: 'Arial', sans-serif;
    font-size: 14px;
  }}
  .agm-legend-item {{
    display: flex;
    align-items: center;
    gap: 6px;
  }}
  .agm-company {{
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 14px;
    cursor: pointer;
    transition: box-shadow 0.2s, border-color 0.2s;
    background: #fff;
  }}
  .agm-company:hover {{
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    border-color: #ccc;
  }}
  .agm-company.expanded {{
    border-color: #999;
  }}
  .agm-company-title {{
    font-family: 'Century Gothic bold', sans-serif;
    font-size: 24px;
    margin: 6px 0 4px 0;
    color: #282828;
  }}
  .agm-company-subtitle {{
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  }}
  .agm-summary {{
    display: flex;
    gap: 12px;
    font-family: 'Arial', sans-serif;
    font-size: 13px;
  }}
  .agm-summary-ok {{
    color: #16a34a;
    font-weight: bold;
  }}
  .agm-summary-warning {{
    color: #d97706;
    font-weight: bold;
  }}
  .agm-summary-info {{
    color: #2563eb;
    font-weight: bold;
  }}
  .agm-body {{
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid #e8e8e8;
  }}
  .agm-agenda-item {{
    padding: 12px 0;
    border-bottom: 1px solid #f0f0f0;
  }}
  .agm-agenda-item:last-child {{
    border-bottom: none;
  }}
  .agm-agenda-title {{
    font-family: 'Century Gothic bold', sans-serif;
    font-size: 17px;
    color: #282828;
    margin-bottom: 8px;
  }}
  .agm-assessment {{
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin: 6px 0;
    padding: 8px 12px;
    border-radius: 6px;
    background: #f9f9f9;
  }}
  .agm-status {{
    font-family: 'Arial', sans-serif !important;
    font-size: 11px !important;
    font-weight: bold;
    padding: 2px 8px;
    border-radius: 4px;
    white-space: nowrap;
    color: #fff !important;
    flex-shrink: 0;
  }}
  .agm-ok {{
    background: #16a34a;
  }}
  .agm-warning {{
    background: #d97706;
  }}
  .agm-info {{
    background: #2563eb;
  }}
  .agm-neutral {{
    background: #9ca3af;
  }}
  .agm-assessment-text {{
    flex: 1;
  }}
  .agm-assessment-msg {{
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    color: #282828;
    line-height: 1.5;
  }}
  .agm-assessment-ref {{
    font-family: 'Arial', sans-serif;
    font-size: 12px;
    color: #888;
    margin-top: 2px;
    font-style: italic;
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
  .feed-item-meta {{
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }}
  .feed-date {{
    font-family: 'Arial', sans-serif !important;
    font-size: 13px !important;
    color: #888 !important;
  }}
  .feed-source-link {{
    font-family: 'Arial', sans-serif;
    font-size: 13px;
    color: #2563eb !important;
    text-decoration: none;
  }}
  .feed-source-link:hover {{
    text-decoration: underline;
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
    <a class="nav-link" href="feed.html">
<span class="menu-text">Feed</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="agm.html">
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

<div class="agm-container">
  <div class="agm-header">
    <h1>AGM Policy Assessment</h1>
    <div class="agm-header-description">
      Annual General Meeting notices assessed against
      <strong>SEB Asset Management's Principles for Shareholder Engagement 2025</strong>.
      Each agenda item is checked for alignment with the policy on board composition,
      remuneration, incentive programmes, share issues, and governance practices.
    </div>
  </div>

  <div class="agm-legend">
    <div class="agm-legend-item">{status_icon('ok')} Aligns with policy</div>
    <div class="agm-legend-item">{status_icon('warning')} Needs review</div>
    <div class="agm-legend-item">{status_icon('info')} Verify details</div>
    <div class="agm-legend-item">{status_icon('neutral')} Standard item</div>
  </div>

  <div id="agm-items">
    {items_html}
  </div>
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
function toggleAgm(el) {{
  var body = el.querySelector('.agm-body');
  if (body.style.display === 'none') {{
    body.style.display = 'block';
    el.classList.add('expanded');
  }} else {{
    body.style.display = 'none';
    el.classList.remove('expanded');
  }}
}}
</script>

</body></html>"""


def main():
    items = []
    for filename in os.listdir(FEED_DIR):
        if filename.endswith(".md") and "kallelse" in filename.lower():
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
    print(f"Generated agm.html with {len(items)} AGM notices.")


if __name__ == "__main__":
    main()
