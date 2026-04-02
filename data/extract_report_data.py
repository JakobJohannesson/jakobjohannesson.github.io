"""
Extract financial data from Nelly Group quarterly reports and generate
long-format CSV for BigQuery company_data table.
Source: PDF reports Q3 2023 - Q4 2025
"""
import csv
from datetime import datetime, timezone

COMPANY = "Nelly"
SOURCE = "report"
NOW = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S+00")

# Data structure: list of (attribute, value, year, quarter, unit)
# Organized by quarter, then by financial statement section

data = []

def add(attr, val, year, quarter, unit="MSEK"):
    data.append((attr, val, year, quarter, unit))

# =============================================================================
# Q3 2023
# =============================================================================
y, q = 2023, 3

# Income Statement
add("Nettoomsättning", 236.4, y, q)
add("Kostnad sålda varor", -116.6, y, q)
add("Bruttoresultat", 119.8, y, q)
add("Bruttomarginal", 50.7, y, q, "%")
add("Lagerhanterings- och distributionskostnader", -33.7, y, q)
add("Marknadsföringskostnader", -21.1, y, q)
add("Administrations- och övriga rörelsekostnader", -52.1, y, q)
add("Rörelseresultat", 12.8, y, q)
add("Rörelsemarginal", 5.4, y, q, "%")
add("Finansnetto", -3.5, y, q)
add("Resultat före skatt", 9.3, y, q)
add("Skatt", -0.2, y, q)
add("Resultat efter skatt", 9.1, y, q)
add("Resultat per aktie", 0.30, y, q, "SEK")
add("Utestående aktier", 30.0, y, q, "Milj")

# Balance Sheet (2023-09-30)
add("Goodwill", 39.7, y, q)
add("Övriga immateriella anläggningstillgångar", 24.1, y, q)
add("Materiella anläggningstillgångar", 12.8, y, q)
add("Nyttjanderättstillgångar", 275.2, y, q)
add("Uppskjuten skattefordran", 74.8, y, q)
add("Depositioner", 8.0, y, q)
add("Summa anläggningstillgångar", 434.7, y, q)
add("Varulager", 207.0, y, q)
add("Kortfristiga ej räntebärande fordringar", 53.8, y, q)
add("Likvida medel", 120.4, y, q)
add("Summa omsättningstillgångar", 381.1, y, q)
add("Summa tillgångar", 815.8, y, q)
add("Summa eget kapital", 158.7, y, q)
add("Avsättningar", 0.0, y, q)
add("Leasingskulder (lång)", 203.5, y, q)
add("Summa långfristiga skulder", 203.5, y, q)
add("Leasingskulder (kort)", 86.9, y, q)
add("Leverantörsskulder", 119.3, y, q)
add("Övriga skulder (kort)", 103.2, y, q)
add("Upplupna kostnader och förutbetalda intäkter", 144.2, y, q)
add("Summa kortfristiga skulder", 453.6, y, q)
add("Summa eget kapital och skulder", 815.8, y, q)

# Cash Flow
add("Kassaflöde löpande verksamheten före förändringar i rörelsekapitalet", 20.6, y, q)
add("Förändringar i rörelsekapitalet", -34.4, y, q)
add("Kassaflöde från rörelsen", -13.8, y, q)
add("Investeringar i anläggningstillgångar", -8.9, y, q)
add("Kassaflöde till/från investeringsverksamheten", -8.9, y, q)
add("Kassaflöde till/från finansieringsverksamheten", -7.1, y, q)
add("Periodens förändring av likvida medel", -29.7, y, q)

# KPIs
add("Nettoomsättningstillväxt", -16.9, y, q, "%")
add("Returgrad", 34.3, y, q, "%")
add("Lager som andel av nettoomsättning R12", 18.1, y, q, "%")
add("Försäljningsandel egna varumärken", 39.4, y, q, "%")
add("Lagerhanterings- och distributionskostnader som andel av nettoomsättningen", 14.3, y, q, "%")
add("Marknadsföringskostnader som andel av nettoomsättningen", 8.9, y, q, "%")
add("Antal aktiva kunder i Norden R12 (000)", 1032, y, q, "st")
add("Antal besök i Norden (000)", 18956, y, q, "st")
add("Antal ordrar i Norden (000)", 393, y, q, "st")
add("Genomsnittlig kundkorg i Norden", 817, y, q, "SEK")
add("Konverteringsgrad i Norden", 2.1, y, q, "%")
add("Antal anställda", 148, y, q, "st")
add("Andel kvinnliga anställda", 59, y, q, "%")

# Depreciation
add("Avskrivningar av materiella anläggningstillgångar", -0.8, y, q)
add("Avskrivningar av immateriella anläggningstillgångar", -2.6, y, q)
add("Avskrivningar (ej inkluderat IFRS 16)", -3.3, y, q)
add("Avskrivningar av nyttjanderättstillgångar", -8.5, y, q)
add("Avskrivningar (Inkluderat IFRS 16)", -11.8, y, q)

# Geography
add("Nettoomsättning Sverige", 120.8, y, q)
add("Nettoomsättning Norden inklusive Sverige", 233.7, y, q)
add("Nettoomsättning Övriga världen", 2.7, y, q)

# =============================================================================
# Q4 2023
# =============================================================================
y, q = 2023, 4

# Income Statement
add("Nettoomsättning", 301.6, y, q)
add("Kostnad sålda varor", -150.7, y, q)
add("Bruttoresultat", 150.9, y, q)
add("Bruttomarginal", 50.0, y, q, "%")
add("Lagerhanterings- och distributionskostnader", -45.6, y, q)
add("Marknadsföringskostnader", -26.0, y, q)
add("Administrations- och övriga rörelsekostnader", -55.3, y, q)
add("Rörelseresultat", 24.0, y, q)
add("Rörelsemarginal", 8.0, y, q, "%")
add("Finansnetto", -4.6, y, q)
add("Resultat före skatt", 19.4, y, q)
add("Skatt", 0.3, y, q)
add("Resultat efter skatt", 19.7, y, q)
add("Resultat per aktie", 0.66, y, q, "SEK")
add("Utestående aktier", 30.0, y, q, "Milj")

