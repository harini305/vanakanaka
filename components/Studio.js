import Picture from "./Picture";
import { WHATSAPP_DISPLAY, images, studio, whatsappLink } from "@/lib/content";
import styles from "./Studio.module.css";

function Framed({ image, sizes, caption, className }) {
  return (
    <figure className={`${styles.figure} ${className ?? ""}`}>
      <div className={`notch-frame ${styles.frame}`} data-reveal-img>
        <div className={`notched ${styles.photo}`}>
          <Picture image={image} sizes={sizes} className={styles.image} />
        </div>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function Studio() {
  return (
    <section id="studio" className={`section ${styles.studio}`} aria-labelledby="studio-title">
      <div className="container">
        <div className={styles.head}>
          <h2 id="studio-title" className="title" data-reveal>
            The Studio
          </h2>
          <div className="ornament center" aria-hidden="true">
            <span />
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.gallery}>
            <Framed image={images.studioWide} sizes="(min-width: 64em) 52vw, 92vw" caption="The shala floor and the Vana Kanaka sign" className={styles.wide} />
            <Framed image={images.studioPool} sizes="(min-width: 64em) 26vw, 46vw" caption="The pool and garden" />
            <Framed image={images.studioLawn} sizes="(min-width: 64em) 26vw, 46vw" caption="Bougainvillea and the rooftop lawn" />
          </div>

          <div className={styles.info} data-reveal>
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>Lockers • Outdoor shoes</h3>
              <ul>
                {studio.facilities.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>Yoga shala • Available for rent</h3>
              <ul>
                {studio.rental.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <a className="btn btn-terracotta" href={whatsappLink("renting the yoga shala")} target="_blank" rel="noopener noreferrer">
              Ask about shala rental<span className="visually-hidden"> on WhatsApp (opens in a new tab)</span>
            </a>
            <p className={styles.footnote}>
              For bookings &amp; inquiries • WhatsApp {WHATSAPP_DISPLAY}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
