export default function PrivacyPolicy() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.updated}>
          Last updated: {new Date().toDateString()}
        </p>

        <section style={styles.section}>
          <p>
            LeadFlow (“LeadFlow”, “we”, “our”, or “us”) is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our platform,
            website, and services.
          </p>
        </section>

        <section style={styles.section}>
          <h2>1. Information We Collect</h2>
          <p>We collect the following categories of information:</p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, and
              account credentials.
            </li>
            <li>
              <strong>Authentication Data:</strong> Login tokens and session
              identifiers.
            </li>
            <li>
              <strong>Advertising Data:</strong> Google Ads and Meta campaign,
              account, and performance data that you explicitly authorize.
            </li>
            <li>
              <strong>Usage Data:</strong> Log data, IP address, browser type,
              and platform activity.
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>2. How We Use Your Information</h2>
          <p>Your data is used strictly to:</p>
          <ul>
            <li>Provide and operate LeadFlow services</li>
            <li>Authenticate and secure user accounts</li>
            <li>Display advertising insights and analytics</li>
            <li>Improve platform performance and reliability</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>3. Google API & OAuth Data Usage</h2>
          <p>
            LeadFlow’s use and transfer of information received from Google APIs
            adheres to the{" "}
            <strong>
              Google API Services User Data Policy, including the Limited Use
              requirements
            </strong>.
          </p>
          <p>
            We only access Google Ads data that is necessary to provide
            user-requested functionality. We do not sell, share, or use Google
            user data for advertising purposes.
          </p>
        </section>

        <section style={styles.section}>
          <h2>4. Data Storage & Security</h2>
          <p>
            We implement administrative, technical, and physical safeguards to
            protect your information, including encryption, access controls,
            and secure storage.
          </p>
        </section>

        <section style={styles.section}>
          <h2>5. Data Retention</h2>
          <p>
            We retain user data only for as long as necessary to provide our
            services or comply with legal obligations. Users may request data
            deletion at any time.
          </p>
        </section>

        <section style={styles.section}>
          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal data.
            Requests can be made by contacting us.
          </p>
        </section>

        <section style={styles.section}>
          <h2>7. Contact Information</h2>
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
