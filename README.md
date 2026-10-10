# ALERT - FDA Import Alert Exposure Report

Source-linked overview of public FDA Import Alert records for importer and compliance research. $99 one-time PDF report (up to 30 verified firms + audit log).

## Data

- 30 verified rows from official FDA pages: IA 16-119 (fish & fishery) + IA 16-124 (aquaculture drugs), Red List only.
- Every row carries its FDA source URL, record date, and check date (`data/firms_raw.csv`, cutoff 2026-10-10).

## Structure

- `site/` - static landing page (searchable firm lookup over `firms.json`)
- `data/` - verified dataset
- `reports/` - sample PDF + audit log + outreach/sales logs
- `tools/` - fetch, validate, and report scripts

## Preview

Open `site/index.html` directly in a browser. No build step, no server needed.

## Deploy (Vercel from GitHub)

Static site lives in `site/`. In Vercel project settings set **Root Directory** to `site`. Deploys to `alert.ai2eo.com`.

## Status

Technical MVP partial. No completed sale yet - offer labeled accordingly on the page.

Advisory only. Not legal advice. Verify on the official FDA page before acting.
