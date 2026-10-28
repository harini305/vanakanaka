# 01 — Website Audit Report: vanakanaka.com

**Phase:** 1 (research only; no design or code changes)
**Audited:** 2026-10-28
**Original site:** https://vanakanaka.com (`www.` and `http://` both 301 → `https://vanakanaka.com/`)
**Workspace at start:** `D:\vanakanaka52`, **empty** (no source code, assets, config or prior audit evidence)

---

## 1. Website overview

Vana Kanaka Yoga Bali is a single-location yoga studio ("shala") in **Desa Kutuh, Kuta Selatan, South Bali, Indonesia**. The website is a small brochure site whose conversion actions all lead to **WhatsApp**: booking enquiries, the floating chat widget, and a client intake/waiver form that composes a WhatsApp message. There is no booking engine, payment, e-commerce, account area or blog.

| Item | Finding |
|---|---|
| Platform | WordPress 7.0.7 · Hello Elementor 3.4.7 theme · Elementor 4.3.5 + Pro Elements · Yoast SEO · WP WhatsApp (NinjaTeam) · Hostinger Reach (inactive on the front end) |
| Pages | 7 published pages + 1 default post (REST API verified) |
| Navigation | Home · Classes · Schedule · The Studio · Contact (header and footer); Privacy Policy (footer); intake form linked from pricing CTAs |
| Offer | 2 signature classes (Kanaka Power, Vana Zen); weekly timetable of about 18 class styles; 7 priced products (IDR 160k–1.5M); a "Quantum NLP & Hypnotherapy" masterclass; shala rental (no details) |
| Brand | Cream / deep olive / dark green / gold; Cormorant Garamond + DM Sans (+ an unused custom font "JT" and system fallbacks); Balinese temple aesthetic; two competing logo systems |
| Imagery | 33 media files: **14 are ChatGPT-named images (used for almost all hero and section visuals)**, 12 real venue photos (mostly unused), 5 logo files, 2 unused Unsplash stock images |

## 2. Audit coverage

### 2.1 Pages successfully inspected (fully)
All at 1440, 768 and 390 px, with raw HTML, rendered DOM, computed styles, network requests and screenshots:

| Page | Route | Result |
|---|---|---|
| Home | `/` | ✅ full |
| Classes | `/classes/` | ✅ full |
| Schedule | `/schedule/` | ✅ full |
| The Studio | `/the-studio/` | ✅ full |
| Contact | `/contact/` | ✅ full |
| Yoga Client Intake Form | `/yoga-client-intake-form/` | ✅ full (incl. submit logic, tested with WhatsApp opening stubbed) |
| Privacy Policy | `/privacy-policy/` | ✅ full |
| Hello world! (default post) | `/hello-world/` | ✅ full (legacy) |
| Category archive | `/category/uncategorized/` | ✅ full (legacy) |
| 404 | any unknown URL | ✅ full |

### 2.2 Partially inspected
- **Global header/footer templates**: inspected as rendered; the Elementor editor settings were not accessible.
- **WhatsApp widget**: UI and link verified; the actual chat and response times were not.
- **Google Maps embed**: rendered and destination verified; place details not verified.

### 2.3 Discovered but not inspected / inaccessible
- WordPress admin, drafts, private pages, form submissions, Elementor template library: **no access** (not required; no credentials).
- External social profiles (Instagram, Facebook, TikTok): links recorded, pages not opened.
- "Official application" for booking mentioned in the SOP: **no link found anywhere**.

### 2.4 Broken / unavailable
- Home hero **"Explore Classes" → `#classes`**: the anchor does not exist (verified: no scroll).
- 13 common routes probed returned 404 (`/blog/`, `/about/`, `/gallery/`, `/faq/`, `/pricing/`, `/shop/`, etc.). They don't exist, which is expected.

