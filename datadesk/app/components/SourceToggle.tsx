"use client";

interface Props {
  selected: number;
  onChange: (sourceId: number) => void;
}

const SOURCES = [
  { id: 2, label: "Marknadsdata" },
  { id: 3, label: "Claude" },
];

export default function SourceToggle({ selected, onChange }: Props) {
  return (
    <div className="flex rounded overflow-hidden border border-[var(--border-color)]">
      {SOURCES.map((src) => (
        <button
          key={src.id}
          onClick={() => onChange(src.id)}
          className={`px-3 py-1.5 text-xs font-medium transition-colors ${
            selected === src.id
              ? "bg-[var(--tab-active)] text-white"
              : "bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-white"
          }`}
        >
          {src.label}
        </button>
      ))}
    </div>
  );
}
