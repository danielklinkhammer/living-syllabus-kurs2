# Figma Export Playbook

## Zielbild

- Bestehende Figma-Datei weiterverwenden
- Eine dedizierte Figma-Page `Living Syllabus` verwenden
- Pro Slide genau ein Frame exportieren
- Die normale sichtbare App als Standardworkflow verwenden
- Nur Slides mit `exportStatus = "ready"` aktiv nach Figma ueberfuehren

## Source of Truth

- Slide-Inventar: `src/config/syllabus.config.tsx`
- Export-Metadaten: `src/config/export-registry.json`
- Batch-Vorschau: `npm run export:batch`

## Preflight vor jedem Exportlauf

```bash
npm run smoke
npm run export:report
npm run export:urls
```

Danach im Browser manuell pruefen:

1. Navigation und Sidebar
2. Pfeiltasten, Leertaste, Slide-Wechsel
3. Ready-Slides auf Overflow, abgeschnittene Inhalte und fehlende Assets
4. Responsive Brueche bei mindestens Mobile und Desktop

## Slide-URL

Die App hat fuer manuelle Exporte keinen separaten Exportmodus mehr.
Der offizielle Weg ist die normale App-Ansicht mit direktem Slide-Link:

- `?slide=<slideId>`

Beispiel:

```text
http://127.0.0.1:4173/?slide=s03-open1
```

`npm run export:urls` erzeugt fuer alle registrierten Slides die passenden Slide-Links.

## Update-Logik

Vor jedem echten Export:

1. Vorhandene Figma-Pages und Frames inventarisieren
2. Nach `exportId` oder `exportName` matchen
3. Keine anonymen Duplikate erzeugen

Empfohlen fuer spaetere MCP-Updates:

- `exportId` als stabilen Identifier verwenden
- zusaetzlich `exportName` als sichtbaren Frame-Namen nutzen
- falls moeglich Shared Plugin Data setzen:
  Namespace `living-syllabus`
  Key `exportId`

## Export-Ablauf mit Widget / MCP

1. Lokale App starten
2. Ziel-Slide ueber `?slide=<slideId>` im Browser anzeigen
3. Sidebar und UI-Zustand so einstellen, wie sie exportiert werden sollen
4. Ueber das Figma-Capture-Widget genau die aktuelle sichtbare Ansicht erfassen
5. Falls noetig `generate_figma_design` oder `use_figma` nur fuer Nachsortierung, Benennung oder Updates einsetzen

Wichtig:

- Keine Board- oder Multi-Slide-Ansichten als Primärworkflow verwenden
- Keine Batch-Boards nach Figma schreiben, wenn eigentlich Einzel-Slides gemeint sind
- Exportiert wird die Ansicht, die gerade im Browser sichtbar ist

## Ergebnis jeder Export-Runde dokumentieren

Nach jedem Exportlauf eine Liste fuehren mit:

- `neu exportiert`
- `aktualisiert`
- `uebersprungen`
- `fehlerhaft`

## Status-Regeln

- `draft`: lokal vorhanden, nicht exportieren
- `ready`: fuer den naechsten Batch freigegeben
- `hold`: bewusst aus Batch ausgenommen
