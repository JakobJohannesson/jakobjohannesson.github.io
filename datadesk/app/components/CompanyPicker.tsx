"use client";

import { useState, useRef, useEffect } from "react";
import { Company } from "../types";

interface Props {
  companies: Company[];
  selected: Company | null;
  onSelect: (company: Company) => void;
}

export default function CompanyPicker({ companies, selected, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filtered = companies.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 rounded bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--tab-active)] transition-colors min-w-[250px] text-left"
      >
        <span className="text-lg">🇸🇪</span>
        <span className="font-semibold text-white">
          {selected ? selected.name : "Välj bolag..."}
        </span>
        <svg className="ml-auto w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-[300px] bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded shadow-xl z-50 max-h-[400px] flex flex-col">
          <div className="p-2 border-b border-[var(--border-color)]">
            <input
              type="text"
              placeholder="Sök bolag..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-1.5 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded text-sm text-white placeholder-gray-500 outline-none focus:border-[var(--tab-active)]"
              autoFocus
            />
          </div>
          <div className="overflow-y-auto flex-1">
            {filtered.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  onSelect(c);
                  setOpen(false);
                  setSearch("");
                }}
                className={`w-full text-left px-4 py-1.5 text-sm hover:bg-[var(--bg-row-hover)] transition-colors ${
                  selected?.id === c.id ? "text-[var(--tab-active)]" : "text-[var(--text-primary)]"
                }`}
              >
                {c.name}
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="px-4 py-3 text-sm text-gray-500">Inga resultat</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
