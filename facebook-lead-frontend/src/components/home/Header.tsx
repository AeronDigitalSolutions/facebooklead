import { useState } from "react";
import styles from "../../styles/home/header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>LeadFlow</div>

        {/* Desktop Nav */}
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>

          <div className={styles.navActions}>
            <a href="/login" className={styles.login}>Login</a>
            <a href="/signup" className={styles.primaryBtn}>Get Started</a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
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
