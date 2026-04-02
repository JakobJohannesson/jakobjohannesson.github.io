"""
Normalize the company_data schema:
  - company_id_mapping: companyid -> company_name
  - attribute_data: attribute_id -> attribute metadata + borsdata_name mapping
  - company_data: fact table with companyid + attribute_id instead of strings
"""
import csv
from datetime import datetime, timezone

NOW = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S+00")

# ── Translation map: report_name -> borsdata_name ──
TRANSLATIONS = {
    "Nettoomsättning": "Nettoomsättning",
    "Bruttoresultat": "Bruttoresultat",
    "Bruttomarginal": "Bruttomarginal",
    "Rörelseresultat": "Rörelseresultat",
    "Rörelsemarginal": "Rörelsemarginal",
    "Resultat före skatt": "Resultat Före Skatt",
    "Resultat efter skatt": "Resultat Hänföring Aktieägare",
    "Resultat per aktie": "Vinst/Aktie",
    "Utestående aktier": "Antal Aktier",
    "Goodwill": "Immateriella tillgångar",
    "Övriga immateriella anläggningstillgångar": "Immateriella tillgångar",
    "Materiella anläggningstillgångar": "Materiella tillgångar",
    "Nyttjanderättstillgångar": "Materiella tillgångar",
    "Uppskjuten skattefordran": "Finansiella tillgångar",
    "Depositioner": "Finansiella tillgångar",
    "Summa anläggningstillgångar": "Summa Anläggningstillgångar",
    "Likvida medel": "Kassa/Bank",
    "Summa omsättningstillgångar": "Summa Omsättningstillgångar",
    "Summa tillgångar": "Summa Tillgångar",
    "Summa eget kapital": "Summa Eget Kapital",
    "Summa långfristiga skulder": "Långfristiga Skulder",
    "Summa kortfristiga skulder": "Kortfristiga Skulder",
    "Summa eget kapital och skulder": "Summa Eget Kapital och Skulder",
    "Kassaflöde från rörelsen": "Kassaf LöpandeVerk",
    "Kassaflöde till/från investeringsverksamheten": "Kassaf Investeringsverk",
    "Kassaflöde till/från finansieringsverksamheten": "Kassaf Finansieringsverk",
    "Periodens förändring av likvida medel": "Åretskassaflöde",
}

