import Icon from "./Icon";
import Picture from "./Picture";
import { WHATSAPP_DISPLAY, images, location, schedule, social, whatsappLink } from "@/lib/content";
import styles from "./Contact.module.css";

export default function Contact() {
  const [morning, afternoon] = schedule.slots;
  return (
    <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.visual}>
          <div className="arch-frame">
            <div className={styles.photo} data-reveal-img>
              <Picture image={images.contact} sizes="(min-width: 64em) 30vw, 80vw" className={styles.image} />
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <h2 id="contact-title" className="title" data-reveal>
            Visit the Shala
          </h2>
          <div className="ornament" aria-hidden="true">
            <span />
          </div>

          <ul className={styles.details} data-reveal>
            <li>
              <Icon name="pin" className={styles.icon} />
              <span>
                <span className={styles.label}>Location</span>
                {location.area}, {location.region}
                <br />
                <a className="text-link" href={location.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Open in Google Maps<span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </span>
            </li>
            <li>
              <Icon name="whatsapp" className={styles.icon} />
              <span>
                <span className={styles.label}>WhatsApp</span>
                <a className={styles.phone} href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  {WHATSAPP_DISPLAY}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </span>
            </li>
            <li>
              <Icon name="sun" className={styles.icon} />
              <span>
                <span className={styles.label}>Classes</span>
                Mornings {morning.time} · Afternoons {afternoon.time}
                <br />
                Evening times to be confirmed when you book
              </span>
            </li>
            <li>
              <Icon name="leaf" className={styles.icon} />
              <span>
                <span className={styles.label}>Follow</span>
                {social.map((s, i) => (
                  <span key={s.label}>
                    {i > 0 && " · "}
                    <a className="text-link" href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label}
                      <span className="visually-hidden"> {s.handle} (opens in a new tab)</span>
                    </a>
                  </span>
                ))}
              </span>
            </li>
          </ul>

          <a className="btn btn-terracotta" href={whatsappLink()} target="_blank" rel="noopener noreferrer" data-reveal>
            <Icon name="whatsapp" />
            Book via WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
