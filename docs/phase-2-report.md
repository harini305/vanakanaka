# Phase 2 Report: Vana Kanaka Yoga Bali single-page rebuild

Built 2026-10-28. Frontend only: Next.js 16.4.3 (App Router, JavaScript), React 19.3.1, GSAP 3.15.0 + ScrollTrigger, CSS Modules. No backend, database, booking engine, payments, TypeScript, Tailwind or extra animation libraries. Nothing was committed, pushed or deployed.

## Run it

```
npm install
npm run build
npm start          # or: npm run dev
```

## Page structure (`/`): revision 3, immersive photo-led

Art direction: "The place carries it" (tasteskill draw, seed 1635957212, `--keep palette,type`). The Classes blueprint was redrawn to "Two objects, two fields" because the dealt one (one photo at three zoom levels) could not hold two classes. The Studio pin was dropped because pinned text crossing photos read as a collision.

Idea: the shala itself (its carved sign, open pavilion and rooftop lawn in Desa Kutuh) is the frame the page is built from. Live element: **"Now in Kutuh"** shows the current time in Bali (WITA) and the class on now or next, computed from the published schedule. The schedule also opens on today's day.

| # | Section (`id`) | Layout |
|---|---|---|
| 1 | Hero (`top`) | One full-bleed shala photo (landscape crop on desktop, portrait on phones); the H1 "Vana Kanaka / Yoga Bali" in two stepped lines along the bottom edge; one sentence and "Explore classes" |
| 2 | About (`about`) | "Why Vana Kanaka?" + lead; wide lawn photo with the "why" paragraph set into its corner; green live tile ("Now in Kutuh"); class-time facts |
| 3 | Classes (`classes`) | Two full-height fields side by side (olive / sand), each led by its own photo, with name, tagline, one sentence, fact line and a booking action |
| 4 | Schedule (`schedule`) | Green chapter: heading, sign photo on the left, timetable pushed right; a day picker shows one day (today in Bali by default); all 7 days without JS |
| 5 | Pricing (`pricing`) | Menu-style: heading, pool photo and booking button on the left; drop-ins, packages, private sessions and the masterclass ("Ask") in two columns; no leaders or lines |
| 6 | Studio (`studio`) | Three full-screen photographs in sequence (lawn, pool, bougainvillea), each with one caption: facilities, the garden, shala rental |
| 7 | First visit (`intake`) | A sideways row of seven steps (booking, intake, payment, arrival, shoes and phone, telling your teacher, cancelling), each with a close-up detail crop of a real photo; then the intake form bar |
| 8 | Contact (`contact`) | Full-screen shala photo carrying one solid "Visit the shala" card: area, class times, Google Maps, Book on WhatsApp |
| 9 | Footer | Green field: notes and social links, the WhatsApp number as the large closing line, section links, Privacy Policy, © |

Other routes: `/privacy-policy` (see below) and a branded 404. Old WordPress URLs redirect (308) to their sections: `/classes`, `/schedule`, `/the-studio`, `/contact`, `/yoga-client-intake-form`; `/hello-world` and `/category/*` go to `/`.

House rules applied in this revision: no eyebrow labels, no uppercase tracked labels, no hairline rules (form fields excepted), no styled accent words in headings, square-cornered buttons and photos (the arch frames were removed), gradients only as neutral scrims under text on photos, five-to-seven type sizes (14 / 17 / 21 / 35 / 74 / 158 px, plus the 128px phone line), and much less text: the booking terms became the first-visit steps, and the masterclass became one menu item.

Inspector (`inspect.mjs`, 1440 / 768 / 390): **0 FAIL, 3 WARN**. The warnings are defended:
- **Yellow-cream background:** #F3EEE3 is the verified brand cream.
- **No video:** no clip of this shala exists, and stock footage would not be honest.
- **Sideways row:** the first-visit steps are a deliberate drag row, with arrows and a progress bar.

Lint: 0 FAIL, 0 WARN. Each remaining flagged pattern carries a `taste-skill-ignore` note: the floating button's shadow, the photo scrims, the emoji in the studio's own WhatsApp message, and the form-field borders.

