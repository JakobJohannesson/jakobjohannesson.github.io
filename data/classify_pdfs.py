"""
Classify PDFs from press_releases_pdf bucket into:
  - Annual report
  - Quarterly report
  - other
"""
import csv
import re

# Read filenames
with open("/tmp/all_pdfs.txt") as f:
    filenames = [line.strip() for line in f if line.strip()]

ANNUAL_PATTERNS = [
    r'annual[_-]report',
    r'arsredovisning',
    r'ars-och-hallbarhetsredovisning',
    r'annual[_-]and[_-]sustainability[_-]report',
    r'annual_and_sustainability_report',
    r'integrated[_-]annual[_-]report',
    r'asr-\d{4}',           # e.g. humana-asr-2025
    r'-ar-\d{4}',           # e.g. begroup-ar-2025
    r'_ar[_-]\d{4}',        # e.g. ctt-ar-2025
    r'form-20-f',           # SEC annual filing
]

QUARTERLY_PATTERNS = [
    r'delarsrapport',
    r'interim[_-]report',
    r'quarterly[_-]report',
    r'kvartalsrapport',
    r'q[1-4][_-]\d{4}',
    r'q[1-4]-report',
]

def classify(filename):
    name_lower = filename.lower()
    for pat in ANNUAL_PATTERNS:
        if re.search(pat, name_lower):
            return "Annual report"
    for pat in QUARTERLY_PATTERNS:
        if re.search(pat, name_lower):
            return "Quarterly report"
    return "other"

rows = []
for fn in filenames:
    doc_type = classify(fn)
    rows.append({
        "file_name": fn,
        "processed": "FALSE",
        "type": doc_type,
    })

# Write CSV
with open("press_release_pdf_classification.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=["file_name", "processed", "type"], delimiter="\t")
    w.writeheader()
    w.writerows(rows)

# Summary
from collections import Counter
counts = Counter(r["type"] for r in rows)
print(f"Total: {len(rows)}")
for t, c in sorted(counts.items()):
    print(f"  {t}: {c}")

# List classified reports for review
print("\n=== Annual reports ===")
for r in rows:
    if r["type"] == "Annual report":
        print(f"  {r['file_name']}")
print("\n=== Quarterly reports ===")
for r in rows:
    if r["type"] == "Quarterly report":
        print(f"  {r['file_name']}")
