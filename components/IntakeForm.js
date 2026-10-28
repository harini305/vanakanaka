"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import styles from "./Intake.module.css";

// Field wording follows the original intake form (docs/source-audit/content/yoga-client-intake-form.md).
const RADIOS = {
  experience: { legend: "Have you practiced yoga before?", options: ["Never", "A few times", "Regularly"] },
  activity: {
    legend: "How would you describe your current physical activity level?",
    options: ["Sedentary", "Lightly Active", "Moderately Active", "Highly Active"],
  },
  injuries: { legend: "Do you have any current injuries, chronic pain, or physical limitations?", options: ["No", "Yes"], details: true },
  surgeries: { legend: "Have you had any recent surgeries or major medical conditions?", options: ["No", "Yes"], details: true },
  pregnancy: { legend: "Are you currently pregnant or postpartum?", options: ["No", "Yes"], details: true },
  adjustments: {
    legend: "Do you consent to gentle, hands-on adjustments to assist with alignment?",
    options: ["Yes, I welcome adjustments", "No, verbal cues only"],
  },
};

const CHECKS = {
  goals: {
    legend: "What are your primary goals for this class? (Select all that apply)",
    options: ["Flexibility & Mobility", "Strength & Toning", "Stress Relief / Relaxation", "Injury Management", "Mindfulness / Meditation"],
  },
  conditions: {
    legend: "Do you have, or have you experienced, any of the following? (Select all that apply)",
    options: ["High/Low Blood Pressure", "Asthma / Breathing Needs", "Heart Conditions", "Vertigo / Dizziness", "Arthritis / Joint Issues", "Diabetes"],
  },
};

const WAIVER = [
  "I understand that yoga includes physical movements as well as an opportunity for relaxation, stress reduction, and relief of muscular tension.",
  "As is the case with any physical activity, the risk of injury, even serious or disabling, is always present and cannot be entirely eliminated.",
  "If I experience any pain or discomfort, I will listen to my body, discontinue the activity, and ask the instructor for modifications.",
  "I assume full responsibility for any and all damages which may occur through participation.",
  "Yoga is not a substitute for medical attention, diagnosis, or treatment.",
  "By signing below, I affirm that I am participating voluntarily and agree to the terms listed.",
];

function Radio({ name, values, onChange }) {
  const { legend, options, details } = RADIOS[name];
  return (
    <fieldset className={styles.choice}>
      <legend>
        {legend} <span className={styles.req} aria-hidden="true">*</span>
      </legend>
      <div className={styles.options}>
        {options.map((opt, i) => (
          <label key={opt} className={styles.option}>
            <input type="radio" name={name} value={opt} required={i === 0} checked={values[name] === opt} onChange={onChange} />
            <span>{opt}</span>
          </label>
        ))}
      </div>
      {details && values[name] === "Yes" && (
        <label className={styles.field}>
          <span>If yes, please describe</span>
          <textarea name={`${name}Details`} rows={2} value={values[`${name}Details`] || ""} onChange={onChange} />
        </label>
      )}
    </fieldset>
  );
}

