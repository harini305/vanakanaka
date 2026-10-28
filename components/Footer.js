import { WHATSAPP_DISPLAY, navItems, whatsappLink } from "@/lib/content";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={`on-dark ${styles.footer}`} data-site-footer>
      <div className={`container ${styles.inner}`}>
        <p className={styles.wordmark}>
          Vana Kanaka
          <span>Yoga Bali</span>
        </p>
        <nav aria-label="Footer">
          <ul className={styles.nav}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`/#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>© {year} Vana Kanaka Yoga Bali. All rights reserved.</p>
        <p className={styles.links}>
          <a className={styles.whatsapp} href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            WhatsApp {WHATSAPP_DISPLAY}
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
          <a href="/privacy-policy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}