# Balance Sheet (2023-12-31)
add("Goodwill", 39.7, y, q)
add("Övriga immateriella anläggningstillgångar", 28.0, y, q)
add("Materiella anläggningstillgångar", 16.3, y, q)
add("Nyttjanderättstillgångar", 267.0, y, q)
add("Uppskjuten skattefordran", 75.1, y, q)
add("Depositioner", 8.0, y, q)
add("Summa anläggningstillgångar", 434.2, y, q)
add("Varulager", 152.3, y, q)
add("Kortfristiga ej räntebärande fordringar", 62.3, y, q)
add("Likvida medel", 151.1, y, q)
add("Summa omsättningstillgångar", 365.7, y, q)
add("Summa tillgångar", 799.8, y, q)
add("Summa eget kapital", 178.6, y, q)
add("Avsättningar", 0.0, y, q)
add("Leasingskulder (lång)", 183.3, y, q)
add("Summa långfristiga skulder", 183.3, y, q)
add("Leasingskulder (kort)", 100.3, y, q)
add("Leverantörsskulder", 90.4, y, q)
add("Övriga skulder (kort)", 110.4, y, q)
add("Upplupna kostnader och förutbetalda intäkter", 136.8, y, q)
add("Summa kortfristiga skulder", 438.0, y, q)
add("Summa eget kapital och skulder", 799.8, y, q)

# Cash Flow
add("Kassaflöde löpande verksamheten före förändringar i rörelsekapitalet", 36.8, y, q)
add("Förändringar i rörelsekapitalet", 13.6, y, q)
add("Kassaflöde från rörelsen", 50.4, y, q)
add("Investeringar i anläggningstillgångar", -11.0, y, q)
add("Kassaflöde till/från investeringsverksamheten", -11.0, y, q)
add("Kassaflöde till/från finansieringsverksamheten", -7.8, y, q)
add("Periodens förändring av likvida medel", 31.6, y, q)

# KPIs
add("Nettoomsättningstillväxt", -22.1, y, q, "%")
add("Returgrad", 33.0, y, q, "%")
add("Lager som andel av nettoomsättning R12", 14.4, y, q, "%")
add("Försäljningsandel egna varumärken", 36.3, y, q, "%")
add("Lagerhanterings- och distributionskostnader som andel av nettoomsättningen", 15.1, y, q, "%")
add("Marknadsföringskostnader som andel av nettoomsättningen", 8.6, y, q, "%")
add("Antal aktiva kunder i Norden R12 (000)", 973, y, q, "st")
add("Antal besök i Norden (000)", 23736, y, q, "st")
add("Antal ordrar i Norden (000)", 512, y, q, "st")
add("Genomsnittlig kundkorg i Norden", 771, y, q, "SEK")
add("Konverteringsgrad i Norden", 2.2, y, q, "%")
add("Antal anställda", 153, y, q, "st")
add("Andel kvinnliga anställda", 62, y, q, "%")

# Depreciation
add("Avskrivningar av materiella anläggningstillgångar", -1.2, y, q)
add("Avskrivningar av immateriella anläggningstillgångar", -2.3, y, q)
add("Avskrivningar (ej inkluderat IFRS 16)", -3.5, y, q)
add("Avskrivningar av nyttjanderättstillgångar", -9.3, y, q)
add("Avskrivningar (Inkluderat IFRS 16)", -12.8, y, q)

# Geography
add("Nettoomsättning Sverige", 158.0, y, q)
add("Nettoomsättning Norden inklusive Sverige", 297.5, y, q)
add("Nettoomsättning Övriga världen", 4.2, y, q)

# =============================================================================
# Q1 2024
# =============================================================================
y, q = 2024, 1

# Income Statement
add("Nettoomsättning", 222.2, y, q)
add("Kostnad sålda varor", -113.1, y, q)
add("Bruttoresultat", 109.1, y, q)
add("Bruttomarginal", 49.1, y, q, "%")
add("Lagerhanterings- och distributionskostnader", -32.4, y, q)
add("Marknadsföringskostnader", -21.3, y, q)
add("Administrations- och övriga rörelsekostnader", -54.1, y, q)
add("Rörelseresultat", 1.4, y, q)
add("Rörelsemarginal", 0.6, y, q, "%")
add("Finansnetto", -3.6, y, q)
add("Resultat före skatt", -2.2, y, q)
add("Skatt", 0.3, y, q)
add("Resultat efter skatt", -1.9, y, q)
add("Resultat per aktie", -0.06, y, q, "SEK")
add("Utestående aktier", 30.0, y, q, "Milj")

# Balance Sheet (2024-03-31)
add("Goodwill", 39.7, y, q)
add("Övriga immateriella anläggningstillgångar", 34.6, y, q)
add("Materiella anläggningstillgångar", 15.9, y, q)
add("Nyttjanderättstillgångar", 257.9, y, q)
add("Uppskjuten skattefordran", 75.4, y, q)
add("Depositioner", 11.2, y, q)
add("Summa anläggningstillgångar", 434.8, y, q)
add("Varulager", 174.5, y, q)
add("Kortfristiga ej räntebärande fordringar", 65.6, y, q)
add("Likvida medel", 126.0, y, q)
add("Summa omsättningstillgångar", 366.0, y, q)
add("Summa tillgångar", 800.8, y, q)
add("Summa eget kapital", 176.6, y, q)
add("Avsättningar", 0.0, y, q)
add("Leasingskulder (lång)", 177.8, y, q)
add("Summa långfristiga skulder", 177.8, y, q)
add("Leasingskulder (kort)", 98.3, y, q)
add("Leverantörsskulder", 105.1, y, q)
add("Övriga skulder (kort)", 102.9, y, q)
add("Upplupna kostnader och förutbetalda intäkter", 140.1, y, q)
add("Summa kortfristiga skulder", 446.5, y, q)
add("Summa eget kapital och skulder", 800.8, y, q)

