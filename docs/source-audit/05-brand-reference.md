# 05 — Brand Reference (original site)

Source: live site https://vanakanaka.com, captured 2026-10-28.
**Evidence key:** **V** = verified (Elementor kit CSS or browser-computed style); **E** = estimate (visual sampling / screenshots); **D** = defined in the kit but not seen in rendered output.

---

## 1. Brand identity summary

- **Name:** Vana Kanaka Yoga Bali ("Vana Kanaka" short form).
- **Positioning:** a yoga studio ("sanctuary", "shala") in Desa Kutuh, Kuta Selatan, South Bali, with Balinese-temple styling. The site describes the brand as sacred, golden, natural and calm.
- **Recurring brand phrases (verbatim):**
  - "The Liquid Gold of the Gods" (hero subtitle, philosophy title, logo A)
  - "Sacred Wilderness" (hero eyebrow, WordPress tagline). Logo A artwork misspells it "Sacred Wildrness".
  - "Sacred Indulgence" (logo B, footer)
  - "Inhale Serenity of Wellness, Rejuvenate" (logo B). The footer writes it as "In Hale".
- **Name meaning:** not stated anywhere on the site. ("Vana" ≈ forest and "Kanaka" ≈ gold in Sanskrit, which fits the green-and-gold palette. This is interpretation only and must not be published as a claim.)
- **Visual tone:** warm cream backgrounds, deep olive green, antique gold, high-contrast serif display type, wide-tracked uppercase sans labels, golden-hour photography.

## 2. Logos

Two different logo systems are in use. The business must decide which one is canonical (see 08).

| | Logo A: "Liquid Gold" line-art | Logo B: "Sacred Indulgence" embossed |
|---|---|---|
| Artwork | Green line-art tree with roots and a diamond, gold plumeria, on cream | Embossed 3D gold tree and plumeria with ornate scrollwork, on a gold-to-cream gradient |
| Text in artwork | VANA KANAKA / "THE LIQUID GOLD OF THE GODS" / SACRED WILDRNESS | INHALE SERENITY OF WELLNESS, REJUVENATE / VANA KANAKA / SACRED INDULGENCE |
| Where used | Favicon (32 and 192), apple-touch-icon, Home og:image, Yoast Organization schema logo | Global header, all pages, about 80 px, circle-masked |
| Files | #12 `whatsapp-image-2026-05-14-at-8.40.05-pm-e1779033411121.jpeg` (445²); #119 icon only (238²); #121 wordmark only (272×77) | #364 `whatsapp-image-2026-05-20-at-5.44.06-pm-1-1.jpeg` (591×589); #363 duplicate |
| Quality | Clean, flat, two-colour; scales well conceptually. Files are tiny JPEGs. | Photoreal raster; text illegible at header size; no transparency. |

- **Header lockup (V):** circular logo B image (≈80 px on desktop, ≈52 px on mobile, E) plus the text "VANA KANAKA", set as an `h6` in Cormorant Garamond 600, 32 px, `#1F470E`.
- **Footer lockup (V):** text-only "VANA KANAKA" (Cormorant Garamond 600, 32 px, `#1F470E`) with the italic tagline below.
- **No vector logo** (SVG/AI/PDF) was found on the site or in the WordPress media library.

## 3. Colour palette

### 3.1 Core brand colours (verified in use)

