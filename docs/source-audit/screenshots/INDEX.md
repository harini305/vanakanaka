# Screenshots index

Captured 2026-10-28 from https://vanakanaka.com with headless Google Chrome (puppeteer-core), device scale factor 1, JPEG. Before capture, each page was scrolled top to bottom to trigger lazy-loading and entrance animations. 115 files, about 12 MB.

## Naming

`<page>__<viewport>-<width>__<kind>.jpg`

| Viewport | Size | Emulation |
|---|---|---|
| `desktop-1440` | 1440 × 900 | desktop |
| `tablet-768` | 768 × 1024 | touch |
| `mobile-390` | 390 × 844 | mobile + touch |

| Kind | What it shows |
|---|---|
| `fold` | First screen (above the fold) at scroll position 0 |
| `full` | Full-page capture |
| `scrolled` | Viewport at scrollY = 1400. Shows that the header is **not sticky** |
| `menu-open` | Tablet/mobile with the hamburger menu opened |
| `tail-NN` | Mobile Home only: viewport shots from y = 16,000 to the end (see limitation below) |

## Pages covered

`home`, `classes`, `schedule`, `the-studio`, `contact`, `yoga-client-intake-form`, `privacy-policy`, `hello-world` (legacy post), `category-uncategorized` (legacy archive), `404` (`/this-page-does-not-exist/`). Each page has fold, full and scrolled shots at all three viewports, plus menu-open at tablet and mobile.

## Interaction shots

| File | What it shows |
|---|---|
| `interaction__whatsapp-widget-open__desktop-1440.jpg` | Floating WhatsApp widget popup opened |
| `interaction__intake-form-empty-submit__desktop-1440.jpg` | Native validation on an empty intake-form submit |

## Known limitations

- `home__mobile-390__full.jpg`: the page is 18,420 px tall, which exceeds Chrome's ~16,384 px capture limit, so the bottom part repeats earlier content. Use `home__mobile-390__tail-00…02.jpg` for the contact band and footer on mobile.
- The Google Maps iframe on Home rendered blank at capture time (lazy-load timing). It renders correctly on `contact__*`.
- The floating WhatsApp widget appears in most shots (it is fixed on every page).