# ── Attribute descriptions and sections ──
ATTR_META = {
    # Borsdata attributes
    "Nettoomsättning": ("Intäkter från B2C och B2B kunder", "MSEK", "quarterly", "resultaträkning"),
    "Bruttoresultat": ("Nettoomsättning minus kostnad sålda varor", "MSEK", "quarterly", "resultaträkning"),
    "Rörelseresultat": ("Resultat efter alla rörelsekostnader", "MSEK", "quarterly", "resultaträkning"),
    "Resultat Före Skatt": ("Rörelseresultat plus finansnetto", "MSEK", "quarterly", "resultaträkning"),
    "Resultat Hänföring Aktieägare": ("Resultat efter skatt hänförligt till aktieägare", "MSEK", "quarterly", "resultaträkning"),
    "EBITDA": ("Rörelseresultat plus avskrivningar", "MSEK", "quarterly", "resultaträkning"),
    "Vinst/Aktie": ("Resultat per aktie", "SEK", "quarterly", "per aktie"),
    "Nettoomsättning/Aktie": ("Nettoomsättning per aktie", "SEK", "quarterly", "per aktie"),
    "EBITDA / Aktie": ("EBITDA per aktie", "SEK", "quarterly", "per aktie"),
    "Eget Kapital/Aktie": ("Eget kapital per aktie", "SEK", "quarterly", "per aktie"),
    "Nettoskuld/Aktie": ("Nettoskuld per aktie", "SEK", "quarterly", "per aktie"),
    "Operativ kassaflöde/Aktie": ("Operativt kassaflöde per aktie", "SEK", "quarterly", "per aktie"),
    "FCF / Aktie": ("Fritt kassaflöde per aktie", "SEK", "quarterly", "per aktie"),
    "Årets kassaflöde/Aktie": ("Årets kassaflöde per aktie", "SEK", "quarterly", "per aktie"),
    "Antal Aktier": ("Antal utestående aktier", "Milj", "quarterly", "aktiedata"),
    "Utdelning": ("Utdelning per aktie", "SEK", "quarterly", "aktiedata"),
    "Immateriella tillgångar": ("Goodwill och övriga immateriella tillgångar", "MSEK", "quarterly", "balansräkning"),
    "Materiella tillgångar": ("Materiella anläggningstillgångar inkl nyttjanderätt", "MSEK", "quarterly", "balansräkning"),
    "Finansiella tillgångar": ("Uppskjuten skattefordran och depositioner", "MSEK", "quarterly", "balansräkning"),
    "Summa Anläggningstillgångar": ("Summa anläggningstillgångar", "MSEK", "quarterly", "balansräkning"),
    "Kassa/Bank": ("Likvida medel", "MSEK", "quarterly", "balansräkning"),
    "Summa Omsättningstillgångar": ("Summa omsättningstillgångar", "MSEK", "quarterly", "balansräkning"),
    "Summa Tillgångar": ("Summa tillgångar", "MSEK", "quarterly", "balansräkning"),
    "Summa Eget Kapital": ("Summa eget kapital", "MSEK", "quarterly", "balansräkning"),
    "Långfristiga Skulder": ("Summa långfristiga skulder", "MSEK", "quarterly", "balansräkning"),
    "Kortfristiga Skulder": ("Summa kortfristiga skulder", "MSEK", "quarterly", "balansräkning"),
    "Summa Eget Kapital och Skulder": ("Summa eget kapital och skulder", "MSEK", "quarterly", "balansräkning"),
    "Nettoskuld": ("Nettoskuld", "MSEK", "quarterly", "balansräkning"),
    "Totala Skulder": ("Totala skulder", "MSEK", "quarterly", "balansräkning"),
    "Totala Skulder och Eget kapital": ("Totala skulder och eget kapital", "MSEK", "quarterly", "balansräkning"),
    "Kassaf LöpandeVerk": ("Kassaflöde från löpande verksamheten", "MSEK", "quarterly", "kassaflöde"),
    "Kassaf Investeringsverk": ("Kassaflöde från investeringsverksamheten", "MSEK", "quarterly", "kassaflöde"),
    "Kassaf Finansieringsverk": ("Kassaflöde från finansieringsverksamheten", "MSEK", "quarterly", "kassaflöde"),
    "Åretskassaflöde": ("Periodens förändring av likvida medel", "MSEK", "quarterly", "kassaflöde"),
    "FrittKassaflöde": ("Fritt kassaflöde", "MSEK", "quarterly", "kassaflöde"),
    "EBITDA-marginal": ("EBITDA / Nettoomsättning", "%", "quarterly", "marginal"),
    "Bruttomarginal": ("Bruttoresultat / Nettoomsättning", "%", "quarterly", "marginal"),
    "Rörelsemarginal": ("Rörelseresultat / Nettoomsättning", "%", "quarterly", "marginal"),
    "Vinstmarginal": ("Resultat efter skatt / Nettoomsättning", "%", "quarterly", "marginal"),
    "OP-marginal": ("Operativ marginal", "%", "quarterly", "marginal"),
    "FCF-marginal": ("Fritt kassaflöde / Nettoomsättning", "%", "quarterly", "marginal"),
    "Årets kassaflöde marginal": ("Årets kassaflöde / Nettoomsättning", "%", "quarterly", "marginal"),
    "Immat.tillgång.-%": ("Immateriella tillgångar / Summa tillgångar", "%", "quarterly", "nyckeltal"),
    "Kassa-%": ("Kassa / Summa tillgångar", "%", "quarterly", "nyckeltal"),
    "Rörelsekapital-%": ("Rörelsekapital / Nettoomsättning", "%", "quarterly", "nyckeltal"),
    "Soliditet": ("Eget kapital / Summa tillgångar", "%", "quarterly", "nyckeltal"),
    "Avkastning På EK": ("Avkastning på eget kapital", "%", "quarterly", "nyckeltal"),
    "Avkastning på T": ("Avkastning på totalt kapital", "%", "quarterly", "nyckeltal"),
    "Capex %": ("Capex / Nettoomsättning", "%", "quarterly", "nyckeltal"),
    "Utdelning/FCF": ("Utdelning / Fritt kassaflöde", "%", "quarterly", "nyckeltal"),
    "Aktiekurs Snitt": ("Genomsnittlig aktiekurs under kvartalet", "SEK", "quarterly", "aktiekurs"),
    "Aktiekurs Högsta": ("Högsta aktiekurs under kvartalet", "SEK", "quarterly", "aktiekurs"),
    "Aktiekurs Lägsta": ("Lägsta aktiekurs under kvartalet", "SEK", "quarterly", "aktiekurs"),
    # Report-only attributes
    "Kostnad sålda varor": ("Kostnader hänförliga till inköpta varor", "MSEK", "quarterly", "resultaträkning"),
    "Lagerhanterings- och distributionskostnader": ("Kostnader för lager och distribution till kund", "MSEK", "quarterly", "resultaträkning"),
    "Marknadsföringskostnader": ("Kostnader för marknadsföring och annonsering", "MSEK", "quarterly", "resultaträkning"),
    "Administrations- och övriga rörelsekostnader": ("Admin, IT, personal och övriga rörelsekostnader", "MSEK", "quarterly", "resultaträkning"),
    "Finansnetto": ("Nettot av finansiella intäkter och kostnader", "MSEK", "quarterly", "resultaträkning"),
    "Finansiella intäkter": ("Finansiella intäkter", "MSEK", "quarterly", "resultaträkning"),
    "Finansiella kostnader": ("Finansiella kostnader", "MSEK", "quarterly", "resultaträkning"),
    "Skatt": ("Inkomstskatt", "MSEK", "quarterly", "resultaträkning"),
    "Resultat efter skatt": ("Periodens resultat", "MSEK", "quarterly", "resultaträkning"),
    "Resultat före skatt": ("Resultat före skatt", "MSEK", "quarterly", "resultaträkning"),
    "Resultat per aktie": ("Resultat per aktie före/efter utspädning", "SEK", "quarterly", "per aktie"),
    "Utestående aktier": ("Utestående aktier vid periodens slut", "Milj", "quarterly", "aktiedata"),
    "Goodwill": ("Goodwill", "MSEK", "quarterly", "balansräkning"),
    "Övriga immateriella anläggningstillgångar": ("Övriga immateriella anläggningstillgångar", "MSEK", "quarterly", "balansräkning"),
    "Materiella anläggningstillgångar": ("Materiella anläggningstillgångar exkl nyttjanderätt", "MSEK", "quarterly", "balansräkning"),
    "Nyttjanderättstillgångar": ("Nyttjanderättstillgångar (IFRS 16)", "MSEK", "quarterly", "balansräkning"),
    "Uppskjuten skattefordran": ("Uppskjuten skattefordran", "MSEK", "quarterly", "balansräkning"),
    "Depositioner": ("Depositioner och spärrmedel", "MSEK", "quarterly", "balansräkning"),
    "Summa anläggningstillgångar": ("Summa anläggningstillgångar", "MSEK", "quarterly", "balansräkning"),
    "Varulager": ("Varulager", "MSEK", "quarterly", "balansräkning"),
    "Kortfristiga ej räntebärande fordringar": ("Kortfristiga ej räntebärande fordringar", "MSEK", "quarterly", "balansräkning"),
    "Likvida medel": ("Likvida medel / Kassa och bank", "MSEK", "quarterly", "balansräkning"),
    "Summa omsättningstillgångar": ("Summa omsättningstillgångar", "MSEK", "quarterly", "balansräkning"),
    "Summa tillgångar": ("Summa tillgångar", "MSEK", "quarterly", "balansräkning"),
    "Summa eget kapital": ("Summa eget kapital", "MSEK", "quarterly", "balansräkning"),
    "Avsättningar": ("Avsättningar", "MSEK", "quarterly", "balansräkning"),
    "Övriga skulder (lång)": ("Övriga långfristiga skulder (ej räntebärande)", "MSEK", "quarterly", "balansräkning"),
    "Leasingskulder (lång)": ("Långfristiga leasingskulder (IFRS 16)", "MSEK", "quarterly", "balansräkning"),
    "Summa långfristiga skulder": ("Summa långfristiga skulder", "MSEK", "quarterly", "balansräkning"),
    "Leasingskulder (kort)": ("Kortfristiga leasingskulder (IFRS 16)", "MSEK", "quarterly", "balansräkning"),
    "Leverantörsskulder": ("Leverantörsskulder", "MSEK", "quarterly", "balansräkning"),
    "Övriga skulder (kort)": ("Övriga kortfristiga skulder", "MSEK", "quarterly", "balansräkning"),
    "Upplupna kostnader och förutbetalda intäkter": ("Upplupna kostnader och förutbetalda intäkter", "MSEK", "quarterly", "balansräkning"),
    "Summa kortfristiga skulder": ("Summa kortfristiga skulder", "MSEK", "quarterly", "balansräkning"),
    "Summa eget kapital och skulder": ("Summa eget kapital och skulder", "MSEK", "quarterly", "balansräkning"),
    "Kassaflöde löpande verksamheten före förändringar i rörelsekapitalet": ("Kassaflöde löpande före rörelsekapitalförändringar", "MSEK", "quarterly", "kassaflöde"),
    "Förändringar i rörelsekapitalet": ("Förändringar i rörelsekapitalet", "MSEK", "quarterly", "kassaflöde"),
    "Kassaflöde från rörelsen": ("Kassaflöde från rörelsen", "MSEK", "quarterly", "kassaflöde"),
    "Investeringar i anläggningstillgångar": ("Investeringar i anläggningstillgångar", "MSEK", "quarterly", "kassaflöde"),
    "Kassaflöde till/från investeringsverksamheten": ("Kassaflöde investeringsverksamheten", "MSEK", "quarterly", "kassaflöde"),
    "Kassaflöde till/från finansieringsverksamheten": ("Kassaflöde finansieringsverksamheten", "MSEK", "quarterly", "kassaflöde"),
    "Periodens förändring av likvida medel": ("Periodens förändring av likvida medel", "MSEK", "quarterly", "kassaflöde"),
    "Nettoomsättningstillväxt": ("Nettoomsättningstillväxt jämfört med samma period fg år", "%", "quarterly", "nyckeltal"),
    "Returgrad": ("Andel av försäljningen som returneras", "%", "quarterly", "nyckeltal"),
    "Lager som andel av nettoomsättning R12": ("Lager / nettoomsättning rullande 12 mån", "%", "quarterly", "nyckeltal"),
    "Försäljningsandel egna varumärken": ("Andel av försäljning från egna varumärken", "%", "quarterly", "nyckeltal"),
    "Lagerhanterings- och distributionskostnader som andel av nettoomsättningen": ("Lagerh/distr.kostn. som andel av nettoomsättningen", "%", "quarterly", "nyckeltal"),
    "Marknadsföringskostnader som andel av nettoomsättningen": ("Marknadsföringskostnader som andel av nettoomsättningen", "%", "quarterly", "nyckeltal"),
    "Antal aktiva kunder i Norden R12 (000)": ("Aktiva kunder i Norden rullande 12 mån (tusen)", "st", "quarterly", "nyckeltal"),
    "Antal besök i Norden (000)": ("Unika besök i Norden under kvartalet (tusen)", "st", "quarterly", "nyckeltal"),
    "Antal ordrar i Norden (000)": ("Antal ordrar i Norden under kvartalet (tusen)", "st", "quarterly", "nyckeltal"),
    "Genomsnittlig kundkorg i Norden": ("Genomsnittligt ordervärde i Norden", "SEK", "quarterly", "nyckeltal"),
    "Konverteringsgrad i Norden": ("Andel besökare som lägger en order", "%", "quarterly", "nyckeltal"),
    "Antal anställda": ("Antal anställda i koncernen", "st", "quarterly", "nyckeltal"),
    "Andel kvinnliga anställda": ("Andel kvinnliga anställda", "%", "quarterly", "nyckeltal"),
    "Avskrivningar av materiella anläggningstillgångar": ("Avskrivningar materiella anläggningstillgångar", "MSEK", "quarterly", "avskrivningar"),
    "Avskrivningar av immateriella anläggningstillgångar": ("Avskrivningar immateriella anläggningstillgångar", "MSEK", "quarterly", "avskrivningar"),
    "Avskrivningar (ej inkluderat IFRS 16)": ("Avskrivningar exkl nyttjanderättstillgångar", "MSEK", "quarterly", "avskrivningar"),
    "Avskrivningar av nyttjanderättstillgångar": ("Avskrivningar nyttjanderättstillgångar (IFRS 16)", "MSEK", "quarterly", "avskrivningar"),
    "Avskrivningar (Inkluderat IFRS 16)": ("Totala avskrivningar inkl IFRS 16", "MSEK", "quarterly", "avskrivningar"),
    "Nettoomsättning Sverige": ("Nettoomsättning hänförlig till Sverige", "MSEK", "quarterly", "geografi"),
    "Nettoomsättning Norden inklusive Sverige": ("Nettoomsättning hänförlig till Norden inkl Sverige", "MSEK", "quarterly", "geografi"),
    "Nettoomsättning Övriga världen": ("Nettoomsättning hänförlig till övriga världen", "MSEK", "quarterly", "geografi"),
    # Emissions / Sustainability
    "Scope 1 utsläpp": ("Direkta utsläpp från källor som kontrolleras av företaget", "ton CO2e", "annual", "utsläpp"),
    "Scope 2 utsläpp (marknadsbaserad)": ("Indirekta utsläpp från förbrukning av el, fjärrvärme och fjärrkyla (marknadsbaserad metod)", "ton CO2e", "annual", "utsläpp"),
    "Scope 2 utsläpp (platsbaserad)": ("Indirekta utsläpp från förbrukning av el, fjärrvärme och fjärrkyla (platsbaserad metod)", "ton CO2e", "annual", "utsläpp"),
    "Scope 1+2 utsläpp": ("Kombinerade Scope 1 och 2 utsläpp", "ton CO2e", "annual", "utsläpp"),
    "Scope 3 - Inköpta produkter och tjänster": ("Scope 3 utsläpp från inköpta produkter inkl produktion och material", "ton CO2e", "annual", "utsläpp"),
    "Scope 3 - Inköpta produkter Tier 1 produktion": ("Scope 3 utsläpp från Tier 1 tillverkning", "ton CO2e", "annual", "utsläpp"),
    "Scope 3 - Inköpta produkter material Tier 2-4": ("Scope 3 utsläpp från material- och textilproduktion Tier 2-4", "ton CO2e", "annual", "utsläpp"),
    "Scope 3 - Inköpta produkter förpackningsmaterial": ("Scope 3 utsläpp från förpackningsmaterial", "ton CO2e", "annual", "utsläpp"),
    "Scope 3 - Transport och distribution": ("Scope 3 utsläpp från transport och distribution", "ton CO2e", "annual", "utsläpp"),
    "Scope 3 - Affärsresor": ("Scope 3 utsläpp från affärsresor", "ton CO2e", "annual", "utsläpp"),
    "Scope 3 - Energianvändning i lokaler": ("Scope 3 utsläpp från energianvändning i lokaler", "ton CO2e", "annual", "utsläpp"),
    "Scope 3 utsläpp totalt": ("Totala Scope 3 utsläpp i värdekedjan", "ton CO2e", "annual", "utsläpp"),
    "Totala växthusgasutsläpp": ("Totala växthusgasutsläpp Scope 1+2+3", "ton CO2e", "annual", "utsläpp"),
}

