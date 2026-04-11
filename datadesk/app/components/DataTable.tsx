"use client";

import { useMemo } from "react";
import { Attribute, DataPoint, ViewMode, PeriodRange } from "../types";

interface Props {
  data: DataPoint[];
  attributes: Attribute[];
  section: string;
  viewMode: ViewMode;
  periodRange: PeriodRange;
}

function formatValue(val: number | null, unit: string): string {
  if (val === null || val === undefined) return "";
  if (unit === "%" || unit === "x" || unit === "ggr") {
    return val.toFixed(1);
  }
  if (Math.abs(val) >= 1000) {
    return val.toLocaleString("sv-SE", { maximumFractionDigits: 0 });
  }
  if (Math.abs(val) < 0.01 && val !== 0) {
    return val.toFixed(4);
  }
  return val.toLocaleString("sv-SE", { maximumFractionDigits: 2 });
}

function getChangeColor(current: number | null, previous: number | null): string {
  if (current === null || previous === null || previous === 0) return "";
  const pctChange = ((current - previous) / Math.abs(previous)) * 100;
  if (pctChange > 5) return "text-[var(--text-positive)]";
  if (pctChange < -5) return "text-[var(--text-negative)]";
  return "";
}

function generatePeriods(viewMode: ViewMode, periodRange: PeriodRange): { year: number; quarter: number; label: string }[] {
  const currentYear = new Date().getFullYear();
  const periods: { year: number; quarter: number; label: string }[] = [];

  if (viewMode === "yearly") {
    for (let y = currentYear - periodRange; y <= currentYear; y++) {
      periods.push({ year: y, quarter: 0, label: `${y}` });
    }
  } else if (viewMode === "quarterly") {
    const startYear = currentYear - periodRange;
    for (let y = startYear; y <= currentYear; y++) {
      for (let q = 1; q <= 4; q++) {
        periods.push({ year: y, quarter: q, label: `Q${q} ${y}` });
      }
    }
  } else {
    // R12 - use quarter=5 convention or compute from data
    for (let y = currentYear - periodRange; y <= currentYear; y++) {
      for (let q = 1; q <= 4; q++) {
        periods.push({ year: y, quarter: q, label: `R12 Q${q} ${y}` });
      }
    }
  }

  return periods;
}

// Overview section: pick key attributes from multiple sections
const OVERVIEW_ATTRIBUTES = [
  "Nettoomsättning",
  "P/S",
  "Rörelseresultat",
  "Ebitmarginal-%",
  "EV/EBIT",
  "Vinst",
  "Vinstmarginal-%",
  "Vinst/Aktie",
  "P/E",
  "PEG",
  "Bruttoresultat",
  "Bruttomarginal-%",
  "EBITDA",
  "EBITDA-marginal-%",
];

