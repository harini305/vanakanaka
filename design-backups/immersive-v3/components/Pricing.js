import Picture from "./Picture";
import { images, pricing, whatsappLink } from "@/lib/content";
import styles from "./Pricing.module.css";

// Prices set the way a good menu sets them: name left, price right, space between.
export default function Pricing() {
  return (
    <section id="pricing" className={`section ${styles.pricing}`} aria-labelledby="pricing-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.aside}>
          <h2 id="pricing-title" data-reveal>
            Prices &amp; passes
          </h2>
          <p className="soft small" data-reveal>
            In Indonesian rupiah. US dollar amounts are approximate.
          </p>
          <figure className={styles.photo} data-reveal-img>
            <Picture image={images.pricing} sizes="(min-width: 64em) 22vw, 60vw" className={styles.image} />
          </figure>
          <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noopener noreferrer" data-reveal>
            Book on WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>

        <div className={styles.menu}>
          {pricing.map((group) => (
            <section key={group.id} className={styles.group} aria-labelledby={`price-${group.id}`} data-reveal>
              <h3 id={`price-${group.id}`} className={styles.groupName}>
                {group.group}
                {group.items.some((i) => i.price) && <span className={styles.currency}> · IDR</span>}
              </h3>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item.name} className={styles.item}>
                    <p className={styles.row}>
                      <span className={styles.name}>{item.name}</span>
                      {item.price ? (
                        <span className={styles.price}>{item.price}</span>
                      ) : (
                        <a className={styles.ask} href={whatsappLink(item.topic)} target="_blank" rel="noopener noreferrer">
                          Ask<span className="visually-hidden"> about the {item.name} masterclass on WhatsApp (opens in a new tab)</span>
                        </a>
                      )}
                    </p>
                    <p className={styles.details}>
                      {item.details}
                      {item.usd && <span className={styles.usd}> About US${item.usd}.</span>}
                    </p>
                  </li>
                ))}
              </ul>
              {group.note && <p className={styles.note}>{group.note}</p>}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