# Cash Flow
add("Kassaflöde löpande verksamheten före förändringar i rörelsekapitalet", 11.7, y, q)
add("Förändringar i rörelsekapitalet", -16.2, y, q)
add("Kassaflöde från rörelsen", -4.5, y, q)
add("Investeringar i anläggningstillgångar", -9.6, y, q)
add("Kassaflöde till/från investeringsverksamheten", -9.6, y, q)
add("Kassaflöde till/från finansieringsverksamheten", -11.0, y, q)
add("Periodens förändring av likvida medel", -25.1, y, q)

# KPIs
add("Nettoomsättningstillväxt", -5.1, y, q, "%")
add("Returgrad", 33.4, y, q, "%")
add("Lager som andel av nettoomsättning R12", 16.6, y, q, "%")
add("Försäljningsandel egna varumärken", 39.9, y, q, "%")
add("Lagerhanterings- och distributionskostnader som andel av nettoomsättningen", 14.6, y, q, "%")
add("Marknadsföringskostnader som andel av nettoomsättningen", 9.6, y, q, "%")
add("Antal aktiva kunder i Norden R12 (000)", 943, y, q, "st")
add("Antal besök i Norden (000)", 19008, y, q, "st")
add("Antal ordrar i Norden (000)", 369, y, q, "st")
add("Genomsnittlig kundkorg i Norden", 810, y, q, "SEK")
add("Konverteringsgrad i Norden", 1.9, y, q, "%")
add("Antal anställda", 150, y, q, "st")
add("Andel kvinnliga anställda", 62, y, q, "%")

# Depreciation
add("Avskrivningar av materiella anläggningstillgångar", -1.2, y, q)
add("Avskrivningar av immateriella anläggningstillgångar", -2.2, y, q)
add("Avskrivningar (ej inkluderat IFRS 16)", -3.4, y, q)
add("Avskrivningar av nyttjanderättstillgångar", -9.3, y, q)
add("Avskrivningar (Inkluderat IFRS 16)", -12.7, y, q)

# Geography
add("Nettoomsättning Sverige", 112.6, y, q)
add("Nettoomsättning Norden inklusive Sverige", 219.2, y, q)
add("Nettoomsättning Övriga världen", 3.0, y, q)

# =============================================================================
# Q2 2024
# =============================================================================
y, q = 2024, 2

# Income Statement
add("Nettoomsättning", 314.1, y, q)
add("Kostnad sålda varor", -142.2, y, q)
add("Bruttoresultat", 171.9, y, q)
add("Bruttomarginal", 54.7, y, q, "%")
add("Lagerhanterings- och distributionskostnader", -42.1, y, q)
add("Marknadsföringskostnader", -40.9, y, q)
add("Administrations- och övriga rörelsekostnader", -58.5, y, q)
add("Rörelseresultat", 30.5, y, q)
add("Rörelsemarginal", 9.7, y, q, "%")
add("Finansnetto", -4.0, y, q)
add("Resultat före skatt", 26.4, y, q)
add("Skatt", 0.3, y, q)
add("Resultat efter skatt", 26.7, y, q)
add("Resultat per aktie", 0.89, y, q, "SEK")
add("Utestående aktier", 30.0, y, q, "Milj")

# Balance Sheet (2024-06-30)
add("Goodwill", 39.7, y, q)
add("Övriga immateriella anläggningstillgångar", 39.6, y, q)
add("Materiella anläggningstillgångar", 14.6, y, q)
add("Nyttjanderättstillgångar", 248.9, y, q)
add("Uppskjuten skattefordran", 75.7, y, q)
add("Depositioner", 8.0, y, q)
add("Summa anläggningstillgångar", 426.6, y, q)
add("Varulager", 155.8, y, q)
add("Kortfristiga ej räntebärande fordringar", 52.2, y, q)
add("Likvida medel", 219.9, y, q)
add("Summa omsättningstillgångar", 427.9, y, q)
add("Summa tillgångar", 854.5, y, q)
add("Summa eget kapital", 203.3, y, q)
add("Avsättningar", 0.0, y, q)
add("Leasingskulder (lång)", 172.2, y, q)
add("Summa långfristiga skulder", 172.2, y, q)
add("Leasingskulder (kort)", 96.2, y, q)
add("Leverantörsskulder", 123.7, y, q)
add("Övriga skulder (kort)", 110.2, y, q)
add("Upplupna kostnader och förutbetalda intäkter", 148.9, y, q)
add("Summa kortfristiga skulder", 478.9, y, q)
add("Summa eget kapital och skulder", 854.5, y, q)

# Cash Flow
add("Kassaflöde löpande verksamheten före förändringar i rörelsekapitalet", 38.4, y, q)
add("Förändringar i rörelsekapitalet", 67.4, y, q)
add("Kassaflöde från rörelsen", 105.8, y, q)
add("Investeringar i anläggningstillgångar", -7.2, y, q)
add("Kassaflöde till/från investeringsverksamheten", -7.2, y, q)
add("Kassaflöde till/från finansieringsverksamheten", -4.7, y, q)
add("Periodens förändring av likvida medel", 93.9, y, q)

# KPIs
add("Nettoomsättningstillväxt", 8.8, y, q, "%")
add("Returgrad", 31.3, y, q, "%")
add("Lager som andel av nettoomsättning R12", 14.5, y, q, "%")
add("Försäljningsandel egna varumärken", 43.8, y, q, "%")
add("Lagerhanterings- och distributionskostnader som andel av nettoomsättningen", 13.4, y, q, "%")
add("Marknadsföringskostnader som andel av nettoomsättningen", 13.0, y, q, "%")
add("Antal aktiva kunder i Norden R12 (000)", 926, y, q, "st")
add("Antal besök i Norden (000)", 24826, y, q, "st")
add("Antal ordrar i Norden (000)", 502, y, q, "st")
add("Genomsnittlig kundkorg i Norden", 809, y, q, "SEK")
add("Konverteringsgrad i Norden", 2.0, y, q, "%")
add("Antal anställda", 151, y, q, "st")
add("Andel kvinnliga anställda", 60, y, q, "%")

