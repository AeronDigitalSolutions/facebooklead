export default function TermsAndConditions() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Terms & Conditions</h1>
        <p style={styles.updated}>
          Last updated: {new Date().toDateString()}
        </p>

        <Section title="1. Acceptance of Terms">
          These Terms and Conditions (“Terms”) govern your access to and use of
          LeadFlow. By accessing or using our platform, you agree to be legally
          bound by these Terms.
        </Section>

        <Section title="2. Description of Service">
          LeadFlow is a lead management and advertising integration platform
          that allows users to connect advertising accounts, manage leads, and
          analyze marketing performance.
        </Section>

        <Section title="3. Account Responsibilities">
          <ul style={styles.list}>
            <li>You are responsible for safeguarding your account credentials</li>
            <li>You must provide accurate and complete information</li>
            <li>All activities under your account are your responsibility</li>
          </ul>
        </Section>

        <Section title="4. Acceptable Use">
          You agree not to misuse the service, interfere with system integrity,
          or attempt unauthorized access to any data or infrastructure.
        </Section>

        <Section title="5. Third-Party Services">
          LeadFlow integrates with third-party platforms such as Google Ads and
          Meta. Your use of these services is governed by their respective
          policies and terms.
        </Section>

        <Section title="6. Limitation of Liability">
          LeadFlow is provided “as-is” without warranties of any kind. We are
          not liable for indirect, incidental, or consequential damages.
        </Section>

        <Section title="7. Termination">
          We reserve the right to suspend or terminate access if these Terms
          are violated.
        </Section>

        <Section title="8. Changes to Terms">
          We may update these Terms periodically. Continued use of LeadFlow
          constitutes acceptance of the revised Terms.
        </Section>

        <Section title="9. Contact">
          📧 <strong>aerondigitalofficial@gmail.com</strong>
        </Section>
      </div>
    </div>
  );
}

/* ---------------- HELPERS ---------------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>{title}</h2>
      <div style={styles.text}>{children}</div>
    </section>
  );
}

/* ---------------- STYLES ---------------- */

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, #3b0764, #020617 60%)",
    padding: "80px 20px",
    fontFamily: "Inter, system-ui, sans-serif",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    background: "rgba(15, 23, 42, 0.85)",
    borderRadius: "20px",
    padding: "56px",
    color: "#e5e7eb",
    boxShadow:
      "0 0 0 1px rgba(168,85,247,0.25), 0 30px 80px rgba(0,0,0,0.6)",
    backdropFilter: "blur(12px)",
  },
  title: {
    fontSize: "42px",
    fontWeight: 800,
    background: "linear-gradient(90deg, #a855f7, #22d3ee)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "8px",
  },
  updated: {
    color: "#94a3b8",
    marginBottom: "40px",
  },
  section: {
    marginBottom: "36px",
  },
  heading: {
    fontSize: "22px",
    color: "#c084fc",
    marginBottom: "10px",
  },
  text: {
    color: "#d1d5db",
    lineHeight: 1.75,
    fontSize: "16px",
  },
  list: {
    paddingLeft: "18px",
    lineHeight: 1.8,
  },
};
