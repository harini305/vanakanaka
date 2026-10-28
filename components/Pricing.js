import Icon from "./Icon";
import { bookingTerms, pricing, whatsappLink } from "@/lib/content";
import styles from "./Pricing.module.css";

// A leafy sprig used as a corner ornament: a curved stem with alternating leaves.
const LEAVES = [
  [30, 96, -35], [42, 84, 55], [52, 70, -40], [64, 60, 50], [72, 46, -45], [84, 38, 45], [92, 24, -50],
];

function Sprig({ className }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      <path d="M18 112C40 90 70 60 104 12" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {LEAVES.map(([x, y, r], i) => (
        <path
          key={i}
          d="M0 0C6-8 18-10 26 0C18 10 6 8 0 0z"
          transform={`translate(${x} ${y}) rotate(${r})`}
          fill="currentColor"
          fillOpacity={i % 2 ? 0.55 : 0.85}
        />
      ))}
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className={`section ${styles.pricing}`} aria-labelledby="pricing-title">
      <span className={`${styles.corner} ${styles.cornerLeft}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.cornerRight}`} aria-hidden="true" />
      <Sprig className={`${styles.sprig} ${styles.sprigLeft}`} />
      <Sprig className={`${styles.sprig} ${styles.sprigRight}`} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <h2 id="pricing-title" className={styles.title} data-reveal>
            Pricing &amp; Passes
          </h2>
          <span className={styles.headRule} aria-hidden="true" />
          <p className={styles.sub} data-reveal>
            All prices in IDR • USD amounts are approximate •{" "}
            <a className={styles.subLink} href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Book on WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </p>
        </div>

        <div className={styles.cards}>
          {pricing.map((group) => (
            <div key={group.id} className={`notch-frame ${styles.frame}`} data-reveal>
              <section className={`notched ${styles.card}`} aria-labelledby={`price-${group.id}`}>
                <div className={styles.cardHead}>
                  <Icon name={group.icon} className={styles.icon} />
                  <h3 id={`price-${group.id}`} className={styles.group}>
                    {group.group}
                  </h3>
                </div>
                <span className={styles.groupRule} aria-hidden="true" />
                <ul className={styles.items}>
                  {group.items.map((item) => (
                    <li key={item.name} className={styles.item}>
                      <div className={styles.itemText}>
                        <span className={styles.name}>{item.name}</span>
                        <span className={styles.details}>
                          {item.details} · <span className={styles.usd}>≈ ${item.usd} USD</span>
                        </span>
                      </div>
                      <span className={styles.amount}>{item.price}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          ))}
        </div>

        <div className={`notch-frame ${styles.termsFrame}`} data-reveal>
          <div className={`notched ${styles.terms}`}>
            <h3 className={styles.termsTitle}>
              <Icon name="lotus" className={styles.termsIcon} />
              Booking &amp; cancellation
            </h3>
            <ul className={styles.termsList}>
              {bookingTerms.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
