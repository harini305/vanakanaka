# 02 — Page & Route Inventory

Captured 2026-10-28. Sources: header/footer navigation, internal links, `sitemap_index.xml` (Yoast), `robots.txt`, WP REST API (`/wp-json/wp/v2/pages|posts|categories|tags|media`), and route probing.
Shared components (header, footer, WhatsApp widget) are described once in §3 and apply to every page unless noted. Colours and typography are in `05-brand-reference.md`, responsive detail in `07`, and verbatim text in `content/`.

---

## 1. Route table

| Route | WP ID / type | Status | Classification | In nav? | Last modified | Recommendation for Phase 2 |
|---|---|---|---|---|---|---|
| `/` | page 11 "Home" | 200 ✅ | Main nav | Header + footer | 2026-07-09 | **Implement** (concise rebuild) |
| `/classes/` | page 14 | 200 ✅ | Main nav (listing + pricing) | Header + footer | 2026-07-09 | **Implement** (full classes + pricing) |
| `/schedule/` | page 16 | 200 ✅ | Main nav | Header + footer | 2026-05-27 | **Implement** |
| `/the-studio/` | page 18 | 200 ✅ | Main nav | Header + footer | 2026-07-09 | **Implement** |
| `/contact/` | page 20 | 200 ✅ | Contact | Header + footer | 2026-05-19 | **Implement** |
| `/yoga-client-intake-form/` | page 396 | 200 ✅ | Enquiry / booking form | No (linked from 18 pricing CTAs) | 2026-07-09 | **Implement** (functional client-side form) |
| `/privacy-policy/` | page 3 | 200 ✅ | Utility / legal | Footer bottom bar | 2026-05-17 | **Implement** (content pending owner update, see 08-A7) |
| `/hello-world/` | post 1 | 200 ⚠ | Blog post: WordPress default placeholder | No | 2026-05-17 | **Do not implement.** Legacy placeholder; 301 → `/` or let 404 |
| `/category/uncategorized/` | category archive | 200 ⚠ | Archive (only lists "Hello world!") | No | — | **Do not implement.** Legacy; 301 → `/` |
| `/yoga/` | — | 301 → `/yoga-client-intake-form/` | WordPress slug-guess redirect | No | — | Optional redirect; not needed |
| `/feed/`, `/comments/feed/` | WP feeds | 200 | Utility | No | — | Not needed |
| `/?s=…` | WP search | 200 | Utility (no UI) | No | — | Not needed |
| `/?author=1` | — | 301 → `/` | — | — | — | — |
| `/wp-login.php` | — | 200 | Admin (not for rebuild) | — | — | Out of scope |
| any unknown URL | — | 404 (theme default) | Utility | — | — | **Implement** branded 404 |
| `/blog/ /about/ /retreats/ /teacher-training/ /shop/ /cart/ /checkout/ /my-account/ /events/ /gallery/ /faq/ /pricing/ /sample-page/` | — | 404 (probed) | Not present | — | — | Do not create unless requested |

**Blog / editorial:** the site has **no real articles**. The only post is the default WordPress "Hello world!". Per instructions, no blog posts should be invented. A blog route is **not recommended** for Phase 2 unless the owner provides articles (if ever added: ≤ 10 images on the initial presentation).

**Hidden/unpublished pages:** none discoverable publicly (the REST API exposes only published content). Elementor templates 30 (header), 48 (footer) and 415 (offerings/pricing block) exist as library items, not routes.

## 2. Page-by-page inventory

