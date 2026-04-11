"""
Build script: converts CSV data files into JSON for the datadesk UI.
Outputs:
  public/data/companies.json   - list of {id, name}
  public/data/attributes.json  - list of {id, name, description, unit, frequency, section}
  public/data/sources.json     - list of {id, name}
  public/data/company/<id>.json - per-company data
"""
import csv
import json
import os

BASE = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE, "..", "..", "data")
OUT_DIR = os.path.join(BASE, "..", "public", "data")

os.makedirs(os.path.join(OUT_DIR, "company"), exist_ok=True)


def read_tsv(filename):
    path = os.path.join(DATA_DIR, filename)
    with open(path, "r", encoding="utf-8") as f:
        return list(csv.DictReader(f, delimiter="\t"))


# --- Companies ---
companies = read_tsv("company_id_mapping.csv")
company_list = [{"id": int(c["companyid"]), "name": c["company_name"]} for c in companies]
company_list.sort(key=lambda x: x["name"])
with open(os.path.join(OUT_DIR, "companies.json"), "w") as f:
    json.dump(company_list, f)
print(f"Wrote {len(company_list)} companies")

company_names = {c["id"]: c["name"] for c in company_list}

# --- Attributes ---
attributes = read_tsv("attribute_data.csv")
attr_list = []
for a in attributes:
    attr_list.append({
        "id": int(a["attribute_id"]),
        "name": a["attribute_name"],
        "description": a.get("attribute_description", ""),
        "unit": a.get("standard_unit", ""),
        "frequency": a.get("frequency", ""),
        "section": a.get("section", ""),
    })
attr_list.sort(key=lambda x: x["id"])
with open(os.path.join(OUT_DIR, "attributes.json"), "w") as f:
    json.dump(attr_list, f)
print(f"Wrote {len(attr_list)} attributes")

attr_map = {a["id"]: a for a in attr_list}

# --- Sources ---
sources = read_tsv("source_data.csv")
source_list = [{"id": int(s["source_id"]), "name": s["source_name"]} for s in sources]
with open(os.path.join(OUT_DIR, "sources.json"), "w") as f:
    json.dump(source_list, f)
print(f"Wrote {len(source_list)} sources")

# --- Company data (merge all normalized files) ---
# Group data by companyid
company_data: dict[int, list] = {}

def process_data_file(filename):
    rows = read_tsv(filename)
    count = 0
    for row in rows:
        cid = int(row["companyid"])
        aid = int(row["attribute_id"])
        try:
            val = float(row["value"])
        except (ValueError, TypeError):
            continue
        year = int(row["fiscial_year"])
        quarter = int(row["quarter"])
        source_id = int(row.get("source_id", 0))
        unit = row.get("unit", "")

        if cid not in company_data:
            company_data[cid] = []
        company_data[cid].append({
            "a": aid,      # attribute_id
            "v": round(val, 4),
            "y": year,     # fiscal_year
            "q": quarter,  # quarter (0 = full year)
            "s": source_id,
            "u": unit,
        })
        count += 1
    print(f"  Processed {filename}: {count} rows")

process_data_file("company_data_normalized.csv")
process_data_file("borsdata_normalized.csv")
process_data_file("company_data_annual_reports.csv")

# Write per-company JSON and track which sources each company has
companies_with_data = set()
source_to_companies: dict[int, set[int]] = {}

for cid, rows in company_data.items():
    with open(os.path.join(OUT_DIR, "company", f"{cid}.json"), "w") as f:
        json.dump(rows, f)
    companies_with_data.add(cid)
    for row in rows:
        sid = row["s"]
        if sid not in source_to_companies:
            source_to_companies[sid] = set()
        source_to_companies[sid].add(cid)

print(f"\nWrote data for {len(companies_with_data)} companies")

# Write an index of companies that actually have data
companies_with_data_list = [
    c for c in company_list if c["id"] in companies_with_data
]
with open(os.path.join(OUT_DIR, "companies_with_data.json"), "w") as f:
    json.dump(companies_with_data_list, f)
print(f"Companies with data: {len(companies_with_data_list)}")

# Write source -> company_id[] mapping
companies_by_source = {
    str(sid): sorted(cids) for sid, cids in source_to_companies.items()
}
with open(os.path.join(OUT_DIR, "companies_by_source.json"), "w") as f:
    json.dump(companies_by_source, f)
for sid, cids in companies_by_source.items():
    src_name = next((s["name"] for s in source_list if s["id"] == int(sid)), sid)
    print(f"  Source '{src_name}' (id={sid}): {len(cids)} companies")
