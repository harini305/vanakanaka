# 07 — Responsive Observations

**Tested viewports (headless Chrome 1× DPR):** desktop **1440×900**, tablet **768×1024** (touch), mobile **390×844** (mobile emulation, touch).
**Elementor breakpoints (verified from config):** mobile ≤ 767 px · tablet ≤ 1024 px · desktop > 1024 px. Boxed content width **1140 px**.
**Not tested:** real devices; landscape orientation; widths between breakpoints (e.g. 1024–1280, 820, 360/320); iOS Safari or Android-specific rendering; high-DPR image selection.

Screenshots: `screenshots/<page>__<viewport>-<width>__{fold|full|scrolled|menu-open}.jpg` (see `screenshots/INDEX.md`).

---

## 1. Page heights (verified, `document.scrollHeight`)

| Page | 1440 | 768 | 390 | Note |
|---|---|---|---|---|
| Home | 10,097 | 11,165 | **18,420** | Mobile home ≈ 22 phone screens |
| Classes | 3,867 | 4,560 | 7,412 | Pricing block alone is 6,140 px on mobile |
| Schedule | 2,627 | 2,886 | 4,370 | |
| The Studio | 3,276 | 4,417 | 7,443 | 12-tile grid becomes 3,600 px on mobile |
| Contact | 1,697 | 1,914 | 2,172 | |
| Intake form | 5,372 | 5,633 | 7,337 | |
| Privacy | 1,976 | 2,275 | 2,780 | |

No horizontal overflow (`scrollWidth > innerWidth`) was detected on any page at any tested width.

## 2. Global components

### Header
| | 1440 | 768 | 390 |
|---|---|---|---|
| Height | 96 px | 96 px | 68 px |
| Layout | Logo circle + "VANA KANAKA" left; 5 inline uppercase links right | Logo + text left; **hamburger** right (light green rounded square) | Same as tablet, smaller logo |
| Position | Static: scrolls away (verified at scrollY 1400) | Static | Static |
| Background | Cream `#F3EEE3` | same | same |

### Mobile/tablet menu (verified at 768 and 390)
- The hamburger opens a full-width white dropdown directly below the header, overlaying the hero. It has 5 centred, tracked, uppercase items about 60 px tall each, and the current page is highlighted with a dark-green band and white text. The icon turns into ✕.
- No overlay or dimming behind the panel; no page scroll lock observed.
- Screenshots: `*__tablet-768__menu-open.jpg`, `*__mobile-390__menu-open.jpg`.

### Footer
| | 1440 | 768 | 390 |
|---|---|---|---|
| Height | 391 px | 546 px | **782 px** |
| Layout | 3 columns: brand + tagline + social (wide) · Quick Links · Get in Touch; bottom bar © left / Privacy right | Columns partially stacked | Fully stacked single column, left-aligned; bottom bar centred |
- On mobile the **floating WhatsApp widget covers the copyright line and the "Privacy Policy" link** at the end of the page (`home__mobile-390__tail-02.jpg`).
- On mobile the footer repeats the full nav and address immediately after the dark "Find Us in Kutuh" band, which shows the same address, so the address appears twice in a row.

### Floating WhatsApp widget
- Fixed bottom-right on every page and viewport. On desktop it shows a label pill ("Need Help? Chat with us") plus a green circle; on mobile it shows both as well.
- On mobile it overlaps body text and CTAs while scrolling (e.g. Schedule intro paragraph, hero CTA area, footer).

## 3. Page-level behaviour

### Home
| Section | 1440 | 768 | 390 |
|---|---|---|---|
| Hero (bg image, centred text, 2 CTAs) | 855 px tall; CTAs side by side | 973 px; CTAs side by side | 802 px; title wraps "VANA / KANAKA"; CTAs stack and are **unequal widths** |
| Philosophy (arch image / text / arch image) | 3 columns | **Still 3 columns**; text column narrow (≈220 px) and the heading breaks into 3 lines | Stacks: image (top-rounded arch), text centred, image (bottom-rounded arch) |
| Signature classes (2 cards) | 2 columns | 2 columns | 1 column |
| Single passes (2 cards) | 2 columns | 2 columns; long uppercase titles wrap ("SINGLE CLASS / DROP-IN") | 1 column |
| Class packages (3 cards) | 3 columns | **3 narrow columns** (≈230 px); titles wrap to 3 lines; prices wrap "(~$29 / USD)" | 1 column |
| Private sessions (2 cards) | 2 columns | 2 columns | 1 column; title wraps to 3 lines |
| Masterclass intro + triad | 3 triad cards | 3 cards | 1 column, cards stacked |
| Quote band | Rounded dark card inside container | same | Full-width-ish; 333 px tall |
| What You Will Experience / Who For | Narrow centred column (≈680 px) | same | Full width |
| Why Vana Kanaka (×2) | 3 columns | 3 columns | 1 column; each is 1,065 px tall on mobile, repeated twice |
| The Studio strip (4 images) | 4 columns, 300 px tall | 4 columns | **4 images stacked**, 1,549 px |
| Studio Amenities (4 images) | 4 columns | 4 columns | 4 stacked, 1,522 px |
| Find Us in Kutuh | Text left / map right | Text left / map right | Stacked text then map |

### Classes
- Inner banner: 450 px (desktop), 512 (tablet), 422 (mobile), with a centred uppercase title.
- The rest is identical to the Home offerings/pricing template (same responsive behaviour).

### Schedule
- Time legend (Morning/Afternoon/Evening) is centred and stacked vertically at all sizes.
- Days: **3 columns** on desktop and tablet (Mon–Wed, Thu–Sat), then Sunday alone on a third row; **1 column** on mobile.
- No table semantics; reads as a long list on mobile.

### The Studio
- 12-image grid: **4 × 3 edge-to-edge** on desktop (360×300 tiles); 2 columns on tablet (1,800 px block = 6 rows × 300 px); **1 column on mobile (12 × 300 px tiles = 3,600 px)**. Images are CSS backgrounds, so cropping is `background-size: cover`, centred.
- Amenities and Find Us behave as on Home.

### Contact
- Banner, then Find Us band (text + map). Map stacks under the text on mobile. No form.

### Intake form
- A fixed-width (≈650 px) white card, centred on desktop and tablet; full-width with small margins on mobile.
- Radio and checkbox groups wrap inline; inputs are full-width; native date pickers.
- The SOP card below it is equally long; bilingual blocks stack.

### Privacy / utility pages
- Default Hello theme single-column text with no Elementor styling (theme default `#333`, system font, 28 px h3s). Visually inconsistent with the branded pages.

## 4. Responsive problems worth fixing in Phase 2

1. **Tablet (768) keeps too many columns.** The philosophy 3-column layout and the 3-up pricing cards cause cramped text and ugly title wraps.
2. **Mobile page length is excessive.** Home is 18,420 px, driven by the duplicated "Why" section, 9 repeated shala-rent footnotes, 18 CTAs and 8 stacked square images.
3. **Uppercase titles with 4 px tracking** wrap awkwardly at all widths below desktop.
4. **Unequal stacked hero buttons** on mobile.
5. **Studio gallery** becomes a 3,600 px single column on mobile; it needs a 2-column grid or a carousel.
6. **Floating WhatsApp widget** overlaps content and the footer legal line on mobile.
7. **Address shown twice back-to-back** (contact band, then footer) on Home, Studio and Contact.
8. **Header not sticky** on long pages. A compact sticky header or a persistent "Book" action would help navigation (Phase 2 decision).
9. Inner banners use the same image at 422–512 px tall, which pushes the content below the fold on mobile.
