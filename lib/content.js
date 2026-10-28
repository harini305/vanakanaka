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
  { id: "about", label: "About" },
  { id: "classes", label: "Classes" },
  { id: "schedule", label: "Schedule" },
  { id: "pricing", label: "Pricing" },
  { id: "studio", label: "Studio" },
  { id: "intake", label: "Intake" },
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

export const whyItems = [
  { title: "Sacred Space", text: "A beautifully designed studio in Kutuh, offering a peaceful escape from the hustle.", icon: "temple" },
  {
    title: "Expert Guidance",
    text: "Our instructors are dedicated to supporting your journey, whether you are a beginner or an advanced practitioner.",
    icon: "guidance",
  },
  { title: "Inclusive Community", text: "We welcome every body, every age, and every level. No flexibility required—only an open heart.", icon: "community" },
];

export const signatureClasses = [
  {
    name: "Kanaka Power",
    tagline: "Ignite your inner fire",
    description: "A dynamic and energizing Vinyasa-based flow designed to build heat, strength, and stamina.",
    tags: ["High intensity", "Core strength", "Flexibility", "Detoxification"],
    tone: "power",
  },
  {
    name: "Vana Zen",
    tagline: "Surrender to the sacred stillness",
    description: "A deeply restorative session of yin yoga, pranayama, and mindfulness: a journey into total relaxation.",
    tags: ["Low / gentle", "Stress relief", "Mental clarity", "Deep tissue release"],
    tone: "zen",
  },
];

export const masterclass = {
  title: "Quantum NLP & Hypnotherapy",
  subtitle: "Rewrite Your Reality from the Subconscious Up",
  note: "Format, dates and pricing are confirmed directly with the studio.",
};

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
    { day: "Sunday", morning: ["Spiritual Morning Flow", "Gentle Integration & Movement"], afternoon: ["Free Afternoon / Self-Study", "Pranayama & Nidra"], evening: null },
  ],
  notes: ["Evening times to be confirmed when you book", "Special workshops may also run on Sundays"],
};

export const pricing = [
  {
    id: "drop-ins",
    group: "Drop-ins",
    icon: "mat",
    items: [
      { name: "Single class", price: "160,000", usd: "10", details: "Any 75 or 90-minute morning or afternoon class" },
      { name: "Sound healing", price: "200,000", usd: "13", details: "Evening ritual: Sound Healing, Kirtan or Trataka" },
    ],
  },
  {
    id: "packages",
    group: "Class packages",
    icon: "group",
    items: [
      { name: "3-class pass", price: "450,000", usd: "29", details: "Valid for 7 days" },
      { name: "5-class pass", price: "700,000", usd: "45", details: "Validity confirmed when you book" },
      { name: "Unlimited weekly", price: "1,100,000", usd: "70", details: "Every session for 7 days" },
    ],
  },
  {
    id: "private",
    group: "Private sessions",
    icon: "person",
    items: [
      { name: "Private 1-on-1 yoga / yoga therapy", price: "950,000", usd: "60", details: "Per session" },
      { name: "Private group, up to 4 people", price: "1,500,000", usd: "95", details: "Per session" },
    ],
  },
];

export const bookingTerms = [
  "Book on WhatsApp at least 3 hours ahead; walk-ins only if a slot is free.",
  "Cancel at least 4 hours before class. Late cancellations and no-shows forfeit the session (1 credit) or incur a penalty on unlimited passes.",
  "Packages include morning, afternoon and evening ritual sessions; no extensions without a medical certificate.",
  "Arrive 10–15 minutes early. Latecomers of more than 5 minutes cannot join.",
  "Payment or package deduction is settled before entering the yoga room.",
];

export const studio = {
  facilities: [
    "Lockers are provided for your valuables",
    "Outdoor shoes stay on the racks outside the studio",
    "Sanitizing sprays to wipe down mats and blocks",
  ],
  rental: ["Your practice deserves the perfect space", "A fully-equipped, serene yoga shala", "For workshops, classes, and retreats"],
};

export const intake = {
  intro: "Please take a few moments to fill out this form to ensure a safe and rewarding practice.",
  covers: ["Personal information", "Emergency contact", "Yoga & fitness experience", "Your goals", "Health & medical history", "Liability waiver"],
  shala: [
    "Tell the instructor about any injury, condition or pregnancy",
    "Switch your phone to silent and keep it in your bag",
    "Instructors may offer hands-on adjustments; say if you prefer none",
  ],
  shalaNote: "Yoga is non-competitive. Never force a posture.",
  steps: [
    { title: "Print", text: "Print the completed form" },
    { title: "Save as PDF", text: "Save a digital copy for your records" },
    { title: "WhatsApp", text: "Message the studio to arrange how to share it" },
  ],
};

const img = (base, widths, width, height, alt) => ({ base: `/images/${base}`, widths, width, height, alt });

export const images = {
  hero: img("m-hero", [640, 1000], 1000, 1333, "The open-sided Vana Kanaka shala above the green lawn under a blue sky, with bougainvillea in front."),
  why: img("m-why", [640, 1000], 1000, 1250, "Inside the shala: a patterned tile floor under an amber ceiling, leading to the carved Vana Kanaka sign."),
  whyInset: img("m-why-inset", [480, 800], 800, 600, "The rooftop lawn beside a Balinese gazebo, with carved statues and tropical plants."),
  classes: {
    power: img("m-power", [480, 800], 800, 960, "The shala floor from one corner, with a wooden pillar, amber ceiling and the sign beyond."),
    zen: img("m-zen", [480, 800], 800, 960, "The shala's pavilion roof above the rooftop lawn, lined with statues and flowers."),
  },
  schedule: img("m-schedule", [560, 900], 900, 1200, "The Vana Kanaka sign on a marble platform, guarded by two gold Balinese statues."),
  studioWide: img("m-studio-wide", [1000, 1536], 1536, 591, "The practice floor facing the carved Vana Kanaka sign between gold statues."),
  studioPool: img("m-studio-pool", [600, 900], 900, 450, "The pool and garden below the building's facade."),
  studioLawn: img("m-studio-lawn", [600, 900], 900, 450, "Pink bougainvillea in front of the open-sided shala and its lawn."),
  contact: img("m-contact", [560, 900], 900, 1200, "The open-sided shala with its tiled floor, white balustrades and the sign between gold statues."),
};
