import Picture from "./Picture";
import NowInKutuh from "./NowInKutuh";
import { heroLead, images, location, schedule, whyText } from "@/lib/content";
import styles from "./About.module.css";

export default function About() {
  const [morning, afternoon] = schedule.slots;
  return (
    <section id="about" className={`section ${styles.about}`} aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.head}>
          <h2 id="about-title" data-reveal>
            Why Vana Kanaka?
          </h2>
          <p className={styles.lead} data-reveal>
            {heroLead}
          </p>
        </div>

        <figure className={styles.photo} data-reveal-img>
          <Picture image={images.about} sizes="(min-width: 64em) 60vw, 100vw" className={styles.image} />
          <figcaption className={styles.block}>{whyText}</figcaption>
        </figure>

        <div className={styles.side}>
          <div className={styles.tile} data-reveal>
            <NowInKutuh />
          </div>
          <dl className={styles.facts} data-reveal>
            <div>
              <dt>Where</dt>
              <dd>{location.area}</dd>
            </div>
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
              <dd>Time to be confirmed</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
