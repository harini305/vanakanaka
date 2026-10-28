"use client";

import { useEffect, useState } from "react";
import Picture from "./Picture";
import { baliNow } from "@/lib/baliTime";
import { images, schedule, whatsappLink } from "@/lib/content";
import styles from "./Schedule.module.css";

export default function Schedule() {
  // Until hydration every day is shown, so the full week works without JavaScript.
  const [selected, setSelected] = useState(null);
  const [today, setToday] = useState(null);

  useEffect(() => {
    const { weekday } = baliNow();
    setToday(weekday);
    setSelected(weekday);
  }, []);

  return (
    <section id="schedule" className={`section on-dark ${styles.schedule}`} aria-labelledby="schedule-title">
      <div className={`container ${styles.grid}`}>
        <h2 id="schedule-title" className={styles.heading} data-reveal>
          Daily practice journey
        </h2>

        <figure className={styles.photo} data-reveal-img>
          <Picture image={images.schedule} sizes="(min-width: 64em) 30vw, 60vw" className={styles.image} />
        </figure>

        <div className={styles.timetable} data-reveal>
          {selected && (
            <div className={styles.picker} role="group" aria-label="Choose a day">
              {schedule.days.map((d) => (
                <button
                  key={d.day}
                  type="button"
                  className={styles.dayButton}
                  aria-pressed={selected === d.day}
                  onClick={() => setSelected(d.day)}
                >
                  <span aria-hidden="true">{d.day.slice(0, 3)}</span>
                  <span className="visually-hidden">{d.day}</span>
                  {today === d.day && <span className={styles.today}>Today</span>}
                </button>
              ))}
            </div>
          )}

          {schedule.days.map((d) => (
            <div key={d.day} className={styles.day} hidden={selected ? selected !== d.day : undefined}>
              <h3 className={styles.dayName}>{d.day}</h3>
              <ul className={styles.rows}>
                {schedule.slots.map((slot) => {
                  const entry = d[slot.key];
                  return (
                    <li key={slot.key} className={styles.row}>
                      <span className={styles.kind}>{slot.label}</span>
                      <span className={styles.class}>
                        {entry ? (
                          <>
                            <span className={styles.className}>{entry[0]}</span>
                            {entry[1] && <span className={styles.note}>{entry[1]}</span>}
                          </>
                        ) : (
                          <span className={styles.rest}>Rest / open</span>
                        )}
                      </span>
                      <span className={styles.time}>{entry ? slot.time ?? "Time to be confirmed" : ""}</span>
                    </li>
                  );
                })}
              </ul>
              {d.dayNote && <p className={styles.dayNote}>{d.dayNote}</p>}
            </div>
          ))}

          <a className="btn btn-gold" href={whatsappLink("booking a class from the weekly schedule")} target="_blank" rel="noopener noreferrer">
            Book a class on WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
