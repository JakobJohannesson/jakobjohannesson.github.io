import csv
import sys
import statistics
from dataclasses import dataclass, field


@dataclass
class ValidationResult:
    company: str
    attribute: str
    value: float
    year: int
    quarter: int
    warnings: list = field(default_factory=list)
    errors: list = field(default_factory=list)

    @property
    def passed(self):
        return len(self.errors) == 0

    def summary(self):
        status = "PASS" if self.passed else "FAIL"
        lines = [f"[{status}] {self.company} | {self.attribute} | {self.value} | {self.year}-Q{self.quarter}"]
        for e in self.errors:
            lines.append(f"  ERROR: {e}")
        for w in self.warnings:
            lines.append(f"  WARN:  {w}")
        return "\n".join(lines)


class DataValidator:
    """Validates incoming datapoints against historical data."""

    # Value deviates more than this many std devs from mean -> warning
    ZSCORE_WARN = 2.0
    # Value deviates more than this many std devs from mean -> error
    ZSCORE_ERROR = 3.5
    # Quarter-over-quarter change exceeding this factor -> warning
    QOQ_CHANGE_WARN = 3.0
    # Quarter-over-quarter change exceeding this factor -> error
    QOQ_CHANGE_ERROR = 10.0

    def __init__(self, historical_csv_path):
        self.history = {}       # (company, attribute) -> list of {value, year, quarter}
        self.known_attrs = {}   # (company,) -> set of attribute names
        self.known_units = {}   # (company, attribute) -> unit
        self._load(historical_csv_path)

    def _load(self, path):
        with open(path, "r", encoding="utf-8") as f:
            reader = csv.DictReader(f, delimiter="\t")
            for row in reader:
                company = row["Companyname"]
                attr = row["attribute"]
                try:
                    val = float(row["value"])
                except (ValueError, TypeError):
                    continue
                year = int(row["fiscial_year"])
                quarter = int(row["quarter"])
                unit = row.get("unit", "")

                key = (company, attr)
                self.history.setdefault(key, []).append({
                    "value": val, "year": year, "quarter": quarter
                })
                self.known_attrs.setdefault(company, set()).add(attr)
                self.known_units[key] = unit

    def validate(self, company, attribute, value, year, quarter):
        result = ValidationResult(company, attribute, value, year, quarter)

        try:
            val = float(value)
        except (ValueError, TypeError):
            result.errors.append(f"Value '{value}' is not a valid number")
            return result

        # 1. Check quarter is valid
        if quarter not in (1, 2, 3, 4):
            result.errors.append(f"Invalid quarter: {quarter}")

        # 2. Check year is reasonable
        if year < 2000 or year > 2030:
            result.errors.append(f"Year {year} outside expected range 2000-2030")

        # 3. Check if attribute is known for this company
        if company in self.known_attrs and attribute not in self.known_attrs[company]:
            result.warnings.append(
                f"Attribute '{attribute}' has not been seen before for '{company}'"
            )

        key = (company, attribute)
        historical = self.history.get(key, [])

        if not historical:
            result.warnings.append("No historical data to compare against")
            return result

        hist_values = [h["value"] for h in historical]

        # 4. Check for exact duplicate (same company, attribute, year, quarter, value)
        for h in historical:
            if h["year"] == year and h["quarter"] == quarter and h["value"] == val:
                result.warnings.append(
                    f"Exact duplicate: value {val} already exists for {year}-Q{quarter}"
                )
                break

        # 5. Check for conflicting value (same period, different value)
        for h in historical:
            if h["year"] == year and h["quarter"] == quarter and h["value"] != val:
                pct = abs(val - h["value"]) / abs(h["value"]) * 100 if h["value"] != 0 else float("inf")
                result.warnings.append(
                    f"Value conflict: existing value {h['value']} for {year}-Q{quarter}, "
                    f"new value {val} (diff {pct:.1f}%)"
                )
                break

        # 6. Z-score check against historical distribution
        if len(hist_values) >= 3:
            mean = statistics.mean(hist_values)
            stdev = statistics.stdev(hist_values)
            if stdev > 0:
                zscore = abs(val - mean) / stdev
                if zscore > self.ZSCORE_ERROR:
                    result.errors.append(
                        f"Value {val} is {zscore:.1f} std devs from historical mean "
                        f"{mean:.2f} (stdev {stdev:.2f})"
                    )
                elif zscore > self.ZSCORE_WARN:
                    result.warnings.append(
                        f"Value {val} is {zscore:.1f} std devs from historical mean "
                        f"{mean:.2f} (stdev {stdev:.2f})"
                    )

        # 7. Sign change check (for attributes that are consistently positive or negative)
        positive_count = sum(1 for v in hist_values if v > 0)
        negative_count = sum(1 for v in hist_values if v < 0)
        total = len(hist_values)
        if total >= 3:
            if positive_count == total and val < 0:
                result.warnings.append(
                    f"Sign change: value {val} is negative but all {total} "
                    f"historical values were positive"
                )
            elif negative_count == total and val > 0:
                result.warnings.append(
                    f"Sign change: value {val} is positive but all {total} "
                    f"historical values were negative"
                )

        # 8. Quarter-over-quarter change check
        prev = self._get_previous_quarter(historical, year, quarter)
        if prev is not None and prev["value"] != 0:
            change_ratio = abs(val / prev["value"])
            inv_ratio = abs(prev["value"] / val) if val != 0 else float("inf")
            max_ratio = max(change_ratio, inv_ratio)
            if max_ratio > self.QOQ_CHANGE_ERROR:
                result.errors.append(
                    f"Extreme QoQ change: {prev['value']} -> {val} "
                    f"({max_ratio:.1f}x), previous was {prev['year']}-Q{prev['quarter']}"
                )
            elif max_ratio > self.QOQ_CHANGE_WARN:
                result.warnings.append(
                    f"Large QoQ change: {prev['value']} -> {val} "
                    f"({max_ratio:.1f}x), previous was {prev['year']}-Q{prev['quarter']}"
                )

        # 9. Range check: value should be within historical min/max with some margin
        if len(hist_values) >= 3:
            hist_min = min(hist_values)
            hist_max = max(hist_values)
            hist_range = hist_max - hist_min
            margin = hist_range * 0.5 if hist_range > 0 else abs(hist_max) * 0.5
            if val < hist_min - margin or val > hist_max + margin:
                result.warnings.append(
                    f"Value {val} outside historical range "
                    f"[{hist_min}, {hist_max}] with 50% margin"
                )

        return result

    def _get_previous_quarter(self, historical, year, quarter):
        """Find the data point for the quarter immediately before the given one."""
        if quarter > 1:
            prev_q, prev_y = quarter - 1, year
        else:
            prev_q, prev_y = 4, year - 1

        for h in historical:
            if h["year"] == prev_y and h["quarter"] == prev_q:
                return h
        return None

    def validate_batch(self, rows):
        """Validate a list of dicts with keys: Companyname, attribute, value, fiscial_year, quarter."""
        results = []
        for row in rows:
            result = self.validate(
                company=row["Companyname"],
                attribute=row["attribute"],
                value=row["value"],
                year=int(row["fiscial_year"]),
                quarter=int(row["quarter"]),
            )
            results.append(result)
        return results


