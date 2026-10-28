"use client";

import { useEffect, useRef, useState } from "react";
import Picture from "./Picture";
import { images, moments } from "@/lib/content";
import styles from "./Intake.module.css";

// Varying gaps above each photograph make the row's picture edges rise and fall.
const SPACES = ["2rem", "4.5rem", "1rem", "3.5rem", "1.5rem", "4rem", "2.5rem"];

export default function Moments() {
  const rowRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const row = rowRef.current;
    const update = () => {
      const max = row.scrollWidth - row.clientWidth;
      setProgress(max > 0 ? row.scrollLeft / max : 1);
    };
    update();
    row.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      row.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const step = (dir) => {
    const row = rowRef.current;
    const column = row.querySelector("li");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    row.scrollBy({ left: dir * (column ? column.offsetWidth + 24 : 300), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <>
      <div className={styles.bar}>
        <div className={styles.track} aria-hidden="true">
          <span className={styles.fill} style={{ transform: `scaleX(${Math.max(progress, 0.06)})` }} />
        </div>
        <div className={styles.arrows}>
          <button type="button" className={styles.arrow} onClick={() => step(-1)} aria-label="Previous step" disabled={progress <= 0.001}>
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" className={styles.arrow} onClick={() => step(1)} aria-label="Next step" disabled={progress >= 0.999}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <ol ref={rowRef} className={styles.row} tabIndex={0} aria-label="Your first visit, step by step">
        {moments.map((m, i) => (
          <li key={m.title} className={styles.moment}>
            <h3 className={styles.momentTitle}>{m.title}</h3>
            <p className={styles.momentText}>
              {m.text}
              {m.form && (
                <>
                  {" "}
                  <a className="text-link" href="#intake-form">
                    Open the form
                  </a>
                </>
              )}
            </p>
            <figure className={styles.momentPhoto} style={{ marginTop: SPACES[i % SPACES.length] }}>
              <Picture image={images.moments[m.image]} sizes="15rem" className={styles.image} />
            </figure>
          </li>
        ))}
      </ol>
    </>
  );
}
