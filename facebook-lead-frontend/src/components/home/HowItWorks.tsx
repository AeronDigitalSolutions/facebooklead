import styles from "../../styles/home/howitworks.module.css";

export default function HowItWorks() {
  return (
    <section id="how" className={styles.how}>
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.badge}>How it works</span>
          <h2>
            From Facebook Lead <span>to Conversion</span>
          </h2>
          <p>
            A simple, automated flow designed to reduce response time
            and increase conversions.
          </p>
        </div>

        {/* Steps */}
        <div className={styles.steps}>

          <div className={styles.step}>
            <div className={styles.icon}>📥</div>
            <h3>Lead Captured</h3>
            <p>
              Facebook Lead Ads are instantly synced to your dashboard
              the moment a user submits the form.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.icon}>⚡</div>
            <h3>Auto Assigned</h3>
            <p>
              Leads are automatically assigned to the right agent using
              smart round-robin or rule-based logic.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.icon}>📞</div>
            <h3>Instant Follow-up</h3>
            <p>
              Agents contact leads via call or WhatsApp with full context
              and history in one place.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.icon}>📈</div>
            <h3>Track & Convert</h3>
            <p>
              Monitor performance, conversions, and ROI with real-time
              analytics and reports.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
