"""
Validate quarterly report data against annual report figures.

For income statement items (flow): sum of Q1+Q2+Q3+Q4 should equal annual total.
For balance sheet items (stock): Q4 value should equal annual year-end value.

Works with normalized data format:
  company_data_normalized.csv  (companyid, attribute_id, value, ...)
  attribute_data.csv           (attribute_id -> attribute_name, section, ...)
  company_id_mapping.csv       (companyid -> company_name)
"""

import csv
import os
import sys
from collections import defaultdict

DATA_DIR = os.path.dirname(os.path.abspath(__file__))


def load_attribute_map(path=None):
    """Load attribute_id -> {name, section, unit} mapping."""
    path = path or os.path.join(DATA_DIR, "attribute_data.csv")
    mapping = {}
    reverse = {}
    with open(path, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f, delimiter="\t")
        for row in reader:
            aid = int(row["attribute_id"])
            name = row["attribute_name"]
            mapping[aid] = {
                "name": name,
                "section": row["section"],
                "unit": row["standard_unit"],
            }
            reverse[name] = aid
    return mapping, reverse


def load_company_map(path=None):
    path = path or os.path.join(DATA_DIR, "company_id_mapping.csv")
    mapping = {}
    with open(path, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f, delimiter="\t")
        for row in reader:
            mapping[int(row["companyid"])] = row["company_name"]
    return mapping


# Annual report figures extracted from PDFs
# 2023 Årsredovisning — pages 7, 9, 64-69
ANNUAL_2023 = {
    # Income Statement (flow items) — attribute_name: annual total
    "income": {
        "Nettoomsättning": 1060.8,
        "Kostnad sålda varor": -552.9,
        "Bruttoresultat": 507.9,
        "Lagerhanterings- och distributionskostnader": -171.3,
        "Marknadsföringskostnader": -100.5,
        "Administrations- och övriga rörelsekostnader": -223.1,
        "Rörelseresultat": 10.9,
        "Resultat före skatt": -2.3,
        "Resultat efter skatt": -1.5,
    },
    # Balance Sheet (stock items) — Q4 value should match year-end
    "balance": {
        "Goodwill": 39.7,
        "Varulager": 152.3,
        "Likvida medel": 151.1,
        "Summa tillgångar": 799.8,
        "Summa eget kapital": 178.6,
        "Leasingskulder (lång)": 183.3,
        "Leasingskulder (kort)": 100.3,
        "Leverantörsskulder": 90.3,
    },
}

# 2024 Årsredovisning — pages 7, 9, 60-65
ANNUAL_2024 = {
    "income": {
        "Nettoomsättning": 1094.3,
        "Kostnad sålda varor": -512.9,
        "Bruttoresultat": 581.4,
        "Lagerhanterings- och distributionskostnader": -142.9,
        "Marknadsföringskostnader": -117.0,
        "Administrations- och övriga rörelsekostnader": -228.7,
        "Rörelseresultat": 93.1,
        "Resultat före skatt": 82.3,
        "Resultat efter skatt": 83.4,
    },
    "balance": {
        "Goodwill": 39.7,
        "Varulager": 172.6,
        "Likvida medel": 196.9,
        "Summa tillgångar": 871.5,
        "Summa eget kapital": 237.1,
        "Leasingskulder (lång)": 224.6,
        "Leasingskulder (kort)": 35.7,
        "Leverantörsskulder": 85.4,
    },
}

TOLERANCE_PCT = 1.5
TOLERANCE_ABS = 1.0


def load_quarterly_data(csv_path, attr_map):
    """Load normalized quarterly data grouped by (year, attribute_name) -> {quarter: value}."""
    data = defaultdict(lambda: defaultdict(dict))
    with open(csv_path, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f, delimiter="\t")
        for row in reader:
            aid = int(row["attribute_id"])
            if aid not in attr_map:
                continue
            attr_name = attr_map[aid]["name"]
            year = int(row["fiscial_year"])
            quarter = int(row["quarter"])
            try:
                val = float(row["value"])
            except (ValueError, TypeError):
                continue
            data[year][attr_name][quarter] = val
    return data


