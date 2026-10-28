import Icon from "./Icon";
import Picture from "./Picture";
import { images, masterclass, signatureClasses, whatsappLink } from "@/lib/content";
import styles from "./Classes.module.css";

export default function Classes() {
  return (
    <section id="classes" className={`section ${styles.classes}`} aria-labelledby="classes-title">
      <div className="container">
        <div className={styles.head}>
          <h2 id="classes-title" className="title" data-reveal>
            Signature Classes
          </h2>
          <div className="ornament center" aria-hidden="true">
            <span />
          </div>
        </div>

        <div className={styles.cards}>
          {signatureClasses.map((item) => (
            <article key={item.name} className={`${styles.card} ${styles[item.tone]}`} aria-labelledby={`class-${item.tone}`} data-reveal>
              <div className={`arch-frame ${styles.arch}`}>
                <div className={styles.photo}>
                  <Picture image={images.classes[item.tone]} sizes="(min-width: 48em) 20vw, 60vw" className={styles.image} />
                </div>
              </div>
              <h3 id={`class-${item.tone}`} className={styles.name}>
                {item.name}
              </h3>
              <p className={styles.tagline}>{item.tagline}</p>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.tags}>{item.tags.join(" · ")}</p>
              <div className={styles.cardRule} aria-hidden="true" />
              <a className={styles.book} href={whatsappLink(`the ${item.name} class`)} target="_blank" rel="noopener noreferrer">
                Book {item.name}
                <Icon name="arrow" className={styles.arrow} />
                <span className="visually-hidden"> on WhatsApp (opens in a new tab)</span>
              </a>
            </article>
          ))}
        </div>

        <div className={`notch-frame ${styles.bannerFrame}`} data-reveal>
          <aside className={`notched ${styles.banner}`} aria-labelledby="masterclass-title">
            <span className={styles.badge} aria-hidden="true">
              <Icon name="lotus" />
            </span>
            <div className={styles.bannerText}>
              <h3 id="masterclass-title" className={styles.bannerTitle}>
                <span className={styles.bannerKicker}>Masterclass</span>
                {masterclass.title}
              </h3>
              <p className={styles.bannerSubtitle}>{masterclass.subtitle}</p>
              <p className={styles.bannerNote}>{masterclass.note}</p>
            </div>
            <a className={`btn ${styles.bannerBtn}`} href={whatsappLink(`the ${masterclass.title} masterclass`)} target="_blank" rel="noopener noreferrer">
              Ask about it
              <Icon name="arrow" />
              <span className="visually-hidden"> on WhatsApp (opens in a new tab)</span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