# Depreciation
add("Avskrivningar av materiella anläggningstillgångar", -1.3, y, q)
add("Avskrivningar av immateriella anläggningstillgångar", -2.2, y, q)
add("Avskrivningar (ej inkluderat IFRS 16)", -3.5, y, q)
add("Avskrivningar av nyttjanderättstillgångar", -9.3, y, q)
add("Avskrivningar (Inkluderat IFRS 16)", -12.8, y, q)

# Geography
add("Nettoomsättning Sverige", 163.6, y, q)
add("Nettoomsättning Norden inklusive Sverige", 310.9, y, q)
add("Nettoomsättning Övriga världen", 3.1, y, q)

# =============================================================================
# Q3 2024
# =============================================================================
y, q = 2024, 3

# Income Statement
add("Nettoomsättning", 239.6, y, q)
add("Kostnad sålda varor", -109.0, y, q)
add("Bruttoresultat", 130.7, y, q)
add("Bruttomarginal", 54.5, y, q, "%")
add("Lagerhanterings- och distributionskostnader", -28.0, y, q)
add("Marknadsföringskostnader", -23.8, y, q)
add("Administrations- och övriga rörelsekostnader", -53.8, y, q)
add("Rörelseresultat", 25.1, y, q)
add("Rörelsemarginal", 10.5, y, q, "%")
add("Finansnetto", -3.1, y, q)
add("Resultat före skatt", 22.0, y, q)
add("Skatt", 0.3, y, q)
add("Resultat efter skatt", 22.3, y, q)
add("Resultat per aktie", 0.74, y, q, "SEK")
add("Utestående aktier", 30.0, y, q, "Milj")

# Balance Sheet (2024-09-30)
add("Goodwill", 39.7, y, q)
add("Övriga immateriella anläggningstillgångar", 39.9, y, q)
add("Materiella anläggningstillgångar", 13.4, y, q)
add("Nyttjanderättstillgångar", 239.7, y, q)
add("Uppskjuten skattefordran", 76.0, y, q)
add("Depositioner", 8.0, y, q)
add("Summa anläggningstillgångar", 416.7, y, q)
add("Varulager", 186.8, y, q)
add("Kortfristiga ej räntebärande fordringar", 41.9, y, q)
add("Likvida medel", 190.4, y, q)
add("Summa omsättningstillgångar", 419.1, y, q)
add("Summa tillgångar", 835.8, y, q)
add("Summa eget kapital", 225.7, y, q)
add("Avsättningar", 0.0, y, q)
add("Övriga skulder (lång)", 69.6, y, q)
add("Leasingskulder (lång)", 166.6, y, q)
add("Summa långfristiga skulder", 236.2, y, q)
add("Leasingskulder (kort)", 94.0, y, q)
add("Leverantörsskulder", 115.7, y, q)
add("Övriga skulder (kort)", 46.8, y, q)
add("Upplupna kostnader och förutbetalda intäkter", 117.4, y, q)
add("Summa kortfristiga skulder", 373.9, y, q)
add("Summa eget kapital och skulder", 835.8, y, q)

# Cash Flow
add("Kassaflöde löpande verksamheten före förändringar i rörelsekapitalet", 34.7, y, q)
add("Förändringar i rörelsekapitalet", -53.2, y, q)
add("Kassaflöde från rörelsen", -18.5, y, q)
add("Investeringar i anläggningstillgångar", -3.1, y, q)
add("Kassaflöde till/från investeringsverksamheten", -3.1, y, q)
add("Kassaflöde till/från finansieringsverksamheten", -7.9, y, q)
add("Periodens förändring av likvida medel", -29.5, y, q)

# KPIs
add("Nettoomsättningstillväxt", 1.4, y, q, "%")
add("Returgrad", 27.1, y, q, "%")
add("Lager som andel av nettoomsättning R12", 17.3, y, q, "%")
add("Försäljningsandel egna varumärken", 45.2, y, q, "%")
add("Lagerhanterings- och distributionskostnader som andel av nettoomsättningen", 11.7, y, q, "%")
add("Marknadsföringskostnader som andel av nettoomsättningen", 9.9, y, q, "%")
add("Antal aktiva kunder i Norden R12 (000)", 911, y, q, "st")
add("Antal besök i Norden (000)", 19186, y, q, "st")
add("Antal ordrar i Norden (000)", 352, y, q, "st")
add("Genomsnittlig kundkorg i Norden", 832, y, q, "SEK")
add("Konverteringsgrad i Norden", 1.8, y, q, "%")
add("Antal anställda", 151, y, q, "st")
add("Andel kvinnliga anställda", 64, y, q, "%")

# Depreciation
add("Avskrivningar av materiella anläggningstillgångar", -1.2, y, q)
add("Avskrivningar av immateriella anläggningstillgångar", -2.7, y, q)
add("Avskrivningar (ej inkluderat IFRS 16)", -3.9, y, q)
add("Avskrivningar av nyttjanderättstillgångar", -9.3, y, q)
add("Avskrivningar (Inkluderat IFRS 16)", -13.2, y, q)

# Geography
add("Nettoomsättning Sverige", 122.7, y, q)
add("Nettoomsättning Norden inklusive Sverige", 235.0, y, q)
add("Nettoomsättning Övriga världen", 4.6, y, q)

# =============================================================================
# Q4 2024
# =============================================================================
y, q = 2024, 4

