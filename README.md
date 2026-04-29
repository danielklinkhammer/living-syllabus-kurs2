# Living Syllabus

Interaktive React/Vite-App fuer den Kurs `Designing with and for AI`.

## Wichtige Befehle

```bash
npm run dev
npm run build
npm run smoke
npm run export:report
npm run export:batch
```

## Export-Workflow

- Die Source of Truth fuer Figma-Batches liegt in [`src/config/export-registry.json`](./src/config/export-registry.json).
- Jede Slide bekommt beim Laden automatisch Export-Metadaten aus der Registry.
- Fuer manuelle Exporte ist die normale sichtbare App mit dem Figma-Capture-Widget der Standardweg.
- Nur Slides mit `exportStatus = "ready"` sollen aktiv nach Figma ueberfuehrt werden.

## Prüf-Workflow

`npm run smoke` fuehrt den technischen Preflight aus:

1. Produktions-Build
2. Export-Registry validieren
3. Referenzierte Public-Assets pruefen

Die manuelle Export- und Figma-Routine ist in [`docs/figma-export-playbook.md`](./docs/figma-export-playbook.md) dokumentiert.
