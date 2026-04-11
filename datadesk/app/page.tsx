"use client";

import { useState, useEffect, useMemo } from "react";
import { Company, Attribute, DataPoint, ViewMode, PeriodRange, SECTION_TABS } from "./types";
import CompanyPicker from "./components/CompanyPicker";
import DataTable from "./components/DataTable";
import ExportButton from "./components/ExportButton";
import SourceToggle from "./components/SourceToggle";

export default function Home() {
  const [allCompanies, setAllCompanies] = useState<Company[]>([]);
  const [companiesBySource, setCompaniesBySource] = useState<Record<string, number[]>>({});
  const [attributes, setAttributes] = useState<Attribute[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [companyData, setCompanyData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [viewMode, setViewMode] = useState<ViewMode>("quarterly");
  const [periodRange, setPeriodRange] = useState<PeriodRange>(3);
  const [sourceId, setSourceId] = useState<number>(2);

  useEffect(() => {
    Promise.all([
      fetch("/data/companies_with_data.json").then((r) => r.json()),
      fetch("/data/attributes.json").then((r) => r.json()),
      fetch("/data/companies_by_source.json").then((r) => r.json()),
    ]).then(([companies, attrs, bySource]) => {
      setAllCompanies(companies);
      setAttributes(attrs);
      setCompaniesBySource(bySource);
    });
  }, []);

  // Filter companies by selected source
  const companies = useMemo(() => {
    const sourceCompanyIds = new Set(companiesBySource[String(sourceId)] || []);
    if (sourceCompanyIds.size === 0) return allCompanies;
    return allCompanies.filter((c) => sourceCompanyIds.has(c.id));
  }, [allCompanies, companiesBySource, sourceId]);

  // Clear selection if current company is not in the filtered list
  useEffect(() => {
    if (selectedCompany && !companies.some((c) => c.id === selectedCompany.id)) {
      setSelectedCompany(null);
      setCompanyData([]);
    }
  }, [companies, selectedCompany]);

  // Load company data when selection changes
  useEffect(() => {
    if (!selectedCompany) return;
    setLoading(true);
    fetch(`/data/company/${selectedCompany.id}.json`)
      .then((r) => r.json())
      .then((data: DataPoint[]) => {
        setCompanyData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [selectedCompany]);

  // Filter loaded data by source
  const filteredData = useMemo(() => {
    return companyData.filter((dp) => dp.s === sourceId);
  }, [companyData, sourceId]);

  const viewModes: { key: ViewMode; label: string }[] = [
    { key: "yearly", label: "Helår" },
    { key: "quarterly", label: "Kvartal" },
  ];

  const periodRanges: PeriodRange[] = [3, 5, 10];

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center gap-4 px-4 py-3 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]">
        <CompanyPicker
          companies={companies}
          selected={selectedCompany}
          onSelect={setSelectedCompany}
        />

        <div className="flex rounded overflow-hidden border border-[var(--border-color)]">
          {viewModes.map((vm) => (
            <button
              key={vm.key}
              onClick={() => setViewMode(vm.key)}
              className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                viewMode === vm.key
                  ? "bg-[var(--tab-active)] text-white"
                  : "bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-white"
              }`}
            >
              {vm.label}
            </button>
          ))}
        </div>

        <div className="flex rounded overflow-hidden border border-[var(--border-color)]">
          {periodRanges.map((pr) => (
            <button
              key={pr}
              onClick={() => setPeriodRange(pr)}
              className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                periodRange === pr
                  ? "bg-[var(--tab-active)] text-white"
                  : "bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-white"
              }`}
            >
              {pr} år
            </button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <SourceToggle selected={sourceId} onChange={setSourceId} />
          {selectedCompany && filteredData.length > 0 && (
            <ExportButton
              company={selectedCompany}
              data={filteredData}
              attributes={attributes}
            />
          )}
        </div>
      </header>

      {/* Section tabs */}
      <nav className="flex border-b border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 overflow-x-auto">
        {SECTION_TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2.5 text-xs font-medium whitespace-nowrap transition-colors border-b-2 ${
              activeTab === tab.key
                ? "border-[var(--tab-active)] text-white"
                : "border-transparent text-[var(--text-secondary)] hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Content */}
      <main className="flex-1 overflow-auto p-4">
        {!selectedCompany ? (
          <div className="flex items-center justify-center h-full text-gray-500 text-lg">
            Välj ett bolag för att visa data
          </div>
        ) : loading ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            Laddar data...
          </div>
        ) : (
          <DataTable
            data={filteredData}
            attributes={attributes}
            section={activeTab}
            viewMode={viewMode}
            periodRange={periodRange}
          />
        )}
      </main>
    </div>
  );
}