| Role | HEX | Evidence | Where |
|---|---|---|---|
| **Primary: deep olive / forest** | `#364230` | V (kit `primary`, computed) | Primary buttons ("Explore Classes", "Book via WhatsApp", "More", "Secoure your spot"); "Find Us in Kutuh" contact band background; masterclass quote card background; section headings on cream; outline-button text and border |
| **Brand green, dark** | `#1F470E` | V (kit, computed) | Eyebrow labels ("Masterclass", "Why choose us"); header and footer "VANA KANAKA" wordmark; footer column headings; schedule time-of-day icons and labels; divider underlines |
| **Gold: CTA** | `#CCA831` | V (kit, computed) | Secondary CTAs ("View Schedule", "Explore the Studio"); triad icon glyphs |
| **Cream: base background** | `#F3EEE3` | V (kit, computed) | Header background; philosophy, offerings and "Why" section backgrounds; footer background; light text on dark bands |
| **Sand: hero text** | `#F0E2C3` | V | Hero eyebrow and italic subtitle over the photo |
| **Khaki: badge** | `#C5B98F` | V | "Evening Ritual" and "Most Popular" badges (with `#F3EEE3` text) |
| **Pale gold: icon disc** | `#FFF4CF` | V | Circular backgrounds behind triad icons |
| **Card border / divider** | `#DAD1C0` | V | Pricing and offering card borders (1 px); footer divider (E) |
| **White** | `#FFFFFF` | V | Masterclass section background; text on dark buttons |

### 3.2 Text colours (verified)

| Use | HEX |
|---|---|
| Display headings | `#0A0A0A`, `#232323` (main), `#364230` (offerings and pricing section titles) |
| Card titles (uppercase sans) | `#232323` |
| Body text | `#54595F` (cards), `#7A7A7A` (masterclass and descriptions), `#333333` (theme default; privacy page) |
| Text on dark green | `#FFFFFF`, `#F3EEE3` |
| Footer links / address | `#54595F` |

### 3.3 Defined in the kit but not observed in rendered output (D)

`#9F8F52` (kit "accent"), `#A6944C`, `#919986`, `#A5B4A0`, `#FAF7F2`, `#FAFAFA`, `#EFEFEF`, `#E9E9E9`, `#BCBCBC`, `#E2E2E2`, `#E1FFE5` (possibly the mobile hamburger button tint, E), `#000000`, `#FFBC7D` (Elementor page-transition default).

### 3.4 Incidental or non-brand colours (do not carry forward)

| HEX | Source |
|---|---|
| `#CC3366` | Hello Elementor theme default link colour (skip link, "Hello world" post, comment links) |
| `#2DB742` | WP WhatsApp plugin floating button and popup |
| `#69727D` | Elementor default social-icon colour, only in transitional states |
| `#0F172A`, `#1E293B`, `#334155`, `#475569`, `#64748B`, `#CBD5E1`, `#E2E8F0`, `#F1F5F9`, `#F8FAFC` | Tailwind-style slate palette hard-coded in the custom HTML intake form. Off-brand. |

### 3.5 Interaction states (verified by hover test)

- **Buttons:** colour does not change on hover. The only hover effect is Elementor "shrink" (`transform: scale(0.9)`, `transition: transform .3s`).
- **Nav links:** pointer effect is `none`, so there is no visible hover change. The active page link is the same colour as the rest (`#232323`) on desktop. In the mobile dropdown, the active item has a dark-green background with white text (E from screenshot).
- **Focus states:** not customised (browser defaults).

### 3.6 Contrast of original pairings (computed, WCAG 2.x)

| Foreground / background | Ratio | AA normal text (4.5) |
|---|---|---|
| White on gold `#CCA831` (secondary buttons) | 2.28 : 1 | ❌ fails |
| Cream `#F3EEE3` on khaki `#C5B98F` (badges) | 1.69 : 1 | ❌ fails |
| `#7A7A7A` body on cream `#F3EEE3` | 3.71 : 1 | ❌ fails |
| `#7A7A7A` body on white | 4.29 : 1 | ❌ fails (marginal) |
| Olive `#364230` on gold `#CCA831` | 4.66 : 1 | ✅ passes |
| `#54595F` on cream | 6.11 : 1 | ✅ |
| White on olive `#364230` | 10.61 : 1 | ✅ |
| Green `#1F470E` on cream | 9.23 : 1 | ✅ |
| Olive `#364230` on cream | 9.17 : 1 | ✅ |

## 4. Typography (original)

### 4.1 Families

