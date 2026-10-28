"use client";

import { useEffect, useState } from "react";
import { baliNow, whatsOn } from "@/lib/baliTime";
import styles from "./About.module.css";

// The page's one live thing: local time at the shala and what is on now or next.
// Rendered without a time on the server; the plain fallback below covers no-JS visits.
export default function NowInKutuh() {
  const [state, setState] = useState(null);

  useEffect(() => {
    const tick = () => {
      const now = baliNow();
      setState({ now, on: whatsOn(now) });
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.live} aria-live="polite">
      {state ? (
        <>
          <h3 className={styles.clock}>{state.now.clock} in Kutuh</h3>
          <p className={styles.clockDay}>{state.now.weekday}, Bali time</p>
          {state.on && (
            <p className={styles.next}>
              <span className={styles.nextLabel}>{state.on.label}:</span> {state.on.name}, {state.on.text}.
            </p>
          )}
        </>
      ) : (
        <>
          <h3 className={styles.clock}>Classes in Kutuh</h3>
          <p className={styles.next}>Every morning at 07:00 and afternoon at 16:30, with evening rituals most days.</p>
        </>
      )}
      <a className="text-link" href="#schedule">
        See the day’s classes
      </a>
    </div>
  );
}
