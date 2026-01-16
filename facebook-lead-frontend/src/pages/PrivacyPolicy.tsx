export default function PrivacyPolicy() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.updated}>
          Last updated: {new Date().toDateString()}
        </p>

        <Section title="1. Overview">
          LeadFlow (“we”, “our”, or “us”) respects your privacy. This Privacy
          Policy explains how we collect, use, and protect your information
          when you use our platform.
        </Section>

        <Section title="2. Information We Collect">
          <ul style={styles.list}>
            <li>Personal details such as name and email address</li>
            <li>Authentication tokens and session identifiers</li>
            <li>
              Advertising data from Google Ads or Meta that you explicitly
              authorize
            </li>
            <li>Usage and diagnostic information</li>
          </ul>
        </Section>

        <Section title="3. How We Use Data">
          We use your information solely to operate LeadFlow, provide analytics,
          secure accounts, and improve performance.
        </Section>

        <Section title="4. Google API & OAuth Compliance">
          LeadFlow’s use of information received from Google APIs complies with
          the <strong>Google API Services User Data Policy</strong>, including
          Limited Use requirements. We do not sell or misuse Google user data.
        </Section>

        <Section title="5. Data Security">
          We implement encryption, access controls, and industry-standard
          safeguards to protect your information.
        </Section>

        <Section title="6. Data Retention">
          Data is retained only as long as required for service delivery or
          legal compliance. Users may request deletion at any time.
        </Section>

        <Section title="7. Your Rights">
          You may access, update, or delete your data by contacting us.
        </Section>

        <Section title="8. Contact">
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