| Family | Source | Role on original | Status |
|---|---|---|---|
| **Cormorant Garamond** | Google Fonts (all 18 variants requested) | Display serif: hero title, section titles, "Why" items, schedule class names, quotes, logo text, footer tagline (italic) | **V** loaded and rendered |
| **DM Sans** | Google Fonts (all 18 variants requested) | Eyebrow labels, uppercase card titles, prices, masterclass and contact paragraphs, footer copyright | **V** loaded and rendered |
| **"JT" (JT Douro Sans)** | Self-hosted TTF ×5 in `/uploads/2026/05/` | Kit "secondary" font. Intended for nav, buttons and card body text. | **V declared but never downloaded by the browser**; affected elements fall back to the system stack |
| **System stack** (`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial…`) | Hello Elementor reset | Actually renders the nav links, all buttons, card descriptions, intensity/focus rows, footer links/address, the shala-rent footnote, the privacy page | **V** (Segoe UI on Windows, SF on Apple) |
| **Helvetica Neue / Arial** | Inline CSS in the custom intake form | Entire intake form and SOP | **V** |

In practice, about four or more different typefaces appear across the site. The original therefore does not have a coherent type system.

### 4.2 Computed type scale, desktop 1440 (V)

| Element | Family | Size / line-height | Weight | Tracking / case | Colour |
|---|---|---|---|---|---|
| Hero title "VANA KANAKA" (h1) | Cormorant Garamond | 72 / 72 | 400 | 4px, uppercase | #FFF |
| Hero eyebrow (h1, second h1 on page) | DM Sans | 14 / 14 | 500 | 4px, uppercase | #F0E2C3 |
| Hero subtitle (h2, italic) | Cormorant Garamond | 32 / 32 | 400 italic | — | #F0E2C3 |
| Philosophy title (h2, italic) | Cormorant Garamond | 56 / 72 | 600 italic | — | #0A0A0A |
| Section titles (h2) | Cormorant Garamond | 48 / 48 | 300 | — | #364230 / #0A0A0A / #232323 |
| Inner-page banner title (h2) | Cormorant Garamond | 48 / 48 | 300 | uppercase (content) | #FAFAFA |
| Eyebrow labels (h4) | DM Sans | 14 / 14 | 500 | 4px, uppercase | #1F470E / #364230 / #F3EEE3 |
| Card titles "KANAKA POWER", pricing names (h2) | DM Sans | 24 / 24 | 500 | 4px, uppercase | #232323 |
| Prices (h6) | DM Sans | 16 / 16 | 600 | — | #232323 |
| Class tagline (h6, italic) | Cormorant Garamond | 16 / 16 | 600 italic | — | #364230 |
| Sub-headings (h2 "Power of the Triad", quote) | Cormorant Garamond | 32 / 32–43 | 300 | — | #232323 / #F3EEE3 |
| "Why" item titles (h3) | Cormorant Garamond | 28 / 33.6 | 500 | — | #333 |
| Schedule day (h3) | Cormorant Garamond | 32 / 32 | 300 | — | #0A0A0A |
| Schedule class name (h6) | Cormorant Garamond | 18 / 18 | 300 | — | #0A0A0A |
| Body (DM Sans paragraphs) | DM Sans | 16 / 24 | 400 | — | #7A7A7A / #333 |
| Card body (fallback stack) | system | 14 / 24 | 400 | — | #54595F |
| Nav links | system (intended JT) | 14 / 20 | 400 | 2px, uppercase | #232323 |
| Buttons | system (intended JT) | 14 / 14 | 400 | 2px, uppercase | #FFF or #364230 |
| Footer links/address | system | 14 / 21 | 400 | 2px, uppercase | #54595F |
| Footer tagline (h6 italic) | Cormorant Garamond | 18 | 600 italic | — | #54595F |
| Footer copyright | DM Sans | 14 | 400 | — | #54595F |

Mobile (390, E from screenshots): hero title wraps to two lines ("VANA / KANAKA") at roughly 48–56 px. Section titles are about 40 px. Body stays 16 px.

### 4.3 Kit typography presets (V, from `evidence/elementor-kit-globals.css`)

