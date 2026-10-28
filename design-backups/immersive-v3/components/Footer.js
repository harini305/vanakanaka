import { WHATSAPP_DISPLAY, location, navItems, social, whatsappLink } from "@/lib/content";
import styles from "./Footer.module.css";

// A designed close: the way to get in touch is the display line.
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={`on-dark ${styles.footer}`} data-site-footer>
      <div className={`container ${styles.top}`}>
        <div className={styles.notes}>
          <p className={styles.wordmark}>Vana Kanaka Yoga Bali</p>
          <p>
            {location.area}, {location.region}
          </p>
          <ul className={styles.social}>
            {social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                  <span className="visually-hidden"> {s.handle} (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a className={styles.toTop} href="/#top">
          Back to top
        </a>
      </div>

      <div className="container">
        <p className={styles.callLabel}>Book and ask on WhatsApp</p>
        <a className={styles.phone} href={whatsappLink()} target="_blank" rel="noopener noreferrer">
          {WHATSAPP_DISPLAY}
          <span className="visually-hidden"> on WhatsApp (opens in a new tab)</span>
        </a>
      </div>

      <div className={`container ${styles.meta}`}>
        <nav aria-label="Footer">
          <ul className={styles.nav}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`/#${item.id}`}>{item.label}</a>
              </li>
            ))}
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </nav>
        <p>© {year} Vana Kanaka Yoga Bali. All rights reserved.</p>
      </div>
    </footer>
  );
}