# ── Step 1: Build attribute_id mapping ──
# Collect all unique attribute names from both sources
all_attrs = sorted(ATTR_META.keys())
attr_to_id = {name: idx + 1 for idx, name in enumerate(all_attrs)}

# ── Step 2: Write company_id_mapping.csv ──
with open("company_id_mapping.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f, delimiter="\t")
    w.writerow(["companyid", "company_name"])
    w.writerow([1, "Nelly"])
print("Wrote company_id_mapping.csv (1 company)")

# ── Step 3: Write attribute_data.csv ──
with open("attribute_data.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f, delimiter="\t")
    w.writerow(["attribute_id", "attribute_name", "attribute_description",
                "standard_unit", "frequency", "section", "borsdata_name"])
    for name in all_attrs:
        aid = attr_to_id[name]
        desc, unit, freq, section = ATTR_META[name]
        borsdata_name = TRANSLATIONS.get(name, name if name in ATTR_META else "")
        # If this IS a borsdata attribute, borsdata_name = itself
        # If it's a report attribute with a translation, use that
        # If no translation exists, leave empty
        if name in TRANSLATIONS:
            bd_name = TRANSLATIONS[name]
        elif any(v == name for v in TRANSLATIONS.values()):
            bd_name = name  # It IS a borsdata name
        else:
            bd_name = ""
        w.writerow([aid, name, desc, unit, freq, section, bd_name])
print(f"Wrote attribute_data.csv ({len(all_attrs)} attributes)")

# ── Step 4: Read existing long-format CSVs and convert to normalized format ──
fact_rows = []

# Read borsdata data
with open("nelly_long_transformed.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f, delimiter="\t")
    for row in reader:
        attr_name = row["attribute"]
        if attr_name not in attr_to_id:
            print(f"  WARN: borsdata attribute '{attr_name}' not in mapping, skipping")
            continue
        fact_rows.append({
            "companyid": 1,
            "attribute_id": attr_to_id[attr_name],
            "value": row["value"],
            "fiscial_year": row["fiscial_year"],
            "quarter": row["quarter"],
            "date_inserted": row["date_inserted"],
            "source": row["source"],
            "unit": row["unit"],
        })

# Read report data
with open("nelly_report_long.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f, delimiter="\t")
    for row in reader:
        attr_name = row["attribute"]
        if attr_name not in attr_to_id:
            print(f"  WARN: report attribute '{attr_name}' not in mapping, skipping")
            continue
        fact_rows.append({
            "companyid": 1,
            "attribute_id": attr_to_id[attr_name],
            "value": row["value"],
            "fiscial_year": row["fiscial_year"],
            "quarter": row["quarter"],
            "date_inserted": row["date_inserted"],
            "source": row["source"],
            "unit": row["unit"],
        })

# Write normalized company_data.csv
fields = ["companyid", "attribute_id", "value", "fiscial_year", "quarter",
          "date_inserted", "source", "unit"]
with open("company_data_normalized.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=fields, delimiter="\t")
    w.writeheader()
    w.writerows(fact_rows)
print(f"Wrote company_data_normalized.csv ({len(fact_rows)} rows)")