Primary DM Sans 600 · Secondary "JT" 400 · Text DM Sans 400 · Accent DM Sans 500 · DM Sans 18px uppercase +4px · DM Sans 14px 500 uppercase +4px · Cormorant Garamond 48px 300 (×2) · Cormorant Garamond 600 / 600 italic · DM Sans 24px 500 uppercase +4px · "JT" 800.

### 4.4 Implications for Phase 2 (no selection made)

- **Phase 2 rule:** exactly **two** font families site-wide (one for headings; one for body, nav, buttons, forms, cards and footer). No third family anywhere. Hierarchy comes from weight, size, line-height and tracking only.
- **Candidates documented, not chosen.** The final choice is deferred to Phase 2 per instructions.
  - *Option 1, continuity:* **Cormorant Garamond** (headings) + **DM Sans** (everything else). These are the two families that actually define the current look, both are OFL, and DM Sans is legible at small sizes. Note: Cormorant at light weights (300) is thin at small sizes. Use it only at 28 px and above, and prefer 400–500.
  - *Option 2, more readable serif:* a sturdier serif (e.g. Cormorant's sibling families, or another readable book serif) + DM Sans. This would reduce the "fancy" feel the brief warns against.
  - "JT Douro Sans": licence unknown and never rendering, so it is **not** a candidate.
  - Helvetica, Arial and the system stack are fallbacks only, not brand fonts.

## 5. Shape, depth, imagery and motifs

| Element | Original treatment (V unless noted) |
|---|---|
| Buttons | Square corners (`border-radius: 0`), 16 px × 32 px padding, uppercase tracked text, solid green or gold, or 1 px green outline |
| Cards | Square, 1 px `#DAD1C0` border, no shadow, cream fill (pricing/offerings); triad cards have 16 px radius, white fill, faint shadow `rgba(0,0,0,.05) 2px 2px 20px` |
| Arches | Philosophy images use tall arch masks: left image rounded top (`999px 999px 0 0`), right image rounded bottom (`0 0 999px 999px`). This is the most distinctive shape motif. |
| Circles | Logo in the header, outline icon circles in "Why Vana Kanaka?", filled pale-gold icon discs (triad) |
| Dark bands | Masterclass quote card (`#364230`, 16 px radius); full-bleed "Find Us in Kutuh" contact band |
| Dividers | Short 100 px horizontal rules under section titles (`#1F470E` or `#DAD1C0`) |
| Shadows | Almost none; WhatsApp widget `rgba(0,0,0,.14) 0 6px 8px 2px` |
| Icons | Font Awesome (inline SVG) mixed solid/outline: tree, compass, heart, leaf, brain, asterisk, map-pin, phone, Instagram, cloud-sun, sun, moon, clock, meditating person |
| Photography | Warm golden-hour palette, strong orange/amber grading, Balinese shala with carved gold statues, white balustrades, the large "Vana Kanaka" sign, tropical plants and bougainvillea. **Most hero/section images are ChatGPT-named files** (see 04). Real photos are daylight and less graded. |
| Image cropping | Hero full-bleed 855 px tall at 1440; inner-page banners 450 px tall with a centred uppercase title over a darkened photo; Studio grid of 4 × 3 edge-to-edge tiles 360×300 |
| Overlays | Dark overlay on hero and banners (E ≈ 30–40% black) |
| Motion | Elementor `fadeInUp` entrance on about 18 elements on Home, 5 on Classes, 3 on Studio, 2 on Contact; button shrink on hover. No parallax, sliders or sticky effects. |

## 6. What to keep vs. leave behind (for Phase 2 reference)

- **Keep (recognisable identity):** cream `#F3EEE3` + olive `#364230` + green `#1F470E` + gold `#CCA831`; a refined serif for display paired with a clean sans; tracked uppercase small labels (used sparingly); warm photography of the real shala; the arch shape motif; the Vana Kanaka tree/plumeria mark.
- **Leave behind:** the mixed system/Helvetica fonts; slate-grey intake-form styling; the theme's pink link colour; the WhatsApp-plugin green as a page colour; decorative uppercase card titles with 4 px tracking on long names (they wrap badly); duplicate logo systems; tiny raster logo files.
