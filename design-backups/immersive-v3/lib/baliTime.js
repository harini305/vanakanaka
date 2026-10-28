import { schedule } from "./content";

const FORMAT = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Makassar",
  weekday: "long",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

// Current weekday and time in Bali (WITA, UTC+8), whatever the visitor's own time zone.
export function baliNow(date = new Date()) {
  const parts = Object.fromEntries(FORMAT.formatToParts(date).map((p) => [p.type, p.value]));
  const minutes = Number(parts.hour) * 60 + Number(parts.minute);
  return { weekday: parts.weekday, minutes, clock: `${parts.hour}:${parts.minute}` };
}

const duration = (mins) => {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (!h) return `${m} min`;
  return m ? `${h} h ${m} min` : `${h} h`;
};

const startOf = (slot) => slot.time.split(" – ")[0];
const endOf = (slot) => slot.time.split(" – ")[1];

// What is on in the shala now, or next, from the published schedule.
// Evening times are not published, so an evening ritual is reported without a time.
export function whatsOn(now = baliNow()) {
  const { days } = schedule;
  const [morning, afternoon, evening] = schedule.slots;
  const todayIndex = days.findIndex((d) => d.day === now.weekday);
  const today = days[todayIndex];

  for (const slot of [morning, afternoon]) {
    const entry = today[slot.key];
    if (entry && now.minutes >= slot.start && now.minutes < slot.end) {
      return { kind: "now", label: "On now", name: entry[0], text: `until ${endOf(slot)}` };
    }
  }

  const tonight = today[evening.key];
  if (tonight && now.minutes >= afternoon.end) {
    return { kind: "evening", label: "This evening", name: tonight[0], text: "time to be confirmed" };
  }

  for (let offset = 0; offset < 7; offset++) {
    const day = days[(todayIndex + offset) % 7];
    for (const slot of [morning, afternoon]) {
      const entry = day[slot.key];
      if (!entry || (offset === 0 && slot.start <= now.minutes)) continue;
      const when = offset === 0 ? "today" : offset === 1 ? "tomorrow" : day.day;
      const until = offset * 1440 + slot.start - now.minutes;
      return { kind: "next", label: "Next class", name: entry[0], text: `${when} at ${startOf(slot)}, in ${duration(until)}` };
    }
  }
  return null;
}
