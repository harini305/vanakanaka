import IntakeForm from "./IntakeForm";
import Moments from "./Moments";
import styles from "./Intake.module.css";

// The booking policy and studio guidelines told as the steps of a first visit,
// followed by the client intake form.
export default function Intake() {
  return (
    <section id="intake" className={`section ${styles.intake}`} aria-labelledby="intake-title">
      <div className="container">
        <h2 id="intake-title" className={styles.heading} data-reveal>
          Your first visit
        </h2>
        <Moments />
        <IntakeForm />
      </div>
    </section>
  );
}
