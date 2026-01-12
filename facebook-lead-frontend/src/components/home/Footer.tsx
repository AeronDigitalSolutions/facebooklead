import styles from "../../styles/home/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Top Section */}
        <div className={styles.top}>

          {/* Brand */}
          <div className={styles.brand}>
            <h3>NewsPaper</h3>
            <p>
              All-in-one Facebook Lead Management platform designed to
              help teams respond faster and convert more.
            </p>
            {/* <p className="input_and_button">
              <input placeholder="ENTER YOUR EMAIL"/>
              <button>Submit</button>
            </p> */}
          </div>

          {/* Links */}
          <div className={styles.links}>
            <div>
              <h4>Product</h4>
              <a href="#features">Ai Power</a>
              <a href="#how">Blog Post Genreation</a>
              <a href="#pricing">Social media Content</a>
              <a href="/login">Login</a>
            </div>

            <div>
              <h4>Resources</h4>
              <a href="/about">Blog</a>
              <a href="/contact">FAQ</a>
              <a href="/careers">Help Center</a>
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