def main():
    if len(sys.argv) < 3:
        print("Usage: python validate_data.py <historical.csv> <new_data.csv>")
        print("       python validate_data.py <historical.csv> --single <company> <attribute> <value> <year> <quarter>")
        sys.exit(1)

    historical_path = sys.argv[1]
    validator = DataValidator(historical_path)

    if sys.argv[2] == "--single":
        if len(sys.argv) < 8:
            print("Usage: ... --single <company> <attribute> <value> <year> <quarter>")
            sys.exit(1)
        company = sys.argv[3]
        attribute = sys.argv[4]
        value = sys.argv[5]
        year = int(sys.argv[6])
        quarter = int(sys.argv[7])

        result = validator.validate(company, attribute, value, year, quarter)
        print(result.summary())
        sys.exit(0 if result.passed else 1)
    else:
        new_data_path = sys.argv[2]
        with open(new_data_path, "r", encoding="utf-8") as f:
            reader = csv.DictReader(f, delimiter="\t")
            rows = list(reader)

        results = validator.validate_batch(rows)

        errors_total = 0
        warnings_total = 0
        for r in results:
            if r.errors or r.warnings:
                print(r.summary())
                print()
            errors_total += len(r.errors)
            warnings_total += len(r.warnings)

        print(f"--- Validated {len(results)} rows: {errors_total} errors, {warnings_total} warnings ---")
        sys.exit(1 if errors_total > 0 else 0)


if __name__ == "__main__":
    main()