# Income Statement
add("Nettoomsättning", 318.4, y, q)
add("Kostnad sålda varor", -148.7, y, q)
add("Bruttoresultat", 169.7, y, q)
add("Bruttomarginal", 53.3, y, q, "%")
add("Lagerhanterings- och distributionskostnader", -40.5, y, q)
add("Marknadsföringskostnader", -31.0, y, q)
add("Administrations- och övriga rörelsekostnader", -61.9, y, q)
add("Rörelseresultat", 36.2, y, q)
add("Rörelsemarginal", 11.4, y, q, "%")
add("Finansnetto", -0.1, y, q)
add("Resultat före skatt", 36.1, y, q)
add("Skatt", 0.2, y, q)
add("Resultat efter skatt", 36.3, y, q)
add("Resultat per aktie", 1.21, y, q, "SEK")
add("Utestående aktier", 30.0, y, q, "Milj")

# Balance Sheet (2024-12-31)
add("Goodwill", 39.7, y, q)
add("Övriga immateriella anläggningstillgångar", 38.3, y, q)
add("Materiella anläggningstillgångar", 12.6, y, q)
add("Nyttjanderättstillgångar", 238.4, y, q)
add("Uppskjuten skattefordran", 76.2, y, q)
add("Depositioner", 38.0, y, q)
add("Summa anläggningstillgångar", 443.3, y, q)
add("Varulager", 172.6, y, q)
add("Kortfristiga ej räntebärande fordringar", 55.0, y, q)
add("Likvida medel", 196.9, y, q)
add("Summa omsättningstillgångar", 424.6, y, q)
add("Summa tillgångar", 867.8, y, q)
add("Summa eget kapital", 237.1, y, q)
add("Avsättningar", 0.0, y, q)
add("Övriga skulder (lång)", 42.9, y, q)
add("Leasingskulder (lång)", 224.6, y, q)
add("Summa långfristiga skulder", 267.5, y, q)
add("Leasingskulder (kort)", 35.8, y, q)
add("Leverantörsskulder", 85.4, y, q)
add("Övriga skulder (kort)", 81.0, y, q)
add("Upplupna kostnader och förutbetalda intäkter", 161.1, y, q)
add("Summa kortfristiga skulder", 363.3, y, q)
add("Summa eget kapital och skulder", 867.8, y, q)

# Cash Flow
add("Kassaflöde löpande verksamheten före förändringar i rörelsekapitalet", 55.3, y, q)
add("Förändringar i rörelsekapitalet", 16.5, y, q)
add("Kassaflöde från rörelsen", 71.8, y, q)
add("Investeringar i anläggningstillgångar", -2.5, y, q)
add("Kassaflöde till/från investeringsverksamheten", -2.5, y, q)
add("Kassaflöde till/från finansieringsverksamheten", -32.8, y, q)
add("Periodens förändring av likvida medel", 36.5, y, q)

# KPIs
add("Nettoomsättningstillväxt", 5.5, y, q, "%")
add("Returgrad", 27.9, y, q, "%")
add("Lager som andel av nettoomsättning R12", 15.8, y, q, "%")
add("Försäljningsandel egna varumärken", 47.2, y, q, "%")
add("Lagerhanterings- och distributionskostnader som andel av nettoomsättningen", 12.7, y, q, "%")
add("Marknadsföringskostnader som andel av nettoomsättningen", 9.7, y, q, "%")
add("Antal aktiva kunder i Norden R12 (000)", 926, y, q, "st")
add("Antal besök i Norden (000)", 25104, y, q, "st")
add("Antal ordrar i Norden (000)", 529, y, q, "st")
add("Genomsnittlig kundkorg i Norden", 726, y, q, "SEK")
add("Konverteringsgrad i Norden", 2.1, y, q, "%")
add("Antal anställda", 150, y, q, "st")
add("Andel kvinnliga anställda", 64, y, q, "%")

# Depreciation
add("Avskrivningar av materiella anläggningstillgångar", -1.0, y, q)
add("Avskrivningar av immateriella anläggningstillgångar", -3.8, y, q)
add("Avskrivningar (ej inkluderat IFRS 16)", -4.8, y, q)
add("Avskrivningar av nyttjanderättstillgångar", -8.9, y, q)
add("Avskrivningar (Inkluderat IFRS 16)", -13.7, y, q)

# Geography
add("Nettoomsättning Sverige", 160.1, y, q)
add("Nettoomsättning Norden inklusive Sverige", 312.5, y, q)
add("Nettoomsättning Övriga världen", 5.9, y, q)

# =============================================================================
# Q1 2025
# =============================================================================
y, q = 2025, 1

# Income Statement
add("Nettoomsättning", 247.8, y, q)
add("Kostnad sålda varor", -119.9, y, q)
add("Bruttoresultat", 127.8, y, q)
add("Bruttomarginal", 51.6, y, q, "%")
add("Lagerhanterings- och distributionskostnader", -30.3, y, q)
add("Marknadsföringskostnader", -24.4, y, q)
add("Administrations- och övriga rörelsekostnader", -53.1, y, q)
add("Rörelseresultat", 19.9, y, q)
add("Rörelsemarginal", 8.0, y, q, "%")
add("Finansnetto", -3.7, y, q)
add("Resultat före skatt", 16.2, y, q)
add("Skatt", 0.1, y, q)
add("Resultat efter skatt", 16.3, y, q)
add("Resultat per aktie", 0.54, y, q, "SEK")
add("Utestående aktier", 30.0, y, q, "Milj")

