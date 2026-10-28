# 03 — Content Inventory & Preservation Reference

**Where the text lives:**
- `content/*.md`: **verbatim** text of every page, header and footer in original order, with heading levels, buttons, images and iframes annotated. Use these instead of re-scraping the site.
- `content/structured-data.json`: the **facts** (business info, contact, nav, classes, pricing, schedule, masterclass, why-us, studio) in machine-readable form, with `_issues` flags.
- Inconsistencies and typos are listed in `08-issues-gaps-questions.md`. **Do not correct them silently.**

Captured 2026-10-28 from the rendered live HTML.

---

## 1. Content map by source

| Content block | Source page / section | Verbatim file | Priority for Phase 2 |
|---|---|---|---|
| Brand name, hero eyebrow, title, subtitle, hero sentence | Home §1 | content/home.md | **Essential** |
| Philosophy title + text (= hero sentence) | Home §2 | content/home.md | Low (duplicate; needs real copy) |
| Signature classes: Kanaka Power, Vana Zen (tagline, description, intensity, focus) | Home §3 / Classes §2 | content/home.md, content/classes.md | **Essential** |
| Price list: 7 products, IDR + ~USD, inclusions, badges | Home §3b–d / Classes | content/classes.md, structured-data.json → `pricing` | **Essential (verbatim facts)** |
| Shala-for-rent note | 9 pricing cards | structured-data.json → `pricing.repeated_card_footnote` | Important (once) |
| Masterclass: Quantum NLP & Hypnotherapy (intro, triad, quote, 4 outcomes, audience, duration, format, CTA) | Home §4–6 | content/home.md, structured-data.json → `masterclass` | **Pending owner (08-A6)**. Preserve verbatim if kept |
| Why Vana Kanaka? (3 points) | Home §7 (+ duplicate §10) | content/home.md | Important (once) |
| Studio section title, Studio Amenities text | Home §8–9, Studio §3 | content/the-studio.md | Low (placeholder text) |
| Weekly schedule (7 days × 3 slots, class names + notes, slot times) | Schedule | content/schedule.md, structured-data.json → `schedule` | **Essential** |
| Address, WhatsApp numbers, social handles, map | Home §11, Studio §4, Contact §2 | content/contact.md | **Essential** (address pending 08-A1) |
| Opening hours, footer tagline, copyright | Footer | content/footer.md | **Essential** (pending 08-A3/A4) |
| Navigation labels | Header | content/header.md | **Essential** |
| Intake form: intro, 5 sections, all questions, options, placeholders, waiver text, button label | Intake §1 | content/yoga-client-intake-form.md | **Essential (verbatim, functional)** |
| Studio Guidelines & Client SOP (EN + ID, 5 sections + closing) | Intake §2 | content/yoga-client-intake-form.md | **Essential (verbatim, operational/legal)** |
| Privacy policy (11 sections) | Privacy | content/privacy-policy.md | Essential, **pending legal review (08-A7)** |
| WhatsApp booking pre-fill message | All "Book via WhatsApp" links | structured-data.json → `contact.whatsapp_booking_prefill_decoded` | Essential |
| WhatsApp widget text ("Start a Conversation…", "The team typically replies in a few minutes.") | Plugin popup | 06 §2 F7 | Low (widget to be replaced) |
| SEO titles and descriptions per page | `<head>` | evidence/seo-metadata.json, 02 §2 | Important (reuse/improve) |
| "Hello world!" post + default comment | /hello-world/ | content/hello-world.md | **Discard** (WordPress placeholder) |

## 2. Key facts (quick reference, verbatim)

**Pricing (IDR, ~USD as written)**

| Product | Price | Details |
|---|---|---|
| Single Class Drop-in | IDR 160,000 (~$10 USD) | Access to any single 75 or 90-minute morning/afternoon class. |
| Sound Healing Drop-in *(Evening Ritual)* | IDR 200,000 (~$13 USD) | Access to special night events (Sound Healing, Kirtan, Trataka). |
| 3-Class Pass | IDR 450,000 (~$29 USD) | Valid for 7 days. Includes all morning, afternoon, and evening ritual sessions for 7 days. |
| 5-Class Pass *(Most Popular)* | IDR 700,000 (~$45 USD) | Valid for 14 days. Includes all morning, afternoon, and evening ritual sessions for 7 days. ⚠ |
| Unlimited Weekly Pass | IDR 1,100,000 (~$70 USD) | Includes all morning, afternoon, and evening ritual sessions for 7 days. |
| Private 1-on-1 Yoga / Yoga Therapy | IDR 950,000 (~$60 USD) / session | — |
| Private Group Session (Up to 4 people) | IDR 1,500,000 (~$95 USD) / session | — |

