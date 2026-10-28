# 06 — Functionality & Technical Dependencies

Captured 2026-10-28 with headless Chrome (puppeteer-core) plus raw HTML/REST inspection.

**Status key:** **Observed**: visible on the site. **Interaction tested**: the UI interaction was performed. **Functionality verified**: the intended behaviour was confirmed. **Partially verified**: some behaviour was confirmed, but important details are unknown. **Unverified**: the behaviour or backend could not be confirmed.

---

## 1. Platform & stack (verified from page source)

| Layer | Detail |
|---|---|
| CMS | WordPress **7.0.7** (`meta generator`) |
| Theme | **Hello Elementor 3.4.7** (minimal theme; header and footer are Elementor templates) |
| Page builder | **Elementor 4.3.5** (containers, `e_font_icon_svg`, `additional_custom_breakpoints`, CSS printed to external files, Google Fonts enabled, `font-display: swap`) |
| Pro widgets | **Pro Elements** (GPL fork of Elementor Pro): nav-menu widget, header/footer templates |
| SEO | **Yoast SEO**: titles, meta descriptions, canonical, OG/Twitter tags, JSON-LD (`WebPage`, `WebSite`, `Organization`, `BreadcrumbList`), `sitemap_index.xml` |
| WhatsApp | **WP WhatsApp** (NinjaTeam `wp-whatsapp`): floating chat button and popup |
| Hostinger | **Hostinger Reach** plugin: loads `cdn-reach.hostinger.com` embed JS and a subscription-block CSS on every page. **No subscription form is visible on any page.** |
| Hosting | Hostinger (inferred from the Reach plugin and CDN). WordPress locale strings are partly Indonesian ("Arsip", "Laman tidak ditemukan", breadcrumb "Beranda"), while `<html lang="en-US">`. |
| Templates | Header = Elementor template **30**; footer = template **48**; the offerings/pricing block = shared template **415**, embedded in Home and Classes; global kit = post **5** |
| Breakpoints | Mobile ≤ 767 px, tablet ≤ 1024 px; content container max-width 1140 px |
| Analytics / tracking | None found (no GA, GTM, Meta Pixel; the WhatsApp plugin's GA/FB options are OFF) |

## 2. Feature inventory

| # | Feature | Where | Status | Behaviour / destination | Phase 2 consideration |
|---|---|---|---|---|---|
| F1 | **Primary navigation** (5 items) | Global header | **Functionality verified** | Home, Classes, Schedule, The Studio, Contact → internal routes, all 200 | Keep the 5 routes. No dropdowns exist. |
| F2 | **Mobile/tablet hamburger menu** | Header ≤1024 px | **Functionality verified** (tablet 768, mobile 390) | Toggle opens a full-width dropdown panel under the header with 5 centred uppercase links; the active item is highlighted in dark green; the icon turns into ✕ | Rebuild accessibly (aria-expanded, focus trap/escape, scroll lock) |
| F3 | Header behaviour on scroll | All pages | **Functionality verified** | **Not sticky.** Header is `position: static` and scrolls away. | Decide in Phase 2 whether a compact sticky header helps (long Home page) |
| F4 | **"Book via WhatsApp" CTAs** (9 cards on Home and Classes; masterclass CTA) | Offerings/pricing, masterclass | **Functionality verified** (link target inspected) | `http://api.whatsapp.com/send?phone=6281339749892&text=…` with a generic pre-filled enquiry (decoded in `content/structured-data.json`). **The same generic text is used on every card**, so the studio cannot tell which pass the client wants. | Keep WhatsApp as the booking channel; pass the product name in the pre-fill text; use `https://wa.me/` |
| F5 | **"Fill out the form" CTAs** (9 cards) | Offerings/pricing | **Functionality verified** | Links to `/yoga-client-intake-form/` | Keep |
| F6 | **Yoga Client Intake Form** (custom HTML + inline JS, form `#yogaIntakeForm`) | `/yoga-client-intake-form/` | **Functionality verified** (empty and filled submit tested with `window.open` stubbed; **no message was actually sent**) | 39 inputs: 6 text/date/tel/email fields (all `required`), 6 required radio groups, 2 checkbox groups (goals, conditions), 8 optional free-text fields, typed-name signature and "Booking Date" (both required). Native HTML5 validation blocks an empty submit ("Please fill out this field."). On valid submit, JS assembles a formatted WhatsApp message (sections 1–5) and opens `https://api.whatsapp.com/send?phone=6281339749892&text=…` in a new tab. **No data is stored server-side; no email is sent; no backend.** | Can be reproduced fully client-side. Re-style to brand. Keep field set and wording. Flag sensitive health data going via WhatsApp (see 08). |
| F7 | **Floating WhatsApp widget** ("Need Help? Chat with us") | All pages, fixed bottom-right (30 px offsets) | **Functionality verified** | Click opens a popup: "Start a Conversation / Hi! Click one of our member below to chat on WhatsApp / The team typically replies in a few minutes." with one account, "Vana Kanaka (admin)", linking to `https://api.whatsapp.com/send?phone=6281339749892`. Always shown as available. | Replace with a light custom button. Fix overlap with footer text on mobile. |
| F8 | "Explore Classes" hero button | Home hero | **Interaction tested → broken** | `href="#classes"`, but no element has `id="classes"`; page stays at scrollY 0 | Link to `/classes/` or a real anchor |
| F9 | Other internal CTAs ("View Schedule", "Explore the Studio", "More") | Home | **Functionality verified** | → `/schedule/`, `/the-studio/`, `/the-studio/` | Keep |
| F10 | **Google Maps embed** | Home, The Studio, Contact ("Find Us in Kutuh") | **Functionality verified** (renders on Contact; Home's iframe was still blank at screenshot time, a lazy-load timing issue) | `maps.google.com/maps?q=Vana Kanaka Yoga Bali&…&output=embed`, query by name, not coordinates. Pin shows "Vana kanaka yoga Bali" near Jl. Nusa Dua / Bukit Pandawa. Loads maps.googleapis, gstatic, places API. | Keep, lazy/click-to-load. Consider an explicit place-ID or coordinates once the address is confirmed. |
| F11 | Footer address and hours links | Footer | **Functionality verified** | Address, "Mon – Sat…" and "Sun…" all link to `http://share.google/0fXCV0wy8XQwIrgOY` → 302 to Google (place share). Opens in the same tab. | Keep a "Get directions" link; don't link the opening hours |
| F12 | Social links | Footer icons | **Observed** (hrefs verified; external pages not loaded) | Instagram `vanakanakayogabali`, Facebook share link `facebook.com/share/18rVz1HkzC/`, TikTok `@vana.kanaka.bali`; `target=_blank`, `http://` scheme, no `aria-label` (screen-reader text is present) | Keep, use https, add rel/labels |
| F13 | Contact-band phone numbers | Home, Studio, Contact | **Observed** | "+62 813 3974 9892" and "+34 699 849 483" are **plain text, not links** | Make the confirmed number(s) tap-to-WhatsApp / tap-to-call |
| F14 | Entrance animations | Home, Classes, Studio, Contact | **Observed** | Elementor `fadeInUp` on section blocks; button `shrink` hover (scale 0.9) | Re-implement selectively with GSAP/ScrollTrigger and respect `prefers-reduced-motion` |
| F15 | Studio image grid | `/the-studio/` | **Observed** | 12 tiles built from containers with **CSS background images** (lazy-loaded by Elementor). No lightbox, no captions, no alt text. | Rebuild as a real `<img>` gallery with alt text; optional lightbox |
| F16 | WordPress comments | `/hello-world/` | **Observed (not submitted)** | Comment form is live (`wp-comments-post.php`), and the default "A WordPress Commenter" comment is public via `/wp-json/wp/v2/comments`. This contradicts the privacy policy ("Comments are disabled"). | Not to be rebuilt |
| F17 | Site search | `/?s=` | **Observed** (returns 200; no search UI anywhere) | WordPress default | Not needed |
| F18 | RSS feeds | `/feed/`, `/comments/feed/` | **Observed** (200) | Default WP | Not needed |
| F19 | Booking system / payments / e-commerce / accounts / login (public) | — | **Not present** | No booking engine, no payment provider, no cart, no member area. Booking is entirely manual via WhatsApp. The SOP mentions an "official application/WhatsApp" for booking; **no app is linked anywhere** (unverified). | Phase 2 must not imply online booking or payment |
| F20 | Newsletter / email capture | — | **Unverified** | Hostinger Reach assets load, but no visible form exists | Confirm with the owner whether a newsletter is wanted |
| F21 | Language / translation | — | **Observed** | No language switcher. The intake SOP is bilingual EN/ID inline. | Keep the bilingual SOP text as provided |
| F22 | Testimonials / reviews widgets | — | **Not present** | No reviews anywhere on the site | Do not invent any |
| F23 | Video | — | **Not present** | No video or video embeds | — |
| F24 | Downloads (PDF / brochure) | — | **Not present** | — | — |
| F25 | 404 page | any unknown URL | **Functionality verified** | Default Hello theme: "It looks like nothing was found at this location." with header and footer; title "Laman tidak ditemukan" (Indonesian) | Build a branded 404 |

## 3. External services & destinations

| Service | Endpoint(s) | Needed in Phase 2? |
|---|---|---|
| WhatsApp | `api.whatsapp.com/send?phone=6281339749892` (+ pre-filled text) | **Yes**: primary booking and enquiry channel |
| Google Maps | `maps.google.com/maps?...output=embed`; `share.google/0fXCV0wy8XQwIrgOY` | **Yes** |
| Google Fonts | fonts.googleapis.com / fonts.gstatic.com | Phase 2 should self-host the two chosen fonts via `next/font` |
| Instagram / Facebook / TikTok | profile URLs above | **Yes** (links only) |
| Hostinger Reach CDN | cdn-reach.hostinger.com | Not needed unless a newsletter is confirmed |
| WordPress REST/feeds | /wp-json, /feed | No (the rebuild is a static Next.js frontend) |

## 4. Implementation notes for Phase 2

1. **No backend is required** to reach parity: every conversion action ends in a WhatsApp deep link.
2. The intake form logic (field list, required rules, message template) is fully documented in `content/yoga-client-intake-form.md` and the extracted script behaviour above. It can be ported 1:1 to a React client component.
3. If the business later wants form submissions **stored** (e.g. for waivers), that becomes a new backend dependency (email service, database) and must be scoped separately. Do not imply storage that doesn't exist.
4. Keep the existing slugs (`/classes/`, `/schedule/`, `/the-studio/`, `/contact/`, `/privacy-policy/`, `/yoga-client-intake-form/`) to preserve indexed URLs, or 301-redirect deliberately.
5. Deep-link pre-fill text should be URL-encoded with `encodeURIComponent`. Prefer `https://wa.me/6281339749892?text=` (shorter; works on desktop and mobile).
