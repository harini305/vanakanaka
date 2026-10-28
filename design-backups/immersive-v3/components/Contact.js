import Picture from "./Picture";
import { images, location, schedule, whatsappLink } from "@/lib/content";
import styles from "./Contact.module.css";

// A full-screen photograph of the shala carrying one solid visit card.
export default function Contact() {
  const [morning, afternoon] = schedule.slots;
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className={styles.media}>
        <Picture image={images.visit} mobile={images.visitMobile} sizes="100vw" className={styles.image} />
      </div>

      <div className={`container ${styles.layout}`}>
        <div className={styles.card} data-reveal>
          <h2 id="contact-title" className={styles.title}>
            Visit the shala
          </h2>
          <p className={styles.address}>
            {location.area}
            <br />
            {location.region}
          </p>
          <dl className={styles.hours}>
            <div>
              <dt>Mornings</dt>
              <dd>{morning.time}</dd>
            </div>
            <div>
              <dt>Afternoons</dt>
              <dd>{afternoon.time}</dd>
            </div>
            <div>
              <dt>Evenings</dt>
              <dd>To be confirmed</dd>
            </div>
          </dl>
          <a className="text-link" href={location.mapsUrl} target="_blank" rel="noopener noreferrer">
            Open in Google Maps<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
          <a className={`btn btn-primary ${styles.book}`} href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            Book on WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
