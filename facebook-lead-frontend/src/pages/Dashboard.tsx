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

          <div className={styles.item} onClick={() => navigate("/dashboard/add-accounts")}>
            Add Accounts
          </div>

          <div className={styles.section}>Ad Accounts</div>

          <div className={styles.item} onClick={() => navigate("/dashboard/campaigns")}>
            Campaigns
          </div>

          <div className={styles.item} onClick={() => navigate("/dashboard/leads")}>
            Leads
          </div>

          <div className={styles.section}>Forms</div>

          <div className={styles.item} onClick={() => navigate("/dashboard/form")}>
            Form Builder
          </div>

          <div className={styles.item} onClick={() => navigate("/dashboard/forms")}>
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




        </nav>
      </aside>

      {/* 🔥 THIS IS WHERE CHILD ROUTES RENDER */}
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}