## Design system

- **Fonts (exactly two):** Cormorant Garamond 500/600 (+ italic for class taglines) for headings and display lines; DM Sans 400/500/600 for everything else, including nav, buttons and form controls (`font: inherit`). Self-hosted with `next/font`. The "JT" font isn't referenced anywhere. Verified in the browser: only these two families are computed on text.
- **Palette:** olive `#364230`, green `#1F470E`, gold `#CCA831` (accent only, always with dark green text), cream `#F3EEE3`, plus tone steps `#E9E1CF` and sand `#F0E2C3`. Surfaces are separated by tone, never by lines.
- **Layout tokens** in `app/globals.css`: margins, content width, section spacing scaled by viewport height, a five-step type scale plus display, and `--screen` (one viewport below the header).
- **Motion:**
  - Signature: the hero name rises line by line from behind its own baseline.
  - The hero photo settles from a slight zoom.
  - Each section's parts enter once (IntersectionObserver plus GSAP), and images open with a clip-path reveal.
  - The studio photos ease out of a zoom as they scroll by.
  - Only transform, opacity and clip-path are animated. With `prefers-reduced-motion: reduce` nothing is hidden or moved, and a CSS fallback reveals everything after 2.5 s if the script never starts.

## Original assets used (all 12 real photos + 1 logo file)

All are real venue photos from `docs/source-audit/assets/original/`, cropped and converted to WebP in `public/images/`. The originals weren't modified. Full-screen images have separate landscape (desktop) and portrait (phone) crops.

