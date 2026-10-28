# 08 — Issues, Gaps & Open Questions

Everything here is **documented, not corrected**. Phase 2 must not silently fix factual items. Items marked **[Q]** need an answer from the business owner; items marked **[Fix-OK]** are safe technical/cosmetic fixes the rebuild can make without a business decision (still list them in the PR).

Severity: **High** = factual/legal/trust risk · **Med** = UX or brand clarity · **Low** = cosmetic.

---

## A. Factual conflicts & questions for the business

| # | Sev | Issue | Evidence | Question |
|---|---|---|---|---|
| A1 | High | **Two different street addresses.** Contact band and footer: "Jalan Griya Sari Permata I, Desa Kutuh, Kec. Kuta Selatan, Bali - Indonesia." Privacy policy: "Jl. Mundeh 1, Br. Kaja Jati, Ds. Kutuh, Kuta Selatan, Badung, Bali, Indonesia 80361". | content/home.md, content/privacy-policy.md | **[Q]** Which address is correct for the studio? Is the other one a business/registration address? Postcode for the studio? |
| A2 | High | **Two phone numbers, only one used.** +62 813 3974 9892 (all links and widget) and +34 699 849 483 (plain text, Spanish country code, no link or explanation). | Find Us band | **[Q]** Should +34 remain public? Whose number is it (e.g. an owner abroad)? WhatsApp or voice? |
| A3 | High | **Sunday conflict.** Footer: "Sun: Special Workshops". Schedule: Sunday has "Spiritual Morning Flow" and "Free Afternoon / Self-Study". | footer.md vs schedule.md | **[Q]** What actually runs on Sunday? |
| A4 | High | **Opening hours vs schedule.** Footer: Mon–Sat 07:00 AM – 08:00 PM. **No evening class time is stated anywhere** (the schedule legend shows "EVENING" with no time). | schedule.md | **[Q]** Evening session time(s)? Do 07:00–20:00 hours apply to the front desk/rental? |
| A5 | High | **5-Class Pass validity contradicts itself:** "Valid for 14 days. Includes all morning, afternoon, and evening ritual sessions for 7 days." The 3-Class Pass also says "for 7 days" twice. | pricing | **[Q]** Is the 5-Class Pass valid 14 days? Do class packs include evening rituals (normally IDR 200k drop-in)? |
| A6 | High | **Masterclass details contradict and are incomplete.** "DURATION 2 hours/ 4-Week Immersive" vs "FORMAT Self-Paced Course". No price, dates, location, facilitator, or capacity. Not listed on Classes or Schedule. | home.md | **[Q]** Is the Quantum NLP & Hypnotherapy masterclass currently offered? Format (in-person 2 h? 4-week? self-paced online?), price, facilitator name and credentials? Should it stay on the homepage? |
| A7 | High | **Privacy policy contradicts actual behaviour.** It says no personal data is collected and there are no data-submission features, and that comments are disabled. In reality the intake form collects name, DOB, phone, email, emergency contact and **health/pregnancy data** (sent via WhatsApp), and a WordPress comment form is live on /hello-world/. Also "Our website address is:" is blank. | privacy-policy.md, intake form | **[Q]** The policy needs a business/legal update before or with launch. Phase 2 should not rewrite legal text without approval. |
| A8 | Med | **Two taglines / two logos.** "Sacred Wilderness" + "The Liquid Gold of the Gods" (logo A, hero) vs "Sacred Indulgence" + "Inhale Serenity of Wellness, Rejuvenate" (logo B, header, footer). | 05-brand-reference §2 | **[Q]** Which logo and tagline are official? Is a vector (SVG/AI/PDF) logo available? |
| A9 | Med | **Shala rental has no details.** "Yoga Shala Available For Rent!" is repeated in all 9 pricing cards, with no price, capacity, inclusions or dedicated CTA. | pricing | **[Q]** Rental rates/terms? Should it become its own short section with one WhatsApp CTA? |
| A10 | Med | **"Official application" for booking.** The SOP says clients must book "through the official application/WhatsApp", but no app is linked anywhere. | intake SOP §1 | **[Q]** Is there a booking app (e.g. Momence, Mindbody, Bsport)? Link? |
| A11 | Med | **Penalty for unlimited members** on late cancellation is mentioned without an amount. | SOP §4 | **[Q]** Amount? (Or keep as-is.) |
| A12 | Med | **No instructors named**, while "Expert Guidance" claims dedicated instructors and the 1-on-1 offering mentions "Yoga Therapy". | home.md | **[Q]** Teacher names, photos and bios available? Do not invent. |
| A13 | Med | **Unsourced health and science claims** in the masterclass: "The subconscious mind runs 95% of our lives", hypnotherapy to "dissolve deep-seated fears, anxiety", "Clinical Hypnotherapy", "Quantum Physics". | home.md | **[Q]** Business to confirm it wants these claims kept verbatim (retain as-is; no new claims added). |
| A14 | Med | **Amenities section text** is a copy of the hero sentence; it doesn't describe amenities. The images are generic AI product shots (mat, straps, wheels, blocks). The **pool** appears in many photos but is never mentioned. | the-studio.md | **[Q]** Real amenity list (props, lockers, showers, pool use, parking, water)? |
| A15 | Low | USD conversions "(~$10 USD)" are approximate and undated. | pricing | **[Q]** Keep USD hints? |
| A16 | Low | "Price List (Kuta Selatan)": implies other locations? | pricing eyebrow | **[Q]** Single location? |
| A17 | Low | Intake form "Booking Date" sits under the waiver (`id="waiverDate"`) and behaves like a signature date. | intake form | **[Q]** Is this the date of the class booked, or the date signed? |
| A18 | Low | Masterclass "Who This Class Is For": nothing indicates whether the masterclass is in English, Indonesian or both. | — | **[Q]** Language of classes? |