# Balance Sheet (2025-03-31)
add("Goodwill", 39.7, y, q)
add("Övriga immateriella anläggningstillgångar", 37.9, y, q)
add("Materiella anläggningstillgångar", 11.7, y, q)
add("Nyttjanderättstillgångar", 230.1, y, q)
add("Uppskjuten skattefordran", 76.3, y, q)
add("Depositioner", 37.0, y, q)
add("Summa anläggningstillgångar", 432.7, y, q)
add("Varulager", 202.8, y, q)
add("Kortfristiga ej räntebärande fordringar", 38.4, y, q)
add("Likvida medel", 172.6, y, q)
add("Summa omsättningstillgångar", 413.8, y, q)
add("Summa tillgångar", 846.5, y, q)
add("Summa eget kapital", 253.4, y, q)
add("Avsättningar", 0.0, y, q)
add("Övriga skulder (lång)", 42.9, y, q)
add("Leasingskulder (lång)", 217.7, y, q)
add("Summa långfristiga skulder", 260.6, y, q)
add("Leasingskulder (kort)", 34.9, y, q)
add("Leverantörsskulder", 111.8, y, q)
add("Övriga skulder (kort)", 59.1, y, q)
add("Upplupna kostnader och förutbetalda intäkter", 126.8, y, q)
add("Summa kortfristiga skulder", 332.5, y, q)
add("Summa eget kapital och skulder", 846.5, y, q)

# Cash Flow
add("Kassaflöde löpande verksamheten före förändringar i rörelsekapitalet", 29.4, y, q)
add("Förändringar i rörelsekapitalet", -42.4, y, q)
add("Kassaflöde från rörelsen", -13.0, y, q)
add("Investeringar i anläggningstillgångar", -3.5, y, q)
add("Kassaflöde till/från investeringsverksamheten", -3.5, y, q)
add("Kassaflöde till/från finansieringsverksamheten", -7.7, y, q)
add("Periodens förändring av likvida medel", -24.2, y, q)

# KPIs
add("Nettoomsättningstillväxt", 11.5, y, q, "%")
add("Returgrad", 24.8, y, q, "%")
add("Lager som andel av nettoomsättning R12", 18.1, y, q, "%")
add("Försäljningsandel egna varumärken", 50.1, y, q, "%")
add("Lagerhanterings- och distributionskostnader som andel av nettoomsättningen", 12.2, y, q, "%")
add("Marknadsföringskostnader som andel av nettoomsättningen", 9.9, y, q, "%")
add("Antal aktiva kunder i Norden R12 (000)", 928, y, q, "st")
add("Antal besök i Norden (000)", 21553, y, q, "st")
add("Antal ordrar i Norden (000)", 399, y, q, "st")
add("Genomsnittlig kundkorg i Norden", 752, y, q, "SEK")
add("Konverteringsgrad i Norden", 1.9, y, q, "%")
add("Antal anställda", 145, y, q, "st")
add("Andel kvinnliga anställda", 63, y, q, "%")

# Depreciation
add("Avskrivningar av materiella anläggningstillgångar", -1.1, y, q)
add("Avskrivningar av immateriella anläggningstillgångar", -3.8, y, q)
add("Avskrivningar (ej inkluderat IFRS 16)", -4.9, y, q)
add("Avskrivningar av nyttjanderättstillgångar", -8.3, y, q)
add("Avskrivningar (Inkluderat IFRS 16)", -13.2, y, q)

# Geography
add("Nettoomsättning Sverige", 126.5, y, q)
add("Nettoomsättning Norden inklusive Sverige", 239.8, y, q)
add("Nettoomsättning Övriga världen", 7.9, y, q)

# =============================================================================
# Q2 2025
# =============================================================================
y, q = 2025, 2

# Income Statement
add("Nettoomsättning", 361.7, y, q)
add("Kostnad sålda varor", -164.7, y, q)
add("Bruttoresultat", 196.9, y, q)
add("Bruttomarginal", 54.5, y, q, "%")
add("Lagerhanterings- och distributionskostnader", -42.7, y, q)
add("Marknadsföringskostnader", -36.2, y, q)
add("Administrations- och övriga rörelsekostnader", -62.6, y, q)
add("Rörelseresultat", 55.4, y, q)
add("Rörelsemarginal", 15.3, y, q, "%")
add("Finansnetto", -3.0, y, q)
add("Resultat före skatt", 52.4, y, q)
add("Skatt", 0.1, y, q)
add("Resultat efter skatt", 52.4, y, q)
add("Resultat per aktie", 1.75, y, q, "SEK")
add("Utestående aktier", 30.0, y, q, "Milj")

# Balance Sheet (2025-06-30)
add("Goodwill", 39.7, y, q)
add("Övriga immateriella anläggningstillgångar", 41.7, y, q)
add("Materiella anläggningstillgångar", 12.1, y, q)
add("Nyttjanderättstillgångar", 221.9, y, q)
add("Uppskjuten skattefordran", 76.4, y, q)
add("Depositioner", 37.0, y, q)
add("Summa anläggningstillgångar", 428.8, y, q)
add("Varulager", 172.0, y, q)
add("Kortfristiga ej räntebärande fordringar", 53.4, y, q)
add("Likvida medel", 259.6, y, q)
add("Summa omsättningstillgångar", 485.0, y, q)
add("Summa tillgångar", 913.8, y, q)
add("Summa eget kapital", 306.2, y, q)
add("Avsättningar", 0.0, y, q)
add("Övriga skulder (lång)", 37.6, y, q)
add("Leasingskulder (lång)", 210.8, y, q)
add("Summa långfristiga skulder", 248.4, y, q)
add("Leasingskulder (kort)", 33.8, y, q)
add("Leverantörsskulder", 119.3, y, q)
add("Övriga skulder (kort)", 71.2, y, q)
add("Upplupna kostnader och förutbetalda intäkter", 135.0, y, q)
add("Summa kortfristiga skulder", 359.2, y, q)
add("Summa eget kapital och skulder", 913.8, y, q)

# Cash Flow
add("Kassaflöde löpande verksamheten före förändringar i rörelsekapitalet", 64.9, y, q)
add("Förändringar i rörelsekapitalet", 39.3, y, q)
add("Kassaflöde från rörelsen", 104.1, y, q)
add("Investeringar i anläggningstillgångar", -9.2, y, q)
add("Kassaflöde till/från investeringsverksamheten", -9.2, y, q)
add("Kassaflöde till/från finansieringsverksamheten", -7.9, y, q)
add("Periodens förändring av likvida medel", 87.1, y, q)

