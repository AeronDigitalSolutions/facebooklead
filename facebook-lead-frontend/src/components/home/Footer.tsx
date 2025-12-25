import styles from "../../styles/home/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Top Section */}
        <div className={styles.top}>

          {/* Brand */}
          <div className={styles.brand}>
            <h3>LeadFlow</h3>
            <p>
              All-in-one Facebook Lead Management platform designed to
              help teams respond faster and convert more.
            </p>
          </div>

          {/* Links */}
          <div className={styles.links}>
            <div>
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#how">How it Works</a>
              <a href="#pricing">Pricing</a>
              <a href="/login">Login</a>
            </div>

            <div>
              <h4>Company</h4>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="/careers">Careers</a>
            </div>

            <div>
              <h4>Legal</h4>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/security">Security</a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} LeadFlow. All rights reserved.</p>

          <div className={styles.socials}>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Facebook">f</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