| Use | Original (#ID) |
|---|---|
| Hero (desktop / phone) | #166 (`2026/05/…8.42.10-pm-2.jpeg`) / #434 (`2026/07/…2.22.35-pm-2.jpeg`) |
| About | #169 (`…8.42.09-pm-1.jpeg`) |
| Kanaka Power / Vana Zen | #168 (`…8.42.10-pm.jpeg`) / #435 (`2026/07/…2.22.35-pm-1.jpeg`) |
| Schedule | #170 (`…8.42.09-pm.jpeg`) |
| Pricing | #433 (`2026/07/…2.22.35-pm-3.jpeg`) |
| Studio (three full-screen frames) | #171 (`…8.42.03-pm-1.jpeg`, also the OG image), #172 (`…8.42.03-pm.jpeg`), #165 (`…8.42.10-pm-3.jpeg`) |
| Contact | #167 (`…8.42.10-pm-1.jpeg`) |
| First-visit close-ups (detail crops) | lantern from #434, pool steps from #433, floor tiles from #167, statue from #170, balustrade from #168, gazebo roof from #169, bougainvillea from #165 |
| Brand mark | Logo A icon only (#119): cream background made transparent, artwork unchanged. Also used for the favicon and apple-touch icon |

A close-up of the physical sign was deliberately not used as a detail crop, because it shows one of the two disputed taglines large.

No ChatGPT-named images and no Unsplash images are used. **Logo:** the tree/plumeria/diamond mark appears in both logo systems, so it is shown without either tagline next to a text wordmark. No tagline appears anywhere on the site.

## Fixes against the audit

- Explore Classes now scrolls to `#classes` and the heading lands fully below the sticky header.
- Removed duplicates: Why Vana Kanaka ×1, hero sentence ×1, shala rental ×1 (it was in 9 cards), and one CTA set per item instead of 18 generic buttons.
- Exactly one H1, with h2 → h3 → h4 in order. All content images have descriptive alt text; the logo mark next to the wordmark has `alt=""`.
- No white-on-gold anywhere. Every text pair used is ≥ 4.5:1 (body 5.5–6.1:1, gold/green 4.69:1).
- The floating WhatsApp button (phones only) appears after the hero and hides whenever the footer is on screen. The test confirmed it never overlaps the footer at any width.
- Corrected the typos "SECOURE" and "In Hale"; neither the "WILDRNESS" artwork nor the text appears.
- Navigation: a sticky header plus `scroll-padding-top`. Direct `/#section` links and refreshes jump straight to the section once fonts are ready (smooth scrolling is only enabled after that). The active link uses `aria-current`. The mobile menu has `aria-expanded`, closes on link selection and on Escape (focus returns to the toggle), locks page scroll and has a scrim.
- `next.config.mjs`: `images: { unoptimized: true }`, alongside `reactStrictMode` and the redirects.

## Content decisions on unresolved facts

| Issue | What the site does |
|---|---|
| Two street addresses (A1) | Neither street address is shown. Only "Desa Kutuh, Kuta Selatan, Bali", which both agree on, plus the Google Maps share link |
| +34 number (A2) | Not shown |
| Sunday workshops vs schedule (A3) | Sunday classes shown as scheduled, with a neutral note that Sunday has also been listed for special workshops |
| Evening times / opening hours (A4) | Evening column reads "Time to be confirmed". The Mon–Sat 07:00–20:00 opening hours are omitted |
| 5-Class Pass validity (A5) | Price kept, validity claim removed, "please confirm the validity period with the studio" |
| Masterclass (A6, A13) | One item in the price menu: title, subtitle, "Format, dates and price on request", and an "Ask" link to WhatsApp. Duration, format, price, health claims and the "95%" quote are omitted |
| Privacy policy (A7) | The original policy isn't republished. `/privacy-policy` says the policy is under review and states only verifiable facts about this build (no accounts, no analytics, intake answers stay in the browser) |
| Intake form | Native validation and the original field set. "Review my answers" shows a summary with print / save as PDF, copy and edit. **Nothing is transmitted** (verified: zero external requests during fill and review). The "strictly confidential" line was dropped |
| "Most popular" badge | Dropped (unverifiable marketing claim) |
| Booking app (A10) | The SOP's "official application" isn't mentioned; terms reference WhatsApp only |

## Verification performed (headless Chrome via puppeteer-core, not real devices)

At 1440, 1024, 768, 390 and 320 px against the production build (`next build` + `next start`):

- No horizontal overflow and no element outside the viewport.
- Exactly two computed font families; one H1; all 8 images load and keep their aspect ratios.
- All 7 nav links scroll so the section starts at the header's bottom edge, with the heading visible, the correct `aria-current` and the mobile menu closed.
- Deep links and reloads (`/#pricing`, `/#studio`, `/#intake`, `/#about`) land at the header's bottom edge at 390 and 1440. No layout shift after load.
- Floating button: visible mid-page, hidden over the footer.
- Zero console errors and zero failed requests.
- Reduced motion: no hidden elements and no smooth scrolling. JS disabled: all content visible and all 7 schedule days shown.
- Redirects return 308 to the correct anchors; `/privacy-policy` returns 200; unknown routes return 404.
- `npm run build` completes with no errors or warnings.

Not tested: real iOS/Android devices, Safari/Firefox, screen readers, landscape orientation, and actual WhatsApp delivery (the links were inspected but not opened).

## Open questions for the owner

1. Which address is the studio: Jalan Griya Sari Permata I or Jl. Mundeh 1? Postcode?
2. What is the +34 699 849 483 number for, and should it be public?
3. What actually runs on Sunday: scheduled classes or special workshops?
4. Evening session times? Do the Mon–Sat 07:00–20:00 hours apply?
5. Is the 5-Class Pass valid for 7 or 14 days? Do class packs include evening rituals?
6. Masterclass: is it currently offered? Format (2 h, 4 weeks, self-paced?), price, dates, facilitator? Keep the health and "95%" claims?
7. Which logo and tagline are official? Is a vector logo available (and corrected "Wilderness" artwork)?
8. Updated privacy policy text, especially given the intake form collects health data. How should clients submit the intake form (WhatsApp, on arrival, a future secure form)?
9. Is there a booking app (the SOP mentions an "official application")?
10. Penalty amount for late cancellation on unlimited passes?
11. Shala rental rates and terms? Real amenity list (is the pool for clients)?
12. Instructor names and bios, if they should appear?
13. Keep the approximate USD amounts?
14. Permission confirmed to use the real WhatsApp-exported photos? Higher-resolution originals or more photos (classes in progress, teachers)?