# KPIs
add("Nettoomsättningstillväxt", 15.1, y, q, "%")
add("Returgrad", 28.4, y, q, "%")
add("Lager som andel av nettoomsättning R12", 14.7, y, q, "%")
add("Försäljningsandel egna varumärken", 54.8, y, q, "%")
add("Lagerhanterings- och distributionskostnader som andel av nettoomsättningen", 11.8, y, q, "%")
add("Marknadsföringskostnader som andel av nettoomsättningen", 10.0, y, q, "%")
add("Antal aktiva kunder i Norden R12 (000)", 968, y, q, "st")
add("Antal besök i Norden (000)", 26925, y, q, "st")
add("Antal ordrar i Norden (000)", 574, y, q, "st")
add("Genomsnittlig kundkorg i Norden", 754, y, q, "SEK")
add("Konverteringsgrad i Norden", 2.1, y, q, "%")
add("Antal anställda", 157, y, q, "st")
add("Andel kvinnliga anställda", 64, y, q, "%")

# Depreciation
add("Avskrivningar av materiella anläggningstillgångar", -1.2, y, q)
add("Avskrivningar av immateriella anläggningstillgångar", -3.8, y, q)
add("Avskrivningar (ej inkluderat IFRS 16)", -4.9, y, q)
add("Avskrivningar av nyttjanderättstillgångar", -8.3, y, q)
add("Avskrivningar (Inkluderat IFRS 16)", -13.2, y, q)

# Geography
add("Nettoomsättning Sverige", 191.4, y, q)
add("Nettoomsättning Norden inklusive Sverige", 352.4, y, q)
add("Nettoomsättning Övriga världen", 9.2, y, q)

# =============================================================================
# Q3 2025
# =============================================================================
y, q = 2025, 3

# Income Statement
add("Nettoomsättning", 283.7, y, q)
add("Kostnad sålda varor", -122.5, y, q)
add("Bruttoresultat", 161.2, y, q)
add("Bruttomarginal", 56.8, y, q, "%")
add("Lagerhanterings- och distributionskostnader", -31.3, y, q)
add("Marknadsföringskostnader", -26.8, y, q)
add("Administrations- och övriga rörelsekostnader", -59.9, y, q)
add("Rörelseresultat", 43.3, y, q)
add("Rörelsemarginal", 15.3, y, q, "%")
add("Finansiella intäkter", 0.5, y, q)
add("Finansiella kostnader", -2.3, y, q)
add("Resultat före skatt", 41.5, y, q)
add("Skatt", 0.1, y, q)
add("Resultat efter skatt", 41.5, y, q)
add("Resultat per aktie", 1.38, y, q, "SEK")
add("Utestående aktier", 30.0, y, q, "Milj")

# Balance Sheet (2025-09-30)
add("Goodwill", 39.7, y, q)
add("Övriga immateriella anläggningstillgångar", 43.2, y, q)
add("Materiella anläggningstillgångar", 11.1, y, q)
add("Nyttjanderättstillgångar", 263.5, y, q)
add("Uppskjuten skattefordran", 76.4, y, q)
add("Depositioner", 37.1, y, q)
add("Summa anläggningstillgångar", 471.1, y, q)
add("Varulager", 227.8, y, q)
add("Kortfristiga ej räntebärande fordringar", 49.3, y, q)
add("Likvida medel", 226.7, y, q)
add("Summa omsättningstillgångar", 503.8, y, q)
add("Summa tillgångar", 974.9, y, q)
add("Summa eget kapital", 347.9, y, q)
add("Avsättningar", 1.4, y, q)
add("Övriga skulder (lång)", 37.5, y, q)
add("Leasingskulder (lång)", 247.7, y, q)
add("Summa långfristiga skulder", 286.5, y, q)
add("Leasingskulder (kort)", 38.9, y, q)
add("Leverantörsskulder", 137.8, y, q)
add("Övriga skulder (kort)", 49.2, y, q)
add("Upplupna kostnader och förutbetalda intäkter", 114.5, y, q)
add("Summa kortfristiga skulder", 340.4, y, q)
add("Summa eget kapital och skulder", 974.9, y, q)

# Cash Flow
add("Kassaflöde löpande verksamheten före förändringar i rörelsekapitalet", 54.0, y, q)
add("Förändringar i rörelsekapitalet", -72.5, y, q)
add("Kassaflöde från rörelsen", -18.5, y, q)
add("Investeringar i anläggningstillgångar", -5.6, y, q)
add("Kassaflöde till/från investeringsverksamheten", -5.6, y, q)
add("Kassaflöde till/från finansieringsverksamheten", -8.7, y, q)
add("Periodens förändring av likvida medel", -32.8, y, q)

# KPIs
add("Nettoomsättningstillväxt", 18.4, y, q, "%")
add("Returgrad", 26.1, y, q, "%")
add("Lager som andel av nettoomsättning R12", 18.8, y, q, "%")
add("Försäljningsandel egna varumärken", 62.2, y, q, "%")
add("Lagerhanterings- och distributionskostnader som andel av nettoomsättningen", 11.0, y, q, "%")
add("Marknadsföringskostnader som andel av nettoomsättningen", 9.4, y, q, "%")
add("Antal aktiva kunder i Norden R12 (000)", 1001, y, q, "st")
add("Antal besök i Norden (000)", 21079, y, q, "st")
add("Antal ordrar i Norden (000)", 423, y, q, "st")
add("Genomsnittlig kundkorg i Norden", 765, y, q, "SEK")
add("Konverteringsgrad i Norden", 2.0, y, q, "%")
add("Antal anställda", 169, y, q, "st")
add("Andel kvinnliga anställda", 65, y, q, "%")

