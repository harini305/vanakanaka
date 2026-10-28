# 09 — Phase 2 Recommendations & Mandatory Requirements

Status: **Recommendations only.** Nothing here has been implemented. Phase 2 starts only after explicit approval.

---

## 1. Target stack (as specified)

- **Next.js (App Router)**, **JavaScript** (not TypeScript), **React**.
- **GSAP + ScrollTrigger** for motion, used purposefully and respecting `prefers-reduced-motion`.
- Fully responsive (verify at least 390 / 768 / 1024 / 1440, plus 320 and 1280 edge checks).
- Static content: no CMS or backend is needed for parity (see 06 §4). Store content as JS/JSON modules seeded from `content/structured-data.json`.

## 2. Mandatory design requirements (record of the brief)

### Typography
- **Exactly two font families across the entire website.**
  - One family for **headings**.
  - One family for **body text, navigation, buttons, forms, cards, footer text and every other interface element**.
- Both must be **readable, professional and not overly fancy**.
- **No third family** anywhere: not for decorative headings, special sections, the footer, the intake form, the 404 page or any single component.
- Hierarchy is created only with **weight, size, line-height and letter-spacing**.
- Consistent sizes for equivalent components across all routes; a **controlled, responsive type scale** (e.g. `clamp()`-based tokens).
- The final two fonts are **not chosen in this audit**. Options are documented in `05-brand-reference.md §4.4`. Load them with `next/font` (self-hosted, `display: swap`, only the weights used).

### Visual design
- Professional, human-designed appearance; intentional image and text alignment.
- Consistent content widths, margins and spacing (one container system and one spacing scale).
- **No** unnecessary decorative numbering, eyebrow text, random symbols, floating badges or ornamental elements. (The original uses an uppercase eyebrow above nearly every heading; Phase 2 should use them sparingly, if at all.)
- Avoid repetitive AI-looking layouts and generic template patterns.
- Visual effects only where they serve a clear purpose.

### Content
- Keep pages concise and focused; avoid repeated paragraphs, unnecessary sections and excessive length (see 03 §4, 08 §C).
- Preserve meaningful facts and essential information (prices, schedule, contact, intake form, SOP).
- **Do not invent** claims, testimonials, FAQs, prices, teacher names or blog posts.
- Unresolved factual conflicts (08 §A) remain as in the original, or are held for owner confirmation. They are never "fixed" by guesswork.

