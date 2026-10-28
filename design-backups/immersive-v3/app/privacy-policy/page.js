import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/content";
import styles from "./privacy.module.css";

export const metadata = {
  title: "Privacy Policy | Vana Kanaka Yoga Bali",
  description: "How the Vana Kanaka Yoga Bali website handles information. The studio's full policy is being updated.",
};

// The original policy conflicts with the intake form (see docs/source-audit/08 A7),
// so it is not republished. This page only states verifiable facts about this site.
export default function PrivacyPolicy() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" className={`section ${styles.page}`}>
        <article className={`container ${styles.article}`}>
          <h1>Privacy Policy</h1>
          <p className={styles.notice}>
            The studio’s privacy policy is being reviewed and will be published here once it is updated. Until then,
            this page describes how this website itself handles information.
          </p>

          <h2>This website</h2>
          <ul>
            <li>There are no user accounts, sign-ups or payments on this website.</li>
            <li>
              The client intake form keeps your answers in your browser only. They are not sent to the studio or stored
              anywhere by this website. You choose whether to print, save or copy them.
            </li>
            <li>This website does not use analytics or advertising trackers.</li>
          </ul>

          <h2>External links</h2>
          <p>
            Booking links open WhatsApp, and other links lead to Instagram, Facebook, TikTok and Google Maps. These
            platforms have their own privacy policies, which apply when you use them.
          </p>

          <h2>Questions</h2>
          <p>
            For any questions, contact the studio on{" "}
            <a className="text-link" href={whatsappLink("a privacy question")} target="_blank" rel="noopener noreferrer">
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            .
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