# Depreciation
add("Avskrivningar av materiella anläggningstillgångar", -1.0, y, q)
add("Avskrivningar av immateriella anläggningstillgångar", -3.8, y, q)
add("Avskrivningar (ej inkluderat IFRS 16)", -4.8, y, q)
add("Avskrivningar av nyttjanderättstillgångar", -9.1, y, q)
add("Avskrivningar (Inkluderat IFRS 16)", -13.9, y, q)

# Geography
add("Nettoomsättning Sverige", 142.8, y, q)
add("Nettoomsättning Norden inklusive Sverige", 267.9, y, q)
add("Nettoomsättning Övriga världen", 15.8, y, q)

# =============================================================================
# Q4 2025
# =============================================================================
y, q = 2025, 4

# Income Statement
add("Nettoomsättning", 370.5, y, q)
add("Kostnad sålda varor", -170.4, y, q)
add("Bruttoresultat", 200.0, y, q)
add("Bruttomarginal", 54.0, y, q, "%")
add("Lagerhanterings- och distributionskostnader", -42.3, y, q)
add("Marknadsföringskostnader", -37.3, y, q)
add("Administrations- och övriga rörelsekostnader", -72.6, y, q)
add("Rörelseresultat", 47.8, y, q)
add("Rörelsemarginal", 12.9, y, q, "%")
add("Finansiella intäkter", 0.8, y, q)
add("Finansiella kostnader", -4.2, y, q)
add("Resultat före skatt", 44.4, y, q)
add("Skatt", 13.9, y, q)
add("Resultat efter skatt", 58.3, y, q)
add("Resultat per aktie", 1.94, y, q, "SEK")
add("Utestående aktier", 30.0, y, q, "Milj")

# Balance Sheet (2025-12-31)
add("Goodwill", 39.7, y, q)
add("Övriga immateriella anläggningstillgångar", 44.3, y, q)
add("Materiella anläggningstillgångar", 18.9, y, q)
add("Nyttjanderättstillgångar", 269.7, y, q)
add("Uppskjuten skattefordran", 90.4, y, q)
add("Depositioner", 37.0, y, q)
add("Summa anläggningstillgångar", 500.0, y, q)
add("Varulager", 188.2, y, q)
add("Kortfristiga ej räntebärande fordringar", 47.7, y, q)
add("Likvida medel", 253.8, y, q)
add("Summa omsättningstillgångar", 489.7, y, q)
add("Summa tillgångar", 989.7, y, q)
add("Summa eget kapital", 406.4, y, q)
add("Avsättningar", 2.6, y, q)
add("Övriga skulder (lång)", 11.0, y, q)
add("Leasingskulder (lång)", 250.9, y, q)
add("Summa långfristiga skulder", 264.5, y, q)
add("Leasingskulder (kort)", 36.2, y, q)
add("Leverantörsskulder", 80.9, y, q)
add("Övriga skulder (kort)", 81.3, y, q)
add("Upplupna kostnader och förutbetalda intäkter", 120.4, y, q)
add("Summa kortfristiga skulder", 318.8, y, q)
add("Summa eget kapital och skulder", 989.7, y, q)

# Cash Flow
add("Kassaflöde löpande verksamheten före förändringar i rörelsekapitalet", 61.9, y, q)
add("Förändringar i rörelsekapitalet", -11.1, y, q)
add("Kassaflöde från rörelsen", 50.8, y, q)
add("Investeringar i anläggningstillgångar", -13.9, y, q)
add("Kassaflöde till/från investeringsverksamheten", -13.9, y, q)
add("Kassaflöde till/från finansieringsverksamheten", -9.7, y, q)
add("Periodens förändring av likvida medel", 27.2, y, q)

# KPIs
add("Nettoomsättningstillväxt", 16.4, y, q, "%")
add("Returgrad", 22.8, y, q, "%")
add("Lager som andel av nettoomsättning R12", 14.9, y, q, "%")
add("Försäljningsandel egna varumärken", 62.1, y, q, "%")
add("Lagerhanterings- och distributionskostnader som andel av nettoomsättningen", 11.4, y, q, "%")
add("Marknadsföringskostnader som andel av nettoomsättningen", 10.1, y, q, "%")
add("Antal aktiva kunder i Norden R12 (000)", 1029, y, q, "st")
add("Antal besök i Norden (000)", 25050, y, q, "st")
add("Antal ordrar i Norden (000)", 578, y, q, "st")
add("Genomsnittlig kundkorg i Norden", 656, y, q, "SEK")
add("Konverteringsgrad i Norden", 2.3, y, q, "%")
add("Antal anställda", 175, y, q, "st")
add("Andel kvinnliga anställda", 65, y, q, "%")

# Depreciation
add("Avskrivningar av materiella anläggningstillgångar", -1.9, y, q)
add("Avskrivningar av immateriella anläggningstillgångar", -3.2, y, q)
add("Avskrivningar (ej inkluderat IFRS 16)", -5.1, y, q)
add("Avskrivningar av nyttjanderättstillgångar", -9.9, y, q)
add("Avskrivningar (Inkluderat IFRS 16)", -15.0, y, q)

# Geography
add("Nettoomsättning Sverige", 175.1, y, q)
add("Nettoomsättning Norden inklusive Sverige", 345.2, y, q)
add("Nettoomsättning Övriga världen", 25.3, y, q)


# =============================================================================
# Write CSV
# =============================================================================
output_path = "nelly_report_long.csv"
fields = ["Companyname", "attribute", "value", "fiscial_year", "quarter",
          "date_inserted", "source", "unit"]

with open(output_path, "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=fields, delimiter="\t")
    writer.writeheader()
    for attr, val, year, quarter, unit in data:
        writer.writerow({
            "Companyname": COMPANY,
            "attribute": attr,
            "value": str(val),
            "fiscial_year": year,
            "quarter": quarter,
            "date_inserted": NOW,
            "source": SOURCE,
            "unit": unit,
        })

print(f"Wrote {len(data)} rows to {output_path}")