### Footer
- Compact and content-driven: only necessary, verified information (brand, nav, contact/WhatsApp, hours once confirmed, social, privacy, ©).
- No excessive padding, no unnecessary columns, no duplicated content (e.g. don't repeat the full address block directly after a contact section).
- The final content section must be **fully visible above the footer**, with a natural transition into it.
- Prevent overlap, clipping, excess blank space and fixed-footer interference. This includes ensuring any floating WhatsApp button never covers footer text (an issue on the original, 07 §2).

### Images & performance
- **Prefer the original assets already available** (`assets/original/`, mapped in `04-assets-manifest.csv`).
- Do not generate replacement imagery, introduce unrelated stock photos, or substitute new AI-generated visuals when suitable originals exist.
- Plan local resizing and compression: convert photographic PNGs (1.7–3.1 MB each) to WebP/AVIF at sensible widths (e.g. 640 / 1024 / 1600 / 2048); avoid duplicate copies.
- **Configure Next.js to avoid the default Vercel Image Optimization quota:** merge `images: { unoptimized: true }` into the **existing** `next.config` (do not replace unrelated settings).
- Because `unoptimized` disables on-the-fly resizing, **pre-generate** responsive variants at build or prep time and serve them with `srcSet`/`sizes` (or `<picture>`), explicit `width`/`height`, `loading="lazy"` below the fold, and priority/eager loading only for the hero.
- Do not change project configuration during the audit (respected: no config exists or was touched).

### Blog
- No real articles exist, so **do not create a blog** unless the owner supplies articles. If one is ever requested: simple, ≤ 10 images in the initial presentation.

## 3. Recommended information architecture

| Route | Keep slug | Proposed content (concise) |
|---|---|---|
| `/` | ✅ | Hero (name + one line + "View Classes" / "Book via WhatsApp") → short intro (brand line, once) → signature classes (2) → pricing summary (from IDR 160,000) + link → studio preview (real photos) → why us (once) → masterclass teaser (only if confirmed) → location strip + CTA |
| `/classes/` | ✅ | Signature classes + **full price list** (grouped: drop-ins / packages / private), one clear booking action per item with the product name in the WhatsApp message, shala-rental note once |
| `/schedule/` | ✅ | Weekly timetable (table on desktop; day selector/accordion or list on mobile), slot times, single CTA |
| `/the-studio/` | ✅ | Real-photo gallery with alt text, studio description (pending owner copy), amenities (pending), shala rental |
| `/contact/` | ✅ | WhatsApp CTA, numbers (tap-to-chat), address, hours, social, map (lazy), directions link |
| `/yoga-client-intake-form/` | ✅ | Branded, accessible, functional intake form (same fields, required rules and message template) + SOP (EN/ID) |
| `/privacy-policy/` | ✅ | Existing text, flagged for owner/legal update |
| `not-found` | — | Branded 404 with nav back |
| `/hello-world/`, `/category/uncategorized/` | ❌ | 301 → `/` (via `next.config` `redirects()` when configuration changes are approved in Phase 2) |

Header nav stays at five items (Home, Classes, Schedule, The Studio, Contact). Consider a persistent "Book" (WhatsApp) action in the header. The intake form should be reachable from Classes and Contact.

## 4. Component plan (shared)

Header (logo + 5 links + book action; accessible mobile menu) · Footer (compact) · PageIntro/banner (shorter than the original 450 px) · ClassCard · PriceList/PriceItem · ScheduleTable · Gallery · FeatureTrio (why us) · ContactBlock · MapEmbed (click/lazy load) · WhatsAppButton/link builder · IntakeForm (fieldset steps) · SOP accordion · Button (2–3 variants max).

## 5. Implementation details to carry over

- **WhatsApp:** number `6281339749892`; base pre-fill text in `content/structured-data.json`; build links with `https://wa.me/6281339749892?text=${encodeURIComponent(msg)}`. Add the product or class name per CTA (improves on the original's generic message).
- **Intake form:** reproduce fields and IDs, required rules, the conditional "If yes…" inputs and the exact message template (`06 §2 F6`); submit opens WhatsApp in a new tab. No storage unless separately scoped.
- **Map:** current embed query `Vana Kanaka Yoga Bali`; share link `http://share.google/0fXCV0wy8XQwIrgOY` (use https).
- **SEO:** keep or improve the existing titles and descriptions (`evidence/seo-metadata.json`); one H1 per page; real alt text; canonical URLs; add `YogaStudio`/`LocalBusiness` JSON-LD **only with confirmed address, hours and phone**; a proper OG image (1200×630) made from a real photo; `lang="en"`.
- **Brand tokens** (from 05): `#364230` olive, `#1F470E` green, `#CCA831` gold, `#F3EEE3` cream, `#C5B98F` khaki, `#DAD1C0` border, text `#232323` / `#54595F`. Check contrast: white on gold `#CCA831` is **2.28:1 (fails WCAG AA)**; olive `#364230` on gold is 4.66:1 (passes). Use olive text on gold, a darker gold, or gold as an accent only. Badges and grey body text also fail on the original (05 §3.6).
- **Motion:** replace Elementor fadeInUp with subtle GSAP reveals; avoid the scale-down hover; keep motion off for reduced-motion users.

## 6. Asset plan

1. **Logo:** request a vector logo and a decision on logo A vs B (08-A8). Until then, logo A (#12/#119/#121) is the cleaner mark but contains the "WILDRNESS" typo; logo B (#364) is the current header logo. Do not redraw or "fix" the logo without approval.
2. **Photography:** prioritise the 12 real venue photos (#165–#172, #433–#436). Use AI-named images only where no real alternative exists, and only after the owner confirms (08-E2). Do not use the Unsplash stock images.
3. **Amenity images:** the four AI product shots are generic; ask the owner for real prop photos, or present amenities as a text list.
4. **Processing:** keep `assets/original/` untouched. Write optimised derivatives to the Next.js `public/` tree in Phase 2 (WebP/AVIF, 2–4 widths, quality ~75), stripped of metadata.
5. **Favicon set:** generate from the approved vector logo (SVG + 32/180/192/512 PNG).

## 7. Open decisions needed before or early in Phase 2

See `08-issues-gaps-questions.md` §A (A1–A18) and §E2. The most blocking items are:
1. Correct address (A1) and public phone numbers (A2).
2. Opening hours, evening slot time and Sunday (A3, A4).
3. Pass validity wording (A5).
4. Masterclass: keep, change or remove (A6).
5. Logo/tagline choice and a vector file (A8).
6. Permission to use real photos instead of AI images (E2).
7. Privacy policy update (A7).

## 8. Acceptance checklist for Phase 2 (suggested)

- [ ] Exactly 2 font families loaded and used (check computed styles on every route).
- [ ] All verified facts (prices, schedule, contact) match `content/structured-data.json` or the owner's written corrections.
- [ ] No invented testimonials, FAQs, prices, teachers or posts.
- [ ] Each content block appears once; no duplicated sections.
- [ ] One H1 per page; all images have meaningful alt text.
- [ ] Intake form validates and opens WhatsApp with the full formatted message.
- [ ] `images.unoptimized: true` merged into the existing Next config; responsive pre-sized images; hero eager, others lazy.
- [ ] No horizontal overflow at 320–1440; footer fully visible and not overlapped by any floating button.
- [ ] Lighthouse/axe pass on key pages; colour contrast AA.
- [ ] No push or deploy without explicit approval.