function Checks({ name, values, onChange }) {
  const { legend, options } = CHECKS[name];
  return (
    <fieldset className={styles.choice}>
      <legend>{legend}</legend>
      <div className={styles.options}>
        {options.map((opt) => (
          <label key={opt} className={styles.option}>
            <input type="checkbox" name={name} value={opt} checked={(values[name] || []).includes(opt)} onChange={onChange} />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Text({ name, label, type = "text", required = false, autoComplete, values, onChange, multiline }) {
  const Tag = multiline ? "textarea" : "input";
  return (
    <label className={styles.field}>
      <span>
        {label} {required && <span className={styles.req} aria-hidden="true">*</span>}
      </span>
      <Tag
        name={name}
        type={multiline ? undefined : type}
        rows={multiline ? 2 : undefined}
        required={required}
        autoComplete={autoComplete}
        value={values[name] || ""}
        onChange={onChange}
      />
    </label>
  );
}

function buildSummary(v) {
  const list = (arr) => (arr && arr.length ? arr.join(", ") : "None selected");
  const opt = (s) => (s && s.trim() ? s.trim() : "—");
  const withDetails = (key) => (v[key] === "Yes" && v[`${key}Details`] ? `Yes: ${v[`${key}Details`].trim()}` : v[key]);
  return [
    "YOGA CLIENT INTAKE FORM: Vana Kanaka Yoga Bali",
    "",
    "1. PERSONAL INFORMATION",
    `Full Name: ${v.fullName}`,
    `Date of Birth: ${v.dob}`,
    `Phone Number: ${v.phone}`,
    `Email Address: ${v.email}`,
    `Emergency Contact & Relationship: ${v.emergencyName}`,
    `Emergency Phone: ${v.emergencyPhone}`,
    "",
    "2. YOGA & FITNESS EXPERIENCE",
    `Practiced yoga before: ${v.experience}`,
    `Physical activity level: ${v.activity}`,
    `Primary goals: ${list(v.goals)}`,
    "",
    "3. HEALTH & MEDICAL HISTORY",
    `Current injuries, chronic pain or limitations: ${withDetails("injuries")}`,
    `Recent surgeries or major medical conditions: ${withDetails("surgeries")}`,
    `Conditions: ${list(v.conditions)}`,
    `Pregnant or postpartum: ${withDetails("pregnancy")}`,
    `Movements to avoid: ${opt(v.avoid)}`,
    "",
    "4. PREFERENCES & COMFORT",
    `Hands-on adjustments: ${v.adjustments}`,
    `Sensitivities to scents, essential oils or music: ${opt(v.sensitivities)}`,
    "",
    "5. LIABILITY WAIVER & AGREEMENT",
    "Agreed to the waiver terms.",
    `Signature of Participant: ${v.signature}`,
    `Booking Date: ${v.bookingDate}`,
  ].join("\n");
}

// `children` is the card that explains submission; the open/close button is
// appended to it, and the form itself renders full width below the cards.
export default function IntakeForm({ children, cardClassName }) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({});
  const [summary, setSummary] = useState("");
  const [copyState, setCopyState] = useState("");
  const reviewRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (summary) reviewRef.current?.focus();
  }, [summary]);

  useEffect(() => {
    const done = () => document.documentElement.classList.remove("printing-intake");
    window.addEventListener("afterprint", done);
    return () => window.removeEventListener("afterprint", done);
  }, []);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => {
      if (type === "checkbox") {
        const current = prev[name] || [];
        return { ...prev, [name]: checked ? [...current, value] : current.filter((x) => x !== value) };
      }
      return { ...prev, [name]: value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setCopyState("");
    setSummary(buildSummary(values));
  };

  const onPrint = () => {
    document.documentElement.classList.add("printing-intake");
    window.print();
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopyState("Copied to your clipboard.");
    } catch {
      setCopyState("Copying isn’t available in this browser. Please use print or save as PDF instead.");
    }
  };

  const onEdit = () => {
    setSummary("");
    requestAnimationFrame(() => formRef.current?.querySelector("input")?.focus());
  };

  const field = { values, onChange };

  return (
    <>
      <div id="intake-form" className={cardClassName}>
        {children}
        <button
          type="button"
          className={`btn btn-terracotta ${styles.openBtn}`}
          aria-expanded={open}
          aria-controls="intake-form-panel"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Hide the intake form" : "Open the intake form"}
          <Icon name="arrow" />
        </button>
        <p className={styles.openNote}>
          Online submission isn’t connected yet: your answers stay in this browser and nothing is sent or stored.
        </p>
      </div>

      <div id="intake-form-panel" className={styles.panel} hidden={!open}>
        {summary ? (
          <div className={styles.review} data-print-area>
            <h3 ref={reviewRef} tabIndex={-1} className={styles.subTitle}>
              Review your answers
            </h3>
            <p className={styles.status} role="status">
              Your answers are ready to print or copy. Nothing has been sent to the studio.
            </p>
            <pre className={styles.summary}>{summary}</pre>
            <div className={`btn-row ${styles.reviewActions}`}>
              <button type="button" className="btn btn-terracotta" onClick={onPrint}>
                Print or save as PDF
              </button>
              <button type="button" className="btn btn-outline" onClick={onCopy}>
                Copy answers
              </button>
              <button type="button" className="btn btn-outline" onClick={onEdit}>
                Edit answers
              </button>
            </div>
            <p className={styles.copyState} aria-live="polite">
              {copyState}
            </p>
          </div>
        ) : (
          <form ref={formRef} className={styles.form} onSubmit={onSubmit} aria-label="Yoga client intake form">
            <p className={styles.required}>
              Fields marked <span className={styles.req}>*</span> are required.
            </p>

            <fieldset className={styles.step}>
              <legend>1. Personal information</legend>
              <div className={styles.fields}>
                <Text name="fullName" label="Full Name" required autoComplete="name" {...field} />
                <Text name="dob" label="Date of Birth" type="date" required autoComplete="bday" {...field} />
                <Text name="phone" label="Phone Number" type="tel" required autoComplete="tel" {...field} />
                <Text name="email" label="Email Address" type="email" required autoComplete="email" {...field} />
                <Text name="emergencyName" label="Emergency Contact & Relationship" required {...field} />
                <Text name="emergencyPhone" label="Emergency Phone" type="tel" required {...field} />
              </div>
            </fieldset>

            <fieldset className={styles.step}>
              <legend>2. Yoga &amp; fitness experience</legend>
              <Radio name="experience" {...field} />
              <Radio name="activity" {...field} />
              <Checks name="goals" {...field} />
            </fieldset>

            <fieldset className={styles.step}>
              <legend>3. Health &amp; medical history</legend>
              <p className={styles.stepNote}>Your safety is our top priority.</p>
              <Radio name="injuries" {...field} />
              <Radio name="surgeries" {...field} />
              <Checks name="conditions" {...field} />
              <Radio name="pregnancy" {...field} />
              <Text name="avoid" label="Any specific movements to avoid?" multiline {...field} />
            </fieldset>

            <fieldset className={styles.step}>
              <legend>4. Preferences &amp; comfort</legend>
              <Radio name="adjustments" {...field} />
              <Text name="sensitivities" label="Any sensitivities to scents, essential oils, or music?" multiline {...field} />
            </fieldset>

            <fieldset className={styles.step}>
              <legend>5. Liability waiver &amp; agreement</legend>
              <ul className={styles.waiver}>
                {WAIVER.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <div className={styles.fields}>
                <Text name="signature" label="Signature of Participant (Type Full Name)" required {...field} />
                <Text name="bookingDate" label="Booking Date" type="date" required {...field} />
              </div>
            </fieldset>

            <div className={styles.submitRow}>
              <button type="submit" className="btn btn-terracotta">
                Review my answers
              </button>
              <p>Reviewing does not send anything.</p>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