**Schedule slots:** Morning 07:00 – 08:30 · Afternoon 16:30 – 17:45 · Evening: *(no time given)* ⚠

| Day | Morning | Afternoon | Evening |
|---|---|---|---|
| Mon | Vinyasa Flow: Setting Intentions & Solar Awakening | Yin Yoga: Deep Tissue Release & Grounding | Rest / Open |
| Tue | Ashtanga Led: Building Heat & Core Strength | Pranayama & Nidra | Sound Healing |
| Wed | Hatha Yoga: Alignment, Balance & Stability | Gentle Flow & Restorative: Calming the Nervous System | Trataka Meditation |
| Thu | Creative Vinyasa: Heart Openers & Backbends | Myofascial Release: Yin with Yoga Therapy | Devotional Chanting |
| Fri | Chakra Flow: Balancing the 7 Energy Centers | Decompression Stretch: Hip Openers & Twists | Yoga Nidra: Deep Conscious Relaxation |
| Sat | Power Yoga: Strength, Sweat & Celebration | Slow Flow & Mudras: Mindful Hand Gestures & Movement | Closing Circle: Gratitude & Reflection Ceremony |
| Sun | Spiritual Morning Flow: Gentle Integration & Movement | Free Afternoon / Self-Study: Pranayama & Nidra | Rest / Open |

**Contact:** Jalan Griya Sari Permata I, Desa Kutuh, Kec. Kuta Selatan, Bali - Indonesia. ⚠ · WhatsApp +62 813 3974 9892 · +34 699 849 483 ⚠ · Instagram @vanakanakayogabali · Facebook "@Vana Kanaka" (share link) · TikTok @vana.kanaka.bali · Hours: Mon – Sat 07:00 AM – 08:00 PM; Sun: Special Workshops ⚠ · **No email.**

**Key SOP rules (from the intake page):** book ≥ 3 hours ahead via app/WhatsApp; walk-ins if space; pay before entering; packages non-extendable unless medical certificate; arrive 10–15 min early; no entry > 5 min late; shoes off; declare injuries/pregnancy; phones silent; towel over mats; silence in class; hands-on adjustments optional (adjustment card); cancel ≥ 4 hours ahead or lose 1 credit / penalty for unlimited; lockers provided; studio not liable for valuables.

⚠ = see 08.

## 3. Content that does NOT exist (do not invent)

- Testimonials or reviews: **none**.
- FAQs: **none** (the SOP partially answers typical FAQ topics).
- Teacher/instructor names, bios or photos: **none**.
- Blog/articles: **none** (only the WordPress "Hello world!" placeholder).
- About/story page, founding story or name meaning: **none**.
- Retreats, teacher trainings, events calendar, workshops list: **none** (beyond "Sun: Special Workshops" and the masterclass).
- Masterclass price, dates and facilitator: **none**.
- Shala rental price and terms: **none**.
- Email address, business registration, and the booking app link: **none**.
- Image captions or gallery descriptions: **none** (all alt text empty).
- Downloadable documents: **none**.

## 4. Redundancy & priority notes (for a concise redesign)

- **Repeated text:** the hero sentence (×4), "The Liquid Gold of the Gods" (×3), the Why section (×2 on Home), the shala-rent note (×9), the CTA pairs (×9), the Find Us block (×3 pages + footer). Each should appear once, in its most relevant place.
- **Can be condensed without losing facts:** pricing cards (a grouped table or compact cards with one CTA per group), masterclass (one section with facts and CTA), and the Find Us block.
- **Must stay complete and verbatim:** prices and inclusions, schedule, intake questions and waiver, SOP (EN + ID), and contact facts (once confirmed).
- **Low priority / placeholder copy:** philosophy text, amenities text, "MORE" button label.