## B. Typos & copy errors (verbatim → suspected intent)

| # | Original | Location | Suspected intent | Action |
|---|---|---|---|---|
| B1 | "SECOURE YOUR SPOT NOW" | Home masterclass CTA | "Secure your spot now" | **[Fix-OK]** obvious typo, but list it in the PR |
| B2 | "In Hale Serenity of Wellness, Rejuvenate" | Footer tagline | "Inhale Serenity…" (as on logo B artwork) | **[Q]** likely Fix-OK |
| B3 | "SACRED WILDRNESS" | Logo A artwork (raster) | "Sacred Wilderness" | **[Q]** needs corrected logo artwork from the owner |
| B4 | "Facebook: @Vana Kanaka" | Find Us | Handle with a space is not a real handle | **[Q]** actual Facebook page name/URL (the link is a share link) |
| B5 | "Tiktok @vana.kanaka.bali" (no colon) vs "Instagram: …" | Find Us | Consistency | **[Fix-OK]** |
| B6 | "Hi! Click one of our member below…" | WhatsApp widget popup | "members" | Widget will be replaced |
| B7 | "VANA KANAKA YOGA STUDIO​" | Studio banner | Contains a zero-width space | **[Fix-OK]** |
| B8 | "2 hours/ 4-Week Immersive" | Masterclass | Spacing | Depends on A6 |
| B9 | Page title "YOGA CLIENT INTAKE FORM - …" (all caps); no meta description | SEO | — | **[Fix-OK]** |

## C. Duplicate / redundant content

