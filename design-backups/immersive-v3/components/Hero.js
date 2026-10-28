import Picture from "./Picture";
import { images, location } from "@/lib/content";
import styles from "./Hero.module.css";

// One full-bleed photograph of the shala; the name sits along its lower edge like a film title.
export default function Hero() {
  return (
    <section id="top" className={`on-dark ${styles.hero}`} aria-labelledby="hero-title">
      <div className={styles.media} data-hero-image>
        <Picture image={images.hero} mobile={images.heroMobile} priority sizes="100vw" className={styles.photo} />
      </div>
      <div className={styles.scrim} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <h1 id="hero-title" className={styles.title}>
          <span className="mask-line">
            <span data-line>Vana Kanaka</span>
          </span>
          <span className={`mask-line ${styles.step}`}>
            <span data-line>Yoga Bali</span>
          </span>
        </h1>
        <div className={styles.aside} data-hero>
          <p>
            A yoga shala in {location.area}, South Bali.
          </p>
          <a className="btn btn-gold" href="#classes">
            Explore classes
          </a>
        </div>
      </div>
    </section>
  );
}
