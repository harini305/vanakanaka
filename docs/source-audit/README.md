# Source Audit: vanakanaka.com (Phase 1)

Research-only audit of the original **Vana Kanaka Yoga Bali** website, prepared for the Phase 2 frontend rebuild (Next.js App Router · JavaScript · GSAP/ScrollTrigger).
**Audited:** 2026-10-28 · **Status:** complete, awaiting review and approval before Phase 2.

## Start here

1. **`01-audit-report.md`**: executive summary, coverage, limitations, confirmations.
2. **`08-issues-gaps-questions.md`**: conflicts and questions the business must answer (addresses, phone, hours, pass validity, masterclass, logo, privacy, imagery).
3. **`09-phase-2-recommendations.md`**: mandatory design rules (two-font rule, footer, images/`unoptimized`), proposed IA, components and the acceptance checklist.

## Contents

| File / folder | What it is |
|---|---|
| `01-audit-report.md` | Complete audit findings and coverage |
| `02-page-inventory.md` | Route table (live / legacy / 404) and page-by-page section inventory; shared components |
| `03-content-inventory.md` | Content map, key facts, content that doesn't exist, redundancy notes |
| `04-assets-manifest.csv` | All 33 media originals + fonts/icons/embeds: dimensions, size, URLs, local path, usage, notes |
| `05-brand-reference.md` | Logos, colour palette (verified HEX + contrast), typography (computed), shape/imagery/motion |
| `06-functionality-and-dependencies.md` | Stack, feature-by-feature verification status, external services |
| `07-responsive-observations.md` | 1440 / 768 / 390 behaviour, page heights, responsive problems |
| `08-issues-gaps-questions.md` | Factual conflicts, typos, duplicates, technical/SEO/a11y issues, asset gaps, coverage limits |
| `09-phase-2-recommendations.md` | Implementation considerations and mandatory requirements |
| `content/` | **Verbatim** page text (`home.md`, `classes.md`, `schedule.md`, `the-studio.md`, `contact.md`, `yoga-client-intake-form.md`, `privacy-policy.md`, `header.md`, `footer.md`, `hello-world.md`) + **`structured-data.json`** (facts: business, contact, pricing, schedule, masterclass, etc.) |
| `assets/original/2026/05/`, `assets/original/2026/07/` | Untouched original media downloaded from `/wp-content/uploads/` (33 files, 37.5 MB). Do not edit; write optimised copies elsewhere in Phase 2 |
| `screenshots/` | 115 JPEGs (fold / full / scrolled / menu-open × 10 pages × 3 viewports + interactions); see `screenshots/INDEX.md` |
| `evidence/` | `robots.txt`, sitemaps, `seo-metadata.json` (titles, descriptions, OG, H1 per page), `elementor-kit-globals.css` (original colour/typography tokens) |

## At a glance

- **7 live pages:** Home, Classes, Schedule, The Studio, Contact, Yoga Client Intake Form, Privacy Policy. Plus the default WordPress "Hello world!" post and its category archive (legacy; do not rebuild).
- **All conversions go through WhatsApp** (+62 813 3974 9892). No booking engine, payments, blog, testimonials, FAQs or teacher profiles exist.
- **Brand:** cream `#F3EEE3`, olive `#364230`, green `#1F470E`, gold `#CCA831`; Cormorant Garamond + DM Sans in practice.
- **Imagery:** most visible photos are ChatGPT-named images; 12 real venue photos exist (7 unused).

## Rules this audit followed

No code, no redesign, no package installs or config changes in the project, no push, no deploy. Original assets were copied, not modified. Nothing was invented: every fact cites the live site, and anything uncertain is labelled an estimate or listed in `08`.