def check_match(label, quarterly_val, annual_val):
    diff = abs(quarterly_val - annual_val)
    if annual_val != 0:
        pct_diff = abs(diff / annual_val) * 100
    else:
        pct_diff = 0 if diff == 0 else float("inf")

    if diff <= TOLERANCE_ABS or pct_diff <= TOLERANCE_PCT:
        return "OK", f"{label}: quarterly={quarterly_val:.1f}, annual={annual_val:.1f} (diff={diff:.1f}, {pct_diff:.1f}%)"
    else:
        return "MISMATCH", f"{label}: quarterly={quarterly_val:.1f}, annual={annual_val:.1f} (diff={diff:.1f}, {pct_diff:.1f}%)"


def validate_year(year, quarterly_data, annual_data):
    results = {"OK": [], "MISMATCH": [], "MISSING": []}

    quarters_available = set()
    for attr, qdata in quarterly_data.items():
        quarters_available.update(qdata.keys())
    has_all_quarters = quarters_available == {1, 2, 3, 4}

    print(f"\n{'='*70}")
    print(f"  YEAR {year} — Quarters available: {sorted(quarters_available)}")
    print(f"{'='*70}")

    if not has_all_quarters:
        print(f"  NOTE: Only {sorted(quarters_available)} available — cannot fully validate income statement sums")
        print()

    # Income statement (flow): sum of quarters = annual
    print(f"  INCOME STATEMENT (sum of quarters vs annual)")
    print(f"  {'-'*60}")
    for annual_attr, annual_val in annual_data["income"].items():
        if annual_attr in quarterly_data:
            qvals = quarterly_data[annual_attr]
            if has_all_quarters:
                qsum = sum(qvals.get(q, 0) for q in [1, 2, 3, 4])
                status, msg = check_match(annual_attr, qsum, annual_val)
                results[status].append(msg)
                marker = "OK" if status == "OK" else "** MISMATCH **"
                print(f"    [{marker}] {msg}")
            else:
                partial_sum = sum(qvals.values())
                qs = sorted(qvals.keys())
                print(f"    [PARTIAL] {annual_attr}: Q{'+Q'.join(str(q) for q in qs)}={partial_sum:.1f}, annual={annual_val:.1f}")
        else:
            results["MISSING"].append(annual_attr)
            print(f"    [MISSING] {annual_attr}: not found in quarterly data")

    # Balance sheet (stock): Q4 = year-end
    print(f"\n  BALANCE SHEET (Q4 value vs year-end)")
    print(f"  {'-'*60}")
    for annual_attr, annual_val in annual_data["balance"].items():
        if annual_attr in quarterly_data:
            qvals = quarterly_data[annual_attr]
            if 4 in qvals:
                status, msg = check_match(annual_attr, qvals[4], annual_val)
                results[status].append(msg)
                marker = "OK" if status == "OK" else "** MISMATCH **"
                print(f"    [{marker}] {msg}")
            else:
                print(f"    [NO Q4] {annual_attr}: Q4 data missing")
        else:
            results["MISSING"].append(annual_attr)
            print(f"    [MISSING] {annual_attr}: not found in quarterly data")

    print(f"\n  SUMMARY: {len(results['OK'])} OK, {len(results['MISMATCH'])} mismatches, {len(results['MISSING'])} missing")

    if results["MISMATCH"]:
        print(f"\n  MISMATCHES:")
        for m in results["MISMATCH"]:
            print(f"    - {m}")

    return results


def main():
    csv_path = sys.argv[1] if len(sys.argv) > 1 else os.path.join(DATA_DIR, "company_data_normalized.csv")

    attr_map, _ = load_attribute_map()
    quarterly = load_quarterly_data(csv_path, attr_map)

    all_results = {}
    if 2023 in quarterly:
        all_results[2023] = validate_year(2023, quarterly[2023], ANNUAL_2023)
    if 2024 in quarterly:
        all_results[2024] = validate_year(2024, quarterly[2024], ANNUAL_2024)

    total_mismatches = sum(len(r["MISMATCH"]) for r in all_results.values())
    print(f"\n{'='*70}")
    if total_mismatches == 0:
        print("  ALL CHECKS PASSED")
    else:
        print(f"  {total_mismatches} TOTAL MISMATCHES FOUND")
    print(f"{'='*70}")

    return 1 if total_mismatches > 0 else 0


if __name__ == "__main__":
    sys.exit(main())
