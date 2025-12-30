import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/home/header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>LeadFlow</div>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>

          <div className={styles.navActions}>
            <Link to="/signin" className={styles.login}>
              Login
            </Link>

            <Link to="/signup" className={styles.primaryBtn}>
              Get Started
            </Link>
          </div>
        </nav>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