### 2.1 Home: `/`
- **Purpose:** brand introduction, offerings and prices, masterclass promotion, studio preview, location.
- **SEO:** title "Vana Kanaka Yoga Bali | Yoga Studio, Kuta Selatan, Badung"; description "Experience a sacred yoga sanctuary in Kuta, Bali. Join Vana Kanaka Yoga for Vinyasa, Yin, and mindfulness classes designed for all levels."; canonical `/`; og:image = logo A (#12); 2 × H1.
- **Sections in original order** (desktop heights):

| # | Section | Content summary | Assets | Interactive |
|---|---|---|---|---|
| 1 | Hero (855 px) | Eyebrow "Sacred Wilderness · Bali", H1 "Vana Kanaka", subtitle "The Liquid Gold of the Gods.", 1 sentence | BG #156 (AI) + dark overlay | "Explore Classes" (**broken** `#classes`), "View Schedule" → /schedule/ |
| 2 | Our Philosophy (540) | Title "The Liquid Gold of the Gods" + the hero sentence again | #160 (top-arch), #159 (bottom-arch) | "Explore the Studio" → /the-studio/ |
| 3 | Our Offerings → Signature experiences (template 415) | Kanaka Power, Vana Zen cards (tagline, description, intensity, focus) | #160, #158 | Book via WhatsApp / Fill out the form ×2 |
| 3b | Price List: Single Passes & Drop-ins | Single Class IDR 160k; Sound Healing IDR 200k ("Evening Ritual" badge) | — | CTA pair ×2 |
| 3c | Class Packages | 3-Class 450k; 5-Class 700k ("Most Popular"); Unlimited Weekly 1.1M | — | CTA pair ×3 |
| 3d | Private Sessions | 1-on-1 Yoga/Yoga Therapy 950k; Private Group (≤4) 1.5M | — | CTA pair ×2 |
| 4 | Masterclass: Quantum NLP & Hypnotherapy (921) | Intro ×2, "Power of the Triad", 3 icon cards | Icons | — |
| 5 | Quote band (242) | "The subconscious mind runs 95%…" | — | — |
| 6 | What You Will Experience / Who This Class Is For (996) | 4 bullet points; audience; Duration / Format | Clock and meditation icons | "Secoure your spot now" → WhatsApp |
| 7 | Why Choose Us: Why Vana Kanaka? (537) | Sacred Space / Expert Guidance / Inclusive Community | Outline icons | — |
| 8 | The Studio: Vana Kanaka Yoga Studio Bali (543) | 4-image strip | #158, #160, #159, #342 | "More" → /the-studio/ |
| 9 | Wellness in Every Detail: Studio Amenities (535) | Hero sentence again + 4 images | #303, #309, #304, #305 (AI product shots) | — |
| 10 | Why Vana Kanaka? (**duplicate of #7**) | identical | — | — |
| 11 | Get in Touch: Find Us in Kutuh (760, dark green) | Address, 2 WhatsApp numbers, 3 social handles | Map iframe | — |

- **Retain:** brand line, signature classes, full price list (or summary + link), masterclass (pending 08-A6), why-us (once), studio preview, contact.
- **Redesign notes:** remove duplicates (C1–C6), fix anchor, reduce to about 6 sections, replace AI imagery where real photos exist.

### 2.2 Classes: `/classes/`
- **Purpose:** class types and full price list. **SEO:** title "Yoga Classes Bali | Vinyasa & Yin Yoga di Kutuh"; description "Explore yoga classes at Vana Kanaka Bali. From energizing Vinyasa to relaxing Yin Yoga, suitable for all levels."; **no H1**.
- **Sections:** (1) Banner "CLASSES" (450 px, BG #193); (2) template 415, identical to Home §3–3d.
- **Gap:** the 20+ class styles on the Schedule (Ashtanga, Hatha, Nidra, Trataka, etc.) are **not described here**; only the 2 signature classes are. Masterclass absent.
- **Retain:** everything (canonical home for pricing). **Recommend:** this page owns the full pricing; consider linking each schedule class name to a short description only if the owner supplies copy.

### 2.3 Schedule: `/schedule/`
- **Purpose:** weekly timetable. **SEO:** title "Yoga Class Schedule Bali | Vana Kanaka Kutuh"; description "Check our updated yoga class schedule in Kutuh, Bali. Find the perfect time for your practice."; no H1.
- **Sections:** (1) Banner "SCHEDULE" (#193); (2) eyebrow "Weekly Yoga Schedule", title "Daily Practice Journey", intro, time legend (Morning 07:00–08:30, Afternoon 16:30–17:45, Evening: no time), 7 day blocks × 3 slots.
- **Interactive:** none (no booking per class, no filters).
- **Risks:** missing evening time; Sunday conflict with footer (08-A3/A4).
- **Recommend:** a real responsive timetable (table on desktop; day tabs/accordion or a stacked list on mobile) with one WhatsApp booking CTA.

### 2.4 The Studio: `/the-studio/`
- **Purpose:** venue showcase. **SEO:** title "Yoga Studio di Kutuh Bali | Vana Kanaka Sanctuary"; description "Discover our serene yoga studio in Kutuh, Bali. A sacred space designed for relaxation, healing, and transformation."; og:image #303 (yoga-mat AI image); no H1.
- **Sections:** (1) Banner "VANA KANAKA YOGA STUDIO" (#193); (2) **12-tile image grid** (CSS backgrounds): #158, #160, #159, #157, #343, #342, #172, #115, #433, #434, #435, #436 (DOM order, verified against screenshot; 4 per row; **7 AI-named + 5 real photos**, see 04); (3) Studio Amenities (same text as Home + 4 AI product images); (4) Find Us in Kutuh.
- **No descriptive copy** about the space (size, capacity, features, pool, shala rental).
- **Recommend:** real-photo gallery with alt text; short factual description once supplied; shala-rental info here (08-A9).

### 2.5 Contact: `/contact/`
- **Purpose:** location and contact. **SEO:** title "Contact Vana Kanaka Yoga Bali | Book & Location"; description "Contact Vana Kanaka Yoga Bali for bookings, location, and inquiries. Located in Kutuh, Kuta Selatan."; no H1.
- **Sections:** (1) Banner "CONTACT US" (#193); (2) Find Us in Kutuh (address, numbers, socials) + Google Map.
- **No contact form, no email, no opening hours on the page itself** (hours only in the footer).
- **Recommend:** clear WhatsApp CTA, tap-to-chat numbers, hours, directions link, map.

### 2.6 Yoga Client Intake Form: `/yoga-client-intake-form/`
- **Purpose:** pre-class registration and health screening + liability waiver, then send via WhatsApp. **SEO:** title "YOGA CLIENT INTAKE FORM - Vana Kanaka Yoga Bali"; **no meta description**; no H1.
- **Sections:** (1) Form card: intro; 1 Personal Information; 2 Yoga & Fitness Experience; 3 Health & Medical History; 4 Preferences & Comfort; 5 Liability Waiver & Agreement; "Submit via WhatsApp". (2) "Studio Guidelines & Client SOP" (bilingual EN/ID): 1 Booking & Payment; 2 Arrival & Etiquette; 3 In-Class Code of Conduct; 4 Cancellation & No-Show; 5 Safety & Valuables; closing thank-you (EN + ID).
- **Styling:** off-brand custom HTML (Helvetica, slate palette).
- **Retain:** all fields, required rules, waiver wording, SOP text verbatim (legal/operational content). **Recommend:** brand styling, grouped steps, accessible labels/fieldsets, a consent checkbox, and the SOP as collapsible sections (still fully visible/printable).

### 2.7 Privacy Policy: `/privacy-policy/`
- **Purpose:** legal. **SEO:** title "Privacy Policy - Vana Kanaka Yoga Bali"; no meta description; theme-default styling.
- **Sections:** 11 short headed blocks (Who we are … Contact).
- **Risk:** content conflicts with the site's real data collection and has a different address (08-A1, A7). **Recommend:** implement as a simple legal page and **flag for owner/legal review**. Do not rewrite the legal meaning without approval.

### 2.8 Hello world!: `/hello-world/` (legacy)
- Default WordPress post + default comment + live comment form. **Do not rebuild**; redirect.

### 2.9 Category "Uncategorized": `/category/uncategorized/` (legacy)
- Lists the one default post. **Do not rebuild**; redirect.

### 2.10 404
- Theme default text "It looks like nothing was found at this location."; Indonesian title. **Rebuild branded.**

## 3. Shared components

| Component | Source | Contents | Notes |
|---|---|---|---|
| **Header** | Elementor template 30 | Logo B circle (#364) + "VANA KANAKA" (h6); nav Home · Classes · Schedule · The Studio · Contact; hamburger ≤1024 px | Not sticky; no CTA button in header |
| **Footer** | Elementor template 48 | "VANA KANAKA" + tagline "Sacred Indulgence \| In Hale Serenity of Wellness, Rejuvenate"; social icons IG/FB/TikTok; Quick Links (5); Get in Touch: address, "Mon – Sat: 07:00 AM – 08:00 PM", "Sun: Special Workshops" (all linked to the Google share link); bottom bar "© 2026 Vana Kanaka Yoga Bali. All rights reserved." + "Privacy Policy" | Cream background; 391 px desktop / 782 px mobile |
| **Inner-page banner** | per page | 450 px photo (#193) + overlay + centred uppercase H2 title | Used on Classes, Schedule, Studio, Contact |
| **Offerings & pricing block** | template 415 | Signature classes + 9 pricing cards | Shared by Home and Classes |
| **Find Us in Kutuh band** | repeated per page | Address / WhatsApp / Social + map | Home, Studio, Contact |
| **Why Vana Kanaka?** | Home (×2) | 3 icon features | — |
| **Studio Amenities** | Home, Studio | Text + 4 images | — |
| **Floating WhatsApp widget** | plugin | Button + popup | All pages |
| **Card patterns** | — | Square bordered cream cards (offerings/pricing), rounded white shadow cards (triad), icon-feature columns (why-us), dark rounded quote card | — |
| **Button patterns** | — | Solid olive, solid gold, olive outline; square; uppercase tracked | — |
