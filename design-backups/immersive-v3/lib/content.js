// Site content, seeded from docs/source-audit/content/structured-data.json.
// Disputed facts (second address, +34 number, 5-Class Pass validity, opening
// hours, masterclass format/price) are intentionally omitted until confirmed.
// See docs/phase-2-report.md for the open questions.

export const WHATSAPP_NUMBER = "6281339749892";
export const WHATSAPP_DISPLAY = "+62 813 3974 9892";

// The studio's own pre-filled WhatsApp text, kept verbatim from the original site.
const DEFAULT_MESSAGE =
  "Hello Vana Kanaka Yoga Bali 🙏\n\nI’m interested in your yoga classes.\nCould you please share more information about your classes and availability?\n\nThank you ✨"; // taste-skill-ignore: message text, not UI

export function whatsappLink(topic) {
  const text = topic
    ? `Hello Vana Kanaka Yoga Bali 🙏\n\nI’m interested in: ${topic}.\nCould you please share more information and availability?\n\nThank you ✨` // taste-skill-ignore: message text, not UI
    : DEFAULT_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const navItems = [
  { id: "classes", label: "Classes" },
  { id: "schedule", label: "Schedule" },
  { id: "pricing", label: "Pricing" },
  { id: "studio", label: "Studio" },
  { id: "intake", label: "First visit" },
  { id: "contact", label: "Contact" },
];

export const location = {
  area: "Desa Kutuh, Kuta Selatan",
  region: "Bali, Indonesia",
  mapsUrl: "https://share.google/0fXCV0wy8XQwIrgOY",
};

export const social = [
  { label: "Instagram", handle: "@vanakanakayogabali", href: "https://www.instagram.com/vanakanakayogabali" },
  { label: "TikTok", handle: "@vana.kanaka.bali", href: "https://www.tiktok.com/@vana.kanaka.bali" },
  { label: "Facebook", handle: "Vana Kanaka", href: "https://www.facebook.com/share/18rVz1HkzC/" },
];

export const heroLead =
  "Experience a sacred wilderness in the heart of South Bali. A sanctuary designed to harmonize your inner strength with profound stillness.";

// The three "Why Vana Kanaka?" points, condensed into one short paragraph.
export const whyText =
  "A beautifully designed studio in Kutuh, a peaceful escape from the hustle. Instructors for beginners and advanced practitioners alike. Every body, every age, every level: no flexibility required, only an open heart.";

export const signatureClasses = [
  {
    name: "Kanaka Power",
    tagline: "Ignite your inner fire",
    description: "A dynamic, Vinyasa-based flow that builds heat, strength, and stamina through fluid movement and breath.",
    fact: "High intensity · core strength, flexibility, detoxification",
    tone: "power",
  },
  {
    name: "Vana Zen",
    tagline: "Surrender to the sacred stillness",
    description: "A deeply restorative session of yin yoga, pranayama, and mindfulness: a journey into total relaxation.",
    fact: "Gentle · stress relief, mental clarity, deep tissue release",
    tone: "zen",
  },
];

// start: minutes after midnight in Bali (WITA); evening times are not published.
export const schedule = {
  slots: [
    { key: "morning", label: "Morning", time: "07:00 – 08:30", start: 7 * 60, end: 8 * 60 + 30 },
    { key: "afternoon", label: "Afternoon", time: "16:30 – 17:45", start: 16 * 60 + 30, end: 17 * 60 + 45 },
    { key: "evening", label: "Evening", time: null, start: null, end: null },
  ],
  days: [
    { day: "Monday", morning: ["Vinyasa Flow", "Setting Intentions & Solar Awakening"], afternoon: ["Yin Yoga", "Deep Tissue Release & Grounding"], evening: null },
    { day: "Tuesday", morning: ["Ashtanga Led", "Building Heat & Core Strength"], afternoon: ["Pranayama & Nidra"], evening: ["Sound Healing"] },
    { day: "Wednesday", morning: ["Hatha Yoga", "Alignment, Balance & Stability"], afternoon: ["Gentle Flow & Restorative", "Calming the Nervous System"], evening: ["Trataka Meditation"] },
    { day: "Thursday", morning: ["Creative Vinyasa", "Heart Openers & Backbends"], afternoon: ["Myofascial Release", "Yin with Yoga Therapy"], evening: ["Devotional Chanting"] },
    { day: "Friday", morning: ["Chakra Flow", "Balancing the 7 Energy Centers"], afternoon: ["Decompression Stretch", "Hip Openers & Twists"], evening: ["Yoga Nidra", "Deep Conscious Relaxation"] },
    { day: "Saturday", morning: ["Power Yoga", "Strength, Sweat & Celebration"], afternoon: ["Slow Flow & Mudras", "Mindful Hand Gestures & Movement"], evening: ["Closing Circle", "Gratitude & Reflection Ceremony"] },
    { day: "Sunday", dayNote: "Special workshops may also run on Sundays. Ask the studio.", morning: ["Spiritual Morning Flow", "Gentle Integration & Movement"], afternoon: ["Free Afternoon / Self-Study", "Pranayama & Nidra"], evening: null },
  ],
};

export const pricing = [
  {
    id: "drop-ins",
    group: "Drop-ins",
    items: [
      { name: "Single class", price: "160,000", usd: "10", details: "Any 75 or 90-minute morning or afternoon class." },
      { name: "Sound healing", price: "200,000", usd: "13", details: "Evening ritual: Sound Healing, Kirtan or Trataka." },
    ],
  },
  {
    id: "packages",
    group: "Class packages",
    note: "Packages include morning, afternoon and evening ritual sessions, and can’t be extended unless a medical certificate is provided.",
    items: [
      { name: "3-class pass", price: "450,000", usd: "29", details: "Valid for 7 days." },
      { name: "5-class pass", price: "700,000", usd: "45", details: "Validity period confirmed when you book." },
      { name: "Unlimited weekly", price: "1,100,000", usd: "70", details: "Every session for 7 days." },
    ],
  },
  {
    id: "private",
    group: "Private sessions",
    items: [
      { name: "Private 1-on-1 yoga or yoga therapy", price: "950,000", usd: "60", details: "Per session." },
      { name: "Private group, up to 4 people", price: "1,500,000", usd: "95", details: "Per session." },
    ],
  },
  {
    id: "masterclass",
    group: "Masterclass",
    items: [
      {
        name: "Quantum NLP & Hypnotherapy",
        price: null,
        details: "Rewrite your reality from the subconscious up. Format, dates and price on request.",
        topic: "the Quantum NLP & Hypnotherapy masterclass",
      },
    ],
  },
];

// The booking policy and in-shala guidelines (from the studio's SOP), as the steps of a first visit.
export const moments = [
  { title: "Book ahead", text: "Reserve your slot on WhatsApp at least 3 hours before. Walk-ins only if a slot is free.", image: "lantern" },
  { title: "Fill in the intake", text: "Your details, experience, health history and the waiver, for a safe and rewarding practice.", image: "tiles", form: true },
  { title: "Pay before class", text: "Full payment or package deduction is settled before you enter the yoga room.", image: "statue" },
  { title: "Arrive early", text: "Come 10–15 minutes before to check in. Latecomers of more than 5 minutes cannot join.", image: "gazebo" },
  { title: "Shoes off, phone silent", text: "Outdoor shoes stay on the racks outside. Phones go silent, without vibration, in your bag.", image: "rail" },
  { title: "Tell your teacher", text: "Mention any injury, condition or pregnancy, and whether you prefer no hands-on adjustments.", image: "water" },
  { title: "Cancel in time", text: "At least 4 hours before. Late cancellations forfeit the session, or a penalty applies on unlimited passes.", image: "flowers" },
];

export const studio = {
  facilities: "Lockers for your valuables, racks for your shoes, and sanitizing spray for mats and blocks.",
  rental: "The shala is available to rent for workshops, classes and retreats.",
};

const img = (base, widths, width, height, alt) => ({ base: `/images/${base}`, widths, width, height, alt });

export const images = {
  hero: img("hero", [1024, 1536], 1536, 960, "Inside the Vana Kanaka shala: a patterned tile floor under an amber ceiling, leading to the carved Vana Kanaka sign between gold statues."),
  heroMobile: img("hero-m", [600, 900], 900, 1600, "Inside the Vana Kanaka shala: a patterned tile floor under an amber ceiling, leading to the carved sign."),
  about: img("about-lawn", [800, 1280], 1280, 800, "The rooftop lawn beside a Balinese gazebo, with carved statues and tropical plants."),
  classes: {
    power: img("class-power", [720, 1200], 1200, 900, "The shala floor from one corner, with a wooden pillar, amber ceiling and garden beyond."),
    zen: img("class-zen", [720, 1200], 1204, 903, "The open-sided shala above the green lawn under a blue sky, with bougainvillea in front."),
  },
  schedule: img("schedule-sign", [560, 900], 900, 1125, "The Vana Kanaka sign on a marble platform, guarded by two gold Balinese statues."),
  pricing: img("pricing-pool", [480, 800], 800, 1000, "The pool seen from above, with steps leading into the water."),
  studio: [
    {
      desktop: img("studio-lawn", [1024, 1536], 1536, 960, "The shala's pavilion roof above the rooftop lawn, lined with statues and potted bougainvillea."),
      mobile: img("studio-lawn-m", [600, 864], 864, 1536, ""),
    },
    {
      desktop: img("studio-pool", [1024, 1536], 1536, 960, "The garden and pool below the building's facade."),
      mobile: img("studio-pool-m", [600, 864], 864, 1536, ""),
    },
    {
      desktop: img("studio-flowers", [1024, 1536], 1536, 960, "Pink bougainvillea in front of the open-sided shala and its lawn."),
      mobile: img("studio-flowers-m", [600, 864], 864, 1536, ""),
    },
  ],
  visit: img("visit", [1024, 1536], 1536, 960, "The open-sided shala with its tiled floor, white balustrades and the sign between gold statues."),
  visitMobile: img("visit-m", [600, 1000], 1000, 1250, ""),
  moments: {
    lantern: img("moment-lantern", [480], 480, 600, "A woven lantern hanging from the shala's amber ceiling."),
    tiles: img("moment-tiles", [480], 480, 600, "Close-up of the shala's patterned floor tiles."),
    statue: img("moment-statue", [440], 440, 550, "A gold and white Balinese statue beside a pillar."),
    gazebo: img("moment-gazebo", [480], 480, 600, "The green tiled roof of the gazebo against the sky."),
    rail: img("moment-rail", [480], 480, 600, "White balustrades and planting at the edge of the shala."),
    water: img("moment-water", [480], 480, 600, "Steps leading down into the pool."),
    flowers: img("moment-flowers", [480], 480, 600, "Pink bougainvillea flowers in close-up."),
  },
};