### 2.5 Interactive states that could not be verified
- Real WhatsApp delivery (the form's `window.open` was stubbed to avoid sending messages to the business).
- Comment-form submission on `/hello-world/` (deliberately not submitted; it would post publicly).
- Keyboard focus order and screen-reader output were reviewed only at code level, not with assistive technology.
- Elementor entrance animations were observed in code (`fadeInUp`), not frame-by-frame.

### 2.6 Methods & tooling
`curl` (HTML, robots, sitemaps, CSS, media), the WordPress REST API, headless **Google Chrome via `puppeteer-core`** installed only in a temporary scratch folder (not in the project), Python/BeautifulSoup for text extraction, and Pillow for screenshot slicing and contact sheets.

### 2.7 Limitations
No real-device testing; landscape orientation and in-between widths not tested; mobile Home full-page capture exceeds Chrome's height limit (covered by extra tail shots); transfer sizes are lower bounds; "AI-generated" is inferred from filenames plus visual review. See `08 §F`.

## 3. Routes discovered

Seven live pages to rebuild, plus a branded 404; two legacy WordPress routes to redirect. Full table and recommendations: **`02-page-inventory.md §1`**.

## 4. Page-by-page section inventory

Summarised in **`02-page-inventory.md §2`** (sections in original order, assets, CTAs, SEO, risks, recommendations per page). Verbatim text is in **`content/`**.

Home, in brief: Hero → Philosophy → Signature classes → Price list (drop-ins / packages / private) → Masterclass → Quote → What you'll experience / Who it's for → Why Vana Kanaka? → Studio strip → Amenities → **Why Vana Kanaka? (duplicate)** → Find Us + map. That is 10,097 px on desktop and 18,420 px on mobile.

## 5. Content preservation findings

- Real, specific content worth preserving verbatim: **prices**, **weekly schedule**, **contact facts**, **intake form questions and waiver**, **bilingual studio SOP**, signature class descriptions, why-us points, masterclass copy (pending confirmation).
- Heavy repetition: the hero sentence appears ×4, the Why section ×2, the shala-rent note ×9, CTA pairs ×9, and the Find Us block on 3 pages plus the footer.
- Missing content: no testimonials, FAQs, teachers, about/story, email, or masterclass price/dates. **None should be invented.**
- Details: **`03-content-inventory.md`**, **`content/structured-data.json`**.

## 6. Original asset inventory

- All **33 WordPress media originals downloaded** to `assets/original/2026/{05,07}/` (37.5 MB; untouched originals, no resized variants).
- Mapped in **`04-assets-manifest.csv`** (ID, file, type, dimensions, bytes, original URL, local path, content, where used, intended use, quality/performance notes).
- Breakdown: 5 logo files (2 systems), 14 ChatGPT-named images (13 used), 12 real photos (5 used, 7 unused), 2 Unsplash stock images (unused).
- Not downloaded: custom font "JT Douro Sans" (licence unknown; never renders anyway). Google Fonts are referenced, not copied.
- Performance: photographic PNGs of 1.7–3.1 MB each; ≥ 3.4 MB of images on Studio and ≥ 2.5 MB on Home.

## 7. Typography (original)

- **Cormorant Garamond** (display serif) and **DM Sans** (labels/body), both from Google Fonts with all 18 variants requested.
- **"JT" (JT Douro Sans)** is declared for nav, buttons and card text but **never loads**; those elements render in the **OS system font stack**.
- The intake form uses **Helvetica Neue/Arial**.
- Exact computed sizes, weights and tracking: **`05-brand-reference.md §4`**.

## 8. Brand colours

Verified from the Elementor kit and computed styles:
- **Primary olive `#364230`**, **green `#1F470E`**, **gold `#CCA831`**, **cream `#F3EEE3`**.
- Supporting: sand `#F0E2C3`, khaki `#C5B98F`, pale gold `#FFF4CF`, border `#DAD1C0`.
- Text: `#232323`, `#54595F`, `#7A7A7A`.

Incidental colours (theme pink `#CC3366`, WhatsApp-plugin green `#2DB742`, intake-form slate greys) are not brand colours. Several pairings fail WCAG AA. Details and the kit-only colours: **`05 §3`**.

## 9. Navigation & interactive behaviour

5-item nav; hamburger at ≤ 1024 px; static (non-sticky) header; WhatsApp deep links on all CTAs; intake form with native validation that builds a WhatsApp message; floating WhatsApp popup; Google Maps embed; `fadeInUp` entrance animations; button hover is a scale-down only. **`06-functionality-and-dependencies.md`**.

## 10. Desktop / tablet / mobile observations

No horizontal overflow at any tested width. Problems:
- Tablet keeps cramped 3-column layouts.
- Mobile pages are very long (Home 18,420 px).
- The Studio gallery becomes 3,600 px of stacked images on mobile.
- The WhatsApp widget overlaps the footer legal line on mobile.
- The address appears twice back-to-back.

Details: **`07-responsive-observations.md`**.

## 11. Technical dependencies & integrations

- WhatsApp (`6281339749892`), Google Maps (embed + share link), Instagram, Facebook and TikTok links, and Google Fonts.
- Hostinger Reach loads with no visible feature. No analytics.
- **No backend is required for parity** in Phase 2.

## 12. Missing assets & inaccessible items

No vector logo; logo files are small rasters. No teacher, class-in-progress or real amenity photos. No favicon set. JT font licence unknown. Booking app (if any) unknown. Admin, drafts and submissions inaccessible.

## 13. Content inconsistencies & unresolved questions

The highest-priority items:
1. **Two different addresses.**
2. **Unexplained +34 number.**
3. **Sunday "Special Workshops" vs the scheduled Sunday classes.**
4. **No evening class time.**
5. **5-Class Pass "14 days … for 7 days".**
6. **Masterclass format, price and facilitator contradictory or missing.**
7. **Privacy policy contradicts real data collection.**
8. **Two logos and two taglines.**
9. **AI imagery vs real photos.**
10. Typos: "SECOURE", "In Hale", "WILDRNESS".

The full list with questions is in **`08-issues-gaps-questions.md`**.

## 14. Phase 2 considerations

Recorded in **`09-phase-2-recommendations.md`**:
- Next.js App Router (JS), GSAP/ScrollTrigger.
- **Exactly two font families.**
- Concise pages with no duplication; compact footer.
- Original assets preferred; no invented content.
- `images: { unoptimized: true }` merged into the existing config, with pre-generated responsive images.
- Proposed IA, components, WhatsApp/intake implementation notes, an asset plan, blocking decisions and an acceptance checklist.

## 15. Confirmations

- ✅ The **two-font rule** and all mandatory design, content, footer, image and performance requirements are documented for Phase 2 (`09 §2`).
- ✅ **No redesign or implementation** was performed: no components, pages, packages or configuration were created in the project.
- ✅ **No GitHub push** and **no deployment**. The workspace is not a git repository and was not initialised.
- ✅ No original asset was modified, deleted or overwritten. The originals were *copied* into `docs/source-audit/assets/original/`.
- ✅ The only files created are under `docs/source-audit/`. Temporary tooling (puppeteer-core, scripts, raw HTML/CSS) lives in a session scratch folder outside the project.
