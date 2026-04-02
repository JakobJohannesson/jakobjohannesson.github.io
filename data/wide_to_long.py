import csv
import sys
import re
from datetime import datetime, timezone


def parse_quarter_header(header):
    """Parse 'Q3 2023' into (quarter, fiscal_year)."""
    match = re.match(r"Q(\d)\s+(\d{4})", header.strip())
    if match:
        return int(match.group(1)), int(match.group(2))
    return None, None


def wide_to_long(input_path, company_name, source="borsdata"):
    rows = []
    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S+00")

    with open(input_path, "r", encoding="utf-8") as f:
        reader = csv.reader(f, delimiter="\t")
        header = next(reader)

        # Parse quarter headers from column index 2 onwards
        quarters = []
        for col in header[2:]:
            q, y = parse_quarter_header(col)
            quarters.append((q, y))

        for line in reader:
            if len(line) < 3 or not line[0].strip():
                continue  # skip empty separator rows

            attribute = line[0].strip()
            unit = line[1].strip() if len(line) > 1 else ""

            for i, (quarter, year) in enumerate(quarters):
                col_idx = i + 2
                if col_idx >= len(line) or not line[col_idx].strip():
                    continue
                value = line[col_idx].strip()
                if not value:
                    continue

                rows.append({
                    "Companyname": company_name,
                    "attribute": attribute,
                    "value": value,
                    "fiscial_year": year,
                    "quarter": quarter,
                    "date_inserted": now,
                    "source": source,
                    "unit": unit,
                })

    return rows


def write_long_csv(rows, output_path):
    fields = ["Companyname", "attribute", "value", "fiscial_year", "quarter",
              "date_inserted", "source", "unit"]
    with open(output_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fields, delimiter="\t")
        writer.writeheader()
        writer.writerows(rows)


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python wide_to_long.py <input_wide.csv> <company_name> [source]")
        sys.exit(1)

    input_file = sys.argv[1]
    company = sys.argv[2]
    source = sys.argv[3] if len(sys.argv) > 3 else "borsdata"

    output_file = input_file.replace("_wide", "_long_transformed")
    rows = wide_to_long(input_file, company, source)
    write_long_csv(rows, output_file)
    print(f"Wrote {len(rows)} rows to {output_file}")
