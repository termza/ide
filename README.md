# PPL Study Guide — Cessna 172S

A simple, modern, offline-capable Progressive Web App for studying for the
Private Pilot License (Airplane Single-Engine Land) in a Cessna 172S Skyhawk.

Topic content is sourced from:

- **14 CFR (FARs)** — Parts 61, 91 highlights
- **AIM** — communications, airspace, weather products
- **PHAK** (FAA-H-8083-25) — aerodynamics, performance, weather, navigation
- **ACS** (FAA-S-ACS-6) — Areas of Operation, tasks, tolerances
- **Cessna 172S POH/AFM** — V-speeds, limitations, normal & emergency procedures

> Reference material only — always verify against the current publications and
> the specific aircraft's POH before flight.

## Run locally

It's a static site. Any HTTP server works (a service worker requires a real
HTTP origin, not `file://`):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Features

- Offline-first PWA — installable, works without a network after first load.
- Light/dark theme that respects `prefers-color-scheme` and remembers your choice.
- Full-text search across every topic (`/` to focus the box).
- Per-topic "Mark as studied" tracking with progress bar.
- Mobile-friendly responsive layout.
- Clean, modern, professional design — no frameworks, no build step.

## Project layout

```
.
├── index.html              # App shell
├── manifest.webmanifest    # PWA manifest
├── service-worker.js       # Offline cache
├── assets/
│   ├── styles.css          # Theming + layout
│   ├── app.js              # Routing, search, rendering
│   └── content.js          # All study content
└── icons/                  # App icons (SVG + PNG)
```

## Adding content

Edit `assets/content.js`. Each topic supports lightweight Markdown-flavored
syntax:

- `### Heading` for sections
- `- bullet` lists
- ` | a | b | ` GitHub-style tables
- `**bold**`, `*italic*`, `` `code` ``
- `<qref>...</qref>` blocks of `Label|Value|Unit` lines for at-a-glance reference
  cards (V-speeds, weights, etc.)
- `> blockquote` callouts
