import Picture from "./Picture";
import { images, signatureClasses, whatsappLink } from "@/lib/content";
import styles from "./Classes.module.css";

// Two fields side by side: heat (olive) and stillness (sand), each led by its photograph.
export default function Classes() {
  return (
    <section id="classes" className={styles.classes} aria-labelledby="classes-title">
      {signatureClasses.map((item, i) => (
        <article key={item.name} className={`${styles.panel} ${styles[item.tone]}`} aria-labelledby={`class-${item.tone}`}>
          {i === 0 && (
            <h2 id="classes-title" className={styles.heading} data-reveal>
              Signature classes
            </h2>
          )}
          <figure className={styles.photo} data-reveal-img>
            <Picture image={images.classes[item.tone]} sizes="(min-width: 48em) 50vw, 100vw" className={styles.image} />
          </figure>
          <div className={styles.body} data-reveal>
            <div className={styles.text}>
              <h3 id={`class-${item.tone}`} className={styles.name}>
                {item.name}
              </h3>
              <p className={styles.tagline}>{item.tagline}</p>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.fact}>{item.fact}</p>
            </div>
            <div className={styles.actions}>
              <a className={`btn ${item.tone === "power" ? "btn-paper" : "btn-primary"}`} href={whatsappLink(`the ${item.name} class`)} target="_blank" rel="noopener noreferrer">
                Book {item.name}
                <span className="visually-hidden"> on WhatsApp (opens in a new tab)</span>
              </a>
              <a className={styles.secondary} href="#schedule">
                See the schedule
              </a>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
