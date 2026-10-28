import Icon from "./Icon";
import Picture from "./Picture";
import { images, schedule, whatsappLink } from "@/lib/content";
import styles from "./Schedule.module.css";

export default function Schedule() {
  return (
    <section id="schedule" className={`section on-dark ${styles.schedule}`} aria-labelledby="schedule-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.visual}>
          <div className={`arch-frame ${styles.arch}`}>
            <div className={styles.photo} data-reveal-img>
              <Picture image={images.schedule} sizes="(min-width: 64em) 30vw, 80vw" className={styles.image} />
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.head}>
            <h2 id="schedule-title" className="title" data-reveal>
              Weekly Schedule
            </h2>
            <div className="ornament center" aria-hidden="true">
              <span />
            </div>
          </div>

          <table className={styles.table} data-reveal>
            <caption className="visually-hidden">Weekly class schedule, Monday to Sunday</caption>
            <thead>
              <tr>
                <td />
                {schedule.slots.map((slot) => (
                  <th scope="col" key={slot.key}>
                    {slot.label}
                    <span className={styles.time}>{slot.time ?? "Time TBC"}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.days.map((d) => (
                <tr key={d.day}>
                  <th scope="row">{d.day}</th>
                  {schedule.slots.map((slot) => (
                    <td key={slot.key} data-label={`${slot.label}${slot.time ? ` · ${slot.time}` : ""}`}>
                      {d[slot.key] ? d[slot.key][0] : <span className={styles.rest}>Rest / open</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.footer}>
            <a className="btn btn-gold" href={whatsappLink("booking a class from the weekly schedule")} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" />
              Book a class on WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
            <p className={styles.notes}>{schedule.notes.join(" • ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