export default function DataTable({ data, attributes, section, viewMode, periodRange }: Props) {
  const periods = useMemo(() => generatePeriods(viewMode, periodRange), [viewMode, periodRange]);

  // Sustainability sections aggregated under "hållbarhet"
  const SUSTAINABILITY_SECTIONS = new Set(["utsläpp", "miljö", "taxonomi"]);
  const SUSTAINABILITY_KEYWORDS = [
    "scope", "utsläpp", "co2", "energi", "vatten", "avfall", "taxonomi",
    "förnybar", "växthusgasutsläpp", "råmaterial", "transport",
  ];

  // Filter attributes for section
  const sectionAttrs = useMemo(() => {
    if (section === "overview") {
      return OVERVIEW_ATTRIBUTES
        .map((name) => attributes.find((a) => a.name === name))
        .filter((a): a is Attribute => a !== undefined);
    }
    if (section === "hållbarhet") {
      return attributes
        .filter((a) =>
          SUSTAINABILITY_SECTIONS.has(a.section) ||
          SUSTAINABILITY_KEYWORDS.some((kw) => a.name.toLowerCase().includes(kw))
        )
        .sort((a, b) => {
          // Group by sub-category: Scope 1/2/3 first, then miljö, then taxonomi
          const order = (attr: Attribute) => {
            if (attr.name.startsWith("Scope 1 ")) return 0;
            if (attr.name.startsWith("Scope 1+2 ")) return 1;
            if (attr.name.startsWith("Scope 2 ")) return 2;
            if (attr.name.startsWith("Scope 3 ")) return 3;
            if (attr.name.startsWith("Scope 3 -")) return 4;
            if (attr.name.includes("Scope")) return 5;
            if (attr.name.includes("växthusgasutsläpp") || attr.name.includes("Totala")) return 6;
            if (attr.section === "miljö") return 7;
            if (attr.section === "taxonomi") return 8;
            return 9;
          };
          const diff = order(a) - order(b);
          if (diff !== 0) return diff;
          return a.name.localeCompare(b.name, "sv");
        });
    }
    return attributes.filter((a) => a.section === section).sort((a, b) => a.name.localeCompare(b.name, "sv"));
  }, [attributes, section]);

  // Build lookup: attribute_id -> { "year-quarter" -> value }
  const dataLookup = useMemo(() => {
    const lookup: Record<number, Record<string, { value: number; unit: string }>> = {};
    for (const dp of data) {
      if (!lookup[dp.a]) lookup[dp.a] = {};
      const key = `${dp.y}-${dp.q}`;
      // Keep latest value (higher source_id = market_data takes precedence over claude)
      if (!lookup[dp.a][key] || dp.s >= (lookup[dp.a][key] as { value: number; unit: string; s?: number }).s!) {
        lookup[dp.a][key] = { value: dp.v, unit: dp.u };
      }
    }
    return lookup;
  }, [data]);

  if (sectionAttrs.length === 0) {
    return (
      <div className="flex items-center justify-center h-32 text-gray-500">
        Ingen data tillgänglig för denna sektion
      </div>
    );
  }

  // Trim periods to only those with data
  const activePeriods = periods.filter((p) =>
    sectionAttrs.some((attr) => {
      const lookup = dataLookup[attr.id];
      return lookup && lookup[`${p.year}-${p.quarter}`];
    })
  );

  // Show most recent periods (last N)
  const maxCols = viewMode === "yearly" ? periodRange + 1 : Math.min(activePeriods.length, 12);
  const visiblePeriods = activePeriods.slice(-maxCols);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--border-color)]">
            <th className="text-left py-2 px-3 font-normal text-[var(--text-secondary)] sticky left-0 bg-[var(--bg-primary)] min-w-[200px]">
              {section === "hållbarhet" ? "Indikator" : "MSEK"}
            </th>
            {visiblePeriods.map((p) => (
              <th
                key={`${p.year}-${p.quarter}`}
                className="text-right py-2 px-3 font-semibold text-[var(--text-primary)] min-w-[90px]"
              >
                {p.label}
              </th>
            ))}
            {viewMode === "quarterly" && visiblePeriods.length >= 2 && (
              <th className="text-right py-2 px-3 font-normal text-[var(--text-secondary)] min-w-[70px]">
                YoY %
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {sectionAttrs.map((attr) => {
            const lookup = dataLookup[attr.id] || {};
            const values = visiblePeriods.map((p) => {
              const entry = lookup[`${p.year}-${p.quarter}`];
              return entry ? entry.value : null;
            });

            // Compute YoY for the last quarter
            let yoyPct: number | null = null;
            if (viewMode === "quarterly" && visiblePeriods.length >= 5) {
              const last = values[values.length - 1];
              // Find same quarter previous year
              const lastPeriod = visiblePeriods[visiblePeriods.length - 1];
              const prevYearKey = `${lastPeriod.year - 1}-${lastPeriod.quarter}`;
              const prevEntry = lookup[prevYearKey];
              if (last !== null && prevEntry && prevEntry.value !== 0) {
                yoyPct = ((last - prevEntry.value) / Math.abs(prevEntry.value)) * 100;
              }
            }

            const unit = attributes.find(a => a.id === attr.id)?.unit || "";
            const isMarginOrPct = unit === "%" || attr.name.includes("marginal") || attr.name.includes("-%");

            return (
              <tr
                key={attr.id}
                className="border-b border-[var(--border-color)] hover:bg-[var(--bg-row-hover)] transition-colors"
              >
                <td
                  className="py-1.5 px-3 sticky left-0 bg-[var(--bg-primary)] hover:bg-[var(--bg-row-hover)]"
                  title={attr.description}
                >
                  <span className={isMarginOrPct ? "italic text-[var(--text-secondary)]" : ""}>
                    {attr.name}
                  </span>
                </td>
                {values.map((val, i) => {
                  const prev = i > 0 ? values[i - 1] : null;
                  const colorClass = getChangeColor(val, prev);
                  return (
                    <td
                      key={i}
                      className={`py-1.5 px-3 text-right tabular-nums ${colorClass}`}
                    >
                      {formatValue(val, unit)}
                    </td>
                  );
                })}
                {viewMode === "quarterly" && visiblePeriods.length >= 2 && (
                  <td
                    className={`py-1.5 px-3 text-right tabular-nums ${
                      yoyPct !== null
                        ? yoyPct > 0
                          ? "text-[var(--text-positive)]"
                          : yoyPct < 0
                          ? "text-[var(--text-negative)]"
                          : ""
                        : ""
                    }`}
                  >
                    {yoyPct !== null ? `${yoyPct > 0 ? "" : ""}${yoyPct.toFixed(1)} %` : ""}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
