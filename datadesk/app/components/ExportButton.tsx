"use client";

import { Attribute, DataPoint, Company } from "../types";
import * as XLSX from "xlsx";

interface Props {
  company: Company;
  data: DataPoint[];
  attributes: Attribute[];
}

function buildSheet(
  data: DataPoint[],
  attributes: Attribute[],
  filterQuarter: (q: number) => boolean,
  label: string
) {
  const attrMap = new Map(attributes.map((a) => [a.id, a]));

  // Get all periods
  const periodSet = new Set<string>();
  const filtered = data.filter((dp) => filterQuarter(dp.q));
  for (const dp of filtered) {
    const label = dp.q === 0 ? `${dp.y}` : `Q${dp.q} ${dp.y}`;
    periodSet.add(label);
  }
  const periods = Array.from(periodSet).sort();

  // Build lookup
  const lookup: Record<number, Record<string, number>> = {};
  for (const dp of filtered) {
    if (!lookup[dp.a]) lookup[dp.a] = {};
    const key = dp.q === 0 ? `${dp.y}` : `Q${dp.q} ${dp.y}`;
    lookup[dp.a][key] = dp.v;
  }

  // Get attributes that have data
  const activeAttrs = attributes
    .filter((a) => lookup[a.id])
    .sort((a, b) => a.section.localeCompare(b.section, "sv") || a.name.localeCompare(b.name, "sv"));

  // Build rows
  const rows: Record<string, string | number>[] = [];
  for (const attr of activeAttrs) {
    const row: Record<string, string | number> = {
      Sektion: attr.section,
      Variabel: attr.name,
      Enhet: attr.unit,
    };
    for (const p of periods) {
      row[p] = lookup[attr.id]?.[p] ?? "";
    }
    rows.push(row);
  }

  return rows;
}

export default function ExportButton({ company, data, attributes }: Props) {
  const handleExport = () => {
    const wb = XLSX.utils.book_new();

    // Quarterly sheet
    const quarterlyRows = buildSheet(data, attributes, (q) => q >= 1 && q <= 4, "Kvartal");
    if (quarterlyRows.length > 0) {
      const ws = XLSX.utils.json_to_sheet(quarterlyRows);
      XLSX.utils.book_append_sheet(wb, ws, "Kvartalsdata");
    }

    // Yearly sheet
    const yearlyRows = buildSheet(data, attributes, (q) => q === 0, "Helår");
    if (yearlyRows.length > 0) {
      const ws = XLSX.utils.json_to_sheet(yearlyRows);
      XLSX.utils.book_append_sheet(wb, ws, "Årsdata");
    }

    // All data sheet
    const allRows = buildSheet(data, attributes, () => true, "Alla");
    if (allRows.length > 0) {
      const ws = XLSX.utils.json_to_sheet(allRows);
      XLSX.utils.book_append_sheet(wb, ws, "All data");
    }

    const filename = `${company.name.replace(/[^a-zA-ZåäöÅÄÖ0-9]/g, "_")}_data.xlsx`;
    XLSX.writeFile(wb, filename);
  };

  return (
    <button
      onClick={handleExport}
      className="flex items-center gap-2 px-4 py-2 rounded bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--tab-active)] transition-colors text-sm"
      title="Exportera till Excel"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      Exportera XLSX
    </button>
  );
}
