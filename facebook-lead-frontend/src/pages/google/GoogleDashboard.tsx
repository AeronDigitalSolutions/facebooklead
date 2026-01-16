import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function GoogleDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname.includes(path);

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <h1 style={styles.title}>Google Ads</h1>
        <p style={styles.subtitle}>
          Manage Google Ads accounts, campaigns & leads
        </p>
      </div>

      <div style={styles.tabs}>
        <button
          style={{
            ...styles.tab,
            ...(isActive("accounts") ? styles.activeTab : {}),
          }}
          onClick={() => navigate("accounts")}
        >
          Accounts
        </button>

        <button
          style={{
            ...styles.tab,
            ...(isActive("campaigns") ? styles.activeTab : {}),
          }}
          onClick={() => navigate("campaigns")}
        >
          Campaigns
        </button>

        <button
          style={{
            ...styles.tab,
            ...(isActive("leads") ? styles.activeTab : {}),
          }}
          onClick={() => navigate("leads")}
        >
          Leads
        </button>
      </div>

      <div style={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    padding: "32px",
  },
  header: {
    marginBottom: "20px",
  },
  title: {
    fontSize: "26px",
    fontWeight: 800,
    marginBottom: "4px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#6b7280",
  },
  tabs: {
    display: "flex",
    gap: "10px",
    marginBottom: "24px",
  },
  tab: {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    background: "#fff",
    cursor: "pointer",
    fontWeight: 600,
  },
  activeTab: {
    background: "#2563eb",
    color: "#fff",
    borderColor: "#2563eb",
  },
  content: {
    marginTop: "10px",
  },
};
