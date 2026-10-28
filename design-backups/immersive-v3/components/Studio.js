import Picture from "./Picture";
import { images, studio, whatsappLink } from "@/lib/content";
import styles from "./Studio.module.css";

// Three full-screen photographs in sequence, each with one caption.
export default function Studio() {
  const [lawn, pool, flowers] = images.studio;
  return (
    <section id="studio" className={`on-dark ${styles.studio}`} aria-labelledby="studio-title">
      <div className={styles.frame}>
        <Picture image={lawn.desktop} mobile={lawn.mobile} sizes="100vw" className={styles.image} />
        <div className={`container ${styles.caption}`} data-reveal>
          <h2 id="studio-title" className={styles.title}>
            The studio
          </h2>
          <p>{studio.facilities}</p>
        </div>
      </div>

      <div className={styles.frame}>
        <Picture image={pool.desktop} mobile={pool.mobile} sizes="100vw" className={styles.image} />
        <div className={`container ${styles.caption}`} data-reveal>
          <p>The garden and pool below the building.</p>
        </div>
      </div>

      <div className={styles.frame}>
        <Picture image={flowers.desktop} mobile={flowers.mobile} sizes="100vw" className={styles.image} />
        <div className={`container ${styles.caption}`} data-reveal>
          <p>{studio.rental}</p>
          <a className="btn btn-gold" href={whatsappLink("renting the yoga shala")} target="_blank" rel="noopener noreferrer">
            Ask about shala rental<span className="visually-hidden"> on WhatsApp (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
