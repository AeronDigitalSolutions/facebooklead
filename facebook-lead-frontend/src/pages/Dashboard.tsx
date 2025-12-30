import { useNavigate } from "react-router-dom";
import styles from "../styles/dashboard.module.css";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>LeadFlow</div>

        <nav className={styles.menu}>
          <div className={`${styles.item} ${styles.active}`}>
            Dashboard
          </div>

          <div
            className={styles.item}
            onClick={() => navigate("/dashboard/add-accounts")}
          >
            Add Accounts
          </div>

          <div className={styles.section}>Ad Accounts</div>

          <div
            className={styles.item}
            onClick={() => navigate("/dashboard/campaigns")}
          >
            Campaigns
          </div>

          <div
            className={`${styles.item} ${styles.nested}`}
            onClick={() => navigate("/dashboard/Leads")}
          >
            Leads
          </div>

          <div className={styles.item}>Agents</div>
          <div className={styles.item}>Automation & AI</div>
          <div className={styles.item}>Reports</div>
          <div className={styles.item}>Settings</div>
        </nav>
      </aside>

      {/* CONTENT */}
      <main className={styles.content}>
        <h1>Dashboard</h1>
        <p className={styles.subtitle}>
          Campaign performance & lead overview
        </p>

        {/* KPI */}
        <div className={styles.kpiGrid}>
          <Kpi title="Total Campaigns" value="18" />
          <Kpi title="Total Leads" value="1,240" />
          <Kpi title="WhatsApp Chats" value="312" />
          <Kpi title="Conversion Rate" value="12.4%" />
        </div>

        {/* OBJECTIVES */}
        <h2 className={styles.sectionTitle}>Leads by Objective</h2>

        <div className={styles.objectiveGrid}>
          <Objective title="Awareness" a="Reach" av="45K" b="Clicks" bv="1.2K" />
          <Objective
            title="WhatsApp"
            a="Conversations"
            av="64"
            b="Replies"
            bv="52"
          />
          <Objective title="Lead Forms" a="Leads" av="120" b="CPL" bv="₹42" />
        </div>

        {/* ALERTS */}
        <h2 className={styles.sectionTitle}>Alerts & Insights</h2>

        <div className={`${styles.alert} ${styles.warn}`}>
          ⚠ WhatsApp campaign response dropped today
        </div>
        <div className={`${styles.alert} ${styles.success}`}>
          🔥 Lead Form campaign “Hair Jan” performing best
        </div>
      </main>
    </div>
  );
}

function Kpi({ title, value }: any) {
  return (
    <div className={styles.kpi}>
      <span>{title}</span>
      <h3>{value}</h3>
    </div>
  );
}

function Objective({ title, a, av, b, bv }: any) {
  return (
    <div className={styles.objective}>
      <h4>{title}</h4>
      <p>{a}: <strong>{av}</strong></p>
      <p>{b}: <strong>{bv}</strong></p>
    </div>
  );
}
