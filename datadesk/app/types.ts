export interface Company {
  id: number;
  name: string;
}

export interface Attribute {
  id: number;
  name: string;
  description: string;
  unit: string;
  frequency: string;
  section: string;
}

export interface DataPoint {
  a: number;  // attribute_id
  v: number;  // value
  y: number;  // fiscal_year
  q: number;  // quarter (0 = full year, 5 = R12)
  s: number;  // source_id
  u: string;  // unit
}

export interface Source {
  id: number;
  name: string;
}

export type ViewMode = "quarterly" | "yearly" | "r12";
export type PeriodRange = 3 | 5 | 10;

export const SECTION_TABS = [
  { key: "overview", label: "Översikt" },
  { key: "resultaträkning", label: "Resultaträkning" },
  { key: "balansräkning", label: "Balansräkning" },
  { key: "kassaflöde", label: "Kassaflöde" },
  { key: "nyckeltal", label: "Nyckeltal" },
  { key: "aktiedata", label: "Aktie" },
  { key: "marginal", label: "Marginal" },
  { key: "per aktie", label: "Per Aktie" },
  { key: "hållbarhet", label: "Hållbarhet" },
] as const;
