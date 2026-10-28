import Icon from "./Icon";
import Picture from "./Picture";
import { images, whyItems } from "@/lib/content";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`} aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <h2 id="about-title" className={`title ${styles.heading}`} data-reveal>
          Why Vana Kanaka
        </h2>

        <div className={styles.media}>
          <figure className={styles.main} data-reveal-img>
            <Picture image={images.why} sizes="(min-width: 64em) 36vw, 90vw" className={styles.image} />
          </figure>
          <figure className={styles.inset} data-reveal-img>
            <Picture image={images.whyInset} sizes="(min-width: 64em) 18vw, 45vw" className={styles.image} />
          </figure>
        </div>

        <ul className={styles.list}>
          {whyItems.map((item) => (
            <li key={item.title} className={styles.item} data-reveal>
              <Icon name={item.icon} className={styles.icon} />
              <div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
