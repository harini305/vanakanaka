import Icon from "./Icon";
import Picture from "./Picture";
import { images, location, schedule, whatsappLink } from "@/lib/content";
import styles from "./Hero.module.css";

export default function Hero() {
  const [morning, afternoon] = schedule.slots;
  return (
    <section id="top" className={`section ${styles.hero}`} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <div className={styles.brand} data-hero>
            <img src="/images/mark-176.webp" alt="" width="88" height="88" className={styles.mark} />
            <h1 id="hero-title" className={styles.name}>
              Vana Kanaka
              <span className={styles.sub}>Yoga Bali</span>
            </h1>
            <span className={styles.rule} aria-hidden="true" />
          </div>

          <p className={styles.statement} data-hero>
            Experience a sacred wilderness in the heart of South Bali.
          </p>
          <p className={styles.support} data-hero>
            A sanctuary designed to harmonize your inner strength with profound stillness.
          </p>

          <ul className={styles.facts} data-hero>
            <li className={styles.factWide}>
              <Icon name="pin" className={styles.factIcon} />
              <span>{location.area}, Bali</span>
            </li>
            <li>
              <Icon name="sun" className={styles.factIcon} />
              <span>
                Morning
                <br />
                {morning.time}
              </span>
            </li>
            <li>
              <Icon name="sunset" className={styles.factIcon} />
              <span>
                Afternoon
                <br />
                {afternoon.time}
              </span>
            </li>
          </ul>

          <div className={styles.actions} data-hero>
            <a className="btn btn-primary" href="#classes">
              Explore Classes
            </a>
            <a className="btn btn-outline" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" />
              Book via WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className="arch-frame">
            <div className={styles.photo} data-hero-image>
              <Picture image={images.hero} priority sizes="(min-width: 64em) 38vw, 90vw" className={styles.image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
