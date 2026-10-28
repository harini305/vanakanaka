import Icon from "./Icon";
import IntakeForm from "./IntakeForm";
import { intake } from "@/lib/content";
import styles from "./Intake.module.css";

const STEP_ICONS = ["printer", "pdf", null];

export default function Intake() {
  return (
    <section id="intake" className={`section ${styles.intake}`} aria-labelledby="intake-title">
      <div className="container">
        <div className={styles.head}>
          <h2 id="intake-title" className="title" data-reveal>
            Client Intake
          </h2>
          <p className={styles.intro} data-reveal>
            {intake.intro}
          </p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card} data-reveal>
            <h3 className={styles.cardTitle}>
              <Icon name="clipboard" className={styles.cardIcon} />
              The form covers
            </h3>
            <ul className={styles.covers}>
              {intake.covers.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <div className={styles.shala}>
              <h4 className={styles.shalaTitle}>
                <Icon name="leaf" className={styles.shalaIcon} />
                In the shala
              </h4>
              <ul>
                {intake.shala.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className={styles.shalaNote}>{intake.shalaNote}</p>
            </div>
          </div>

          <IntakeForm cardClassName={`${styles.card} ${styles.submitCard}`}>
            <h3 className={styles.cardTitle}>
              <Icon name="share" className={styles.cardIcon} />
              How submission works
            </h3>
            <ol className={styles.steps}>
              {intake.steps.map((step, i) => (
                <li key={step.title} className={styles.step}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    {STEP_ICONS[i] ? <Icon name={STEP_ICONS[i]} /> : i + 1}
                  </span>
                  <span>
                    <span className={styles.stepTitle}>{step.title}</span>
                    <span className={styles.stepText}>{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </IntakeForm>
        </div>
      </div>
    </section>
  );
}
