import styles from "../../styles/home/cta.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>

        <h2>
          Ready to convert more <span>Facebook leads</span>?
        </h2>

        <p>
          Join teams that respond faster, follow up smarter,
          and close more deals with LeadFlow.
        </p>

        <div className={styles.actions}>
          <button className={styles.primaryBtn}>Request a Demo</button>
        </div>

        <div className={styles.trust}>
          <span>No credit card required</span>
          <span>Setup in minutes</span>
          <span>Secure & reliable</span>
        </div>

      </div>
    </section>
  );
}