| # | Duplicate | Where | Recommendation |
|---|---|---|---|
| C1 | "Why Vana Kanaka?" section **appears twice** on Home (ids c3a0137 and 77bbb8b), identical | Home | Show once |
| C2 | Hero body sentence ("Experience a sacred wilderness in the heart of South Bali…") is reused **3×** on Home (hero, philosophy, amenities) and again on Studio | Home, Studio | Use once; ask for real philosophy/amenity copy (A14) |
| C3 | "The Liquid Gold of the Gods" is both the hero subtitle and the philosophy title directly below | Home | Use once |
| C4 | Entire offerings + pricing block (template 415) is identical on Home and Classes | Home, Classes | Keep the full block on Classes; Home gets a short summary + link |
| C5 | Shala-rent footnote repeated in 9 cards | Pricing | One dedicated mention |
| C6 | 18 near-identical CTA buttons (9 × "Book via WhatsApp" + 9 × "Fill out the form") | Pricing | One CTA pair per group, or per card with the product name in the WhatsApp text |
| C7 | Find Us band (address, numbers, socials, map) appears on Home, Studio and Contact, and the footer repeats the address and socials right after it | 3 pages | Keep the full block on Contact; compact elsewhere |
| C8 | Same inner-page banner image (#193) on 4 pages | Classes, Schedule, Studio, Contact | Vary with real photos |
| C9 | Media duplicates: #118 = #156; #363 ≈ #364; several near-identical golden-hour meditation renders (#115, #156, #157) | Media library | Pick one per use |

## D. Technical, SEO & accessibility issues (all [Fix-OK] in a rebuild)

| # | Sev | Issue |
|---|---|---|
| D1 | Med | "Explore Classes" hero button → `#classes` anchor that **does not exist** (verified: no scroll) |
| D2 | Med | **No H1** on Classes, Schedule, Studio, Contact, Privacy, Intake. Home has **two** H1s (eyebrow + title). Heading levels are chosen for styling (h6 for prices and the header wordmark, h2 for card titles) |
| D3 | Med | **All content images have empty alt text** (12 on Home, 4 on Studio, 2 on Classes). Studio gallery uses CSS backgrounds (no alt possible) |
| D4 | Med | Custom font "JT" is declared but never loads, so nav and buttons render in OS system fonts (Segoe UI / SF): inconsistent across devices |
| D5 | Med | Heavy images: hero/section images are 1.7–3.1 MB PNGs; Studio page loads ≥ 3.4 MB of images, Home ≥ 2.5 MB (content-length lower bound); 36 Google Fonts variants requested |
| D6 | Low | Social and WhatsApp links use `http://` |
| D7 | Low | WordPress default **"Hello world!" post** is published, indexed in the sitemap, has a live comment form, and its default comment is public. `/category/uncategorized/` is also indexed |
| D8 | Low | Missing meta descriptions on Privacy and Intake; OG descriptions auto-generated from raw form text |
| D9 | Low | `og:image` for most pages is an AI image (#115); the Home og:image is the 445×445 logo (Twitter card is `summary_large_image` but the image is square) |
| D10 | Low | Mixed language in system strings (Indonesian "Arsip", "Laman tidak ditemukan", breadcrumb "Beranda") while `lang="en-US"` and titles mix English/Indonesian ("Yoga Studio di Kutuh Bali", "Vinyasa & Yin Yoga di Kutuh") |
| D11 | Low | No LocalBusiness / ExerciseGym / YogaStudio structured data (only Organization), no opening hours or geo in schema |
| D12 | Low | Floating WhatsApp widget overlaps content and the footer legal line on mobile |
| D13 | Low | No visible focus styles; nav has no hover/active differentiation on desktop |
| D14 | Low | The intake form, Privacy and 404 pages are styled differently from the rest of the site |
| D15 | Low | Hostinger Reach scripts load on every page with no visible feature |
| D16 | Low | Copyright year hard-coded "© 2026" |
| D17 | Med | Colour contrast failures (computed): white on gold buttons 2.28:1, cream on khaki badges 1.69:1, grey `#7A7A7A` body on cream 3.71:1 (see 05 §3.6) |

## E. Asset gaps

| # | Gap |
|---|---|
| E1 | **No vector logo**; largest logo A is 445×445 JPEG and logo B is a 591×589 raster with a gradient background |
| E2 | **Most on-site photography is AI-generated** (filenames `chatgpt-image-*`, 14 files) and includes people (yoga participants) who may not be real clients. The real venue photos (#165–#172, #433–#436; 12 files) are mostly **unused**. **[Q]** May Phase 2 replace AI images with the real photos? Can the owner supply more real photos (classes in progress, teachers, the pool, details)? |
| E3 | Amenity images are generic AI product shots, not the studio's actual props |
| E4 | No team/teacher photos, no testimonials, no video, no brochure/PDF |
| E5 | No favicon set (ICO/SVG/maskable); favicon is the cropped JPEG |
| E6 | Two Unsplash stock images in the library (unused; attribution required if ever used; not recommended) |
| E7 | JT Douro Sans font files: licence unknown (not downloaded) |

## F. Coverage limitations (what this audit could not verify)

- No CMS/admin access: drafts, private pages, Elementor template library and form submissions were not inspected. The public REST API listed **7 published pages, 1 post, 0 tags, 1 category**. Drafts are not exposed publicly.
- WhatsApp conversations, response times and any off-site booking app could not be verified.
- External social profiles were not opened (only hrefs recorded).
- Real-device testing, landscape orientation and in-between breakpoints were not performed.
- The mobile full-page screenshot of Home exceeds Chrome's 16,384 px capture limit; the bottom of that page was captured separately as `home__mobile-390__tail-*.jpg`.
- Google Maps on Home rendered blank at screenshot time (lazy-load timing). It renders on Contact.
- Transfer sizes are lower bounds (some responses lacked `Content-Length`).
- "AI-generated" classification relies on filenames (`chatgpt-image-*`) and visual inspection. It has not been confirmed with the owner.
