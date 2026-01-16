export default function TermsAndConditions() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Terms & Conditions</h1>
        <p style={styles.updated}>
          Last updated: {new Date().toDateString()}
        </p>

        <section style={styles.section}>
          <p>
            These Terms and Conditions (“Terms”) govern your access to and use of
            LeadFlow. By accessing or using the service, you agree to be bound by
            these Terms.
          </p>
        </section>

        <section style={styles.section}>
          <h2>1. Description of Service</h2>
          <p>
            LeadFlow is a lead management and advertising integration platform
            that enables users to connect advertising accounts, manage leads,
            and analyze marketing performance.
          </p>
        </section>

        <section style={styles.section}>
          <h2>2. Account Responsibilities</h2>
          <ul>
            <li>You are responsible for maintaining account security</li>
            <li>You must provide accurate and complete information</li>
            <li>You are responsible for all activity under your account</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>3. Acceptable Use</h2>
          <p>
            You agree not to misuse the service, violate applicable laws, or
            attempt unauthorized access to systems or data.
          </p>
        </section>

        <section style={styles.section}>
          <h2>4. Third-Party Services</h2>
          <p>
            LeadFlow integrates with third-party services such as Google Ads and
            Meta. Use of these services is governed by their respective terms
            and policies.
          </p>
        </section>

        <section style={styles.section}>
          <h2>5. Limitation of Liability</h2>
          <p>
            LeadFlow is provided on an “as-is” basis. We are not liable for any
            indirect, incidental, or consequential damages resulting from use
            of the service.
          </p>
        </section>

        <section style={styles.section}>
          <h2>6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to the service
            if these Terms are violated.
          </p>
        </section>

        <section style={styles.section}>
          <h2>7. Modifications</h2>
          <p>
            We may update these Terms from time to time. Continued use of the
            service constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section style={styles.section}>
          <h2>8. Contact</h2>
          <p>
            📧 Email: <strong>aerondigitalofficial@gmail.com</strong>
          </p>
        </section>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
    padding: "60px 20px",
  },
  card: {
    maxWidth: "900px",
    margin: "0 auto",
    background: "#ffffff",
    borderRadius: "16px",
    padding: "50px",
    fontFamily: "Inter, system-ui, sans-serif",
    color: "#1f2937",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
  },
  title: {
    fontSize: "38px",
    marginBottom: "6px",
  },
  updated: {
    color: "#6b7280",
    marginBottom: "32px",
  },
  section: {
    marginBottom: "28px",
    lineHeight: 1.7,
  },
};
