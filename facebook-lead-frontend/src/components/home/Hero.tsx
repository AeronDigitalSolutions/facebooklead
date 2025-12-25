import styles from "../../styles/home/hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* Left Content */}
        <div className={styles.content}>
          <span className={styles.badge}>
            🚀 Facebook Lead Automation Platform
          </span>

          <h1>
            Convert Facebook Leads <br />
            <span>Into Paying Customers</span>
          </h1>

          <p>
            Capture, auto-assign, follow up, and track Facebook leads in
            real-time — all from one powerful dashboard.
          </p>

          <div className={styles.actions}>
            <button className={styles.primaryBtn}>Request Demo</button>
            <button className={styles.secondaryBtn}>View Features</button>
          </div>

          {/* Trust / Stats */}
          <div className={styles.stats}>
            <div>
              <strong>3x</strong>
              <span>Faster Response</span>
            </div>
            <div>
              <strong>40%</strong>
              <span>Higher Conversion</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Lead Sync</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className={styles.visual}>
          <div className={styles.dashboardMock}>
            <div className={styles.card} />
            <div className={styles.card} />
            <div className={styles.card} />
          </div>
        </div>

      </div>
    </section>
  );
}
