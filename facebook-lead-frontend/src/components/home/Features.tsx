import styles from "../../styles/home/feature.module.css";

const FEATURES = [
  {
    icon: "⚡",
    title: "Instant Lead Sync",
    desc: "Facebook leads are captured and synced to your dashboard in real time without delays."
  },
  {
    icon: "🤖",
    title: "Smart Auto Assignment",
    desc: "Automatically assign leads to agents using round-robin or custom rules."
  },
  {
    icon: "📞",
    title: "Faster Follow-ups",
    desc: "Call or WhatsApp leads instantly with full context and history."
  },
  {
    icon: "📊",
    title: "Conversion Analytics",
    desc: "Track performance, conversion rates, and ROI with real-time insights."
  },
  {
    icon: "🔔",
    title: "Automated Reminders",
    desc: "Never miss a follow-up with time-based alerts and reminders."
  },
  {
    icon: "🔐",
    title: "Role-Based Access",
    desc: "Control what admins and agents can see and do with granular permissions."
  }
];

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Features</span>
          <h2>
            Everything You Need to <span>Convert More Leads</span>
          </h2>
          <p>
            Built specifically for teams running Facebook Lead Ads who care
            about speed, automation, and measurable growth.
          </p>
        </div>

        {/* Feature Grid */}
        <div className={styles.grid}>
          {FEATURES.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
