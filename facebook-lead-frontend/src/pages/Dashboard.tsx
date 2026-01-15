import { useNavigate, Outlet } from "react-router-dom";
import styles from "../styles/dashboard.module.css";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>LeadFlow</div>

        <nav className={styles.menu}>
          <div className={styles.item} onClick={() => navigate("/dashboard")}>
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
            className={styles.item}
            onClick={() => navigate("/dashboard/leads")}
          >
            Leads
          </div>

          {/* 🔥 NEW SUB TAB */}
          <div
            className={styles.subItem}
            onClick={() => navigate("/dashboard/email-leads")}
          >
            Email Leads
          </div>

          <div className={styles.section}>Forms</div>

          <div
            className={styles.item}
            onClick={() => navigate("/dashboard/form")}
          >
            Form Builder
          </div>

          <div
            className={styles.item}
            onClick={() => navigate("/dashboard/forms")}
          >
            Form List
          </div>

          <div className={styles.section}>Google Ads</div>

          <div
            className={styles.item}
            onClick={() => navigate("/dashboard/google/accounts")}
          >
            Google Accounts
          </div>

          <div
            className={styles.item}
            onClick={() => navigate("/dashboard/google/campaigns")}
          >
            Google Campaigns
          </div>

          <div
            className={styles.item}
            onClick={() => navigate("/dashboard/google/leads")}
          >
            Google Leads
          </div>

          <div className={styles.section}>Email</div>

          <div
            className={styles.item}
            onClick={() => navigate("/email/connect")}
          >
            Email Connection
          </div>

          <div
            className={styles.item}
            onClick={() => navigate("/email/accounts")}
          >
            Email Accounts
          </div>

          <div
            className={styles.item}
            onClick={() => navigate("/email/inbox")}
          >
            Inbox
          </div>

          <div className={styles.section}>Instagram</div>

          <div
            className={styles.item}
            onClick={() => navigate("/dashboard/instagram/connect")}
          >
            Connect Instagram
          </div>

          <div
            className={styles.item}
            onClick={() => navigate("/dashboard/instagram/accounts")}
          >
            Instagram Accounts
          </div>

          <div
            className={styles.item}
            onClick={() => navigate("/dashboard/instagram/inbox")}
          >
            Instagram Inbox
          </div>
        </nav>
      </aside>

      {/* CHILD ROUTES */}
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}
