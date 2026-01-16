import { useEffect, useState } from "react";
import { fetchGoogleAccounts, connectGoogleAds } from "../../../api/google";

export default function GoogleAccounts() {
  const [accounts, setAccounts] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    fetchGoogleAccounts()
      .then((res) => {
        setAccounts(res.data || []);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={styles.center}>
        <p style={styles.loading}>Loading Google accounts…</p>
      </div>
    );
  }

  /* 🔥 NOT CONNECTED */
  if (accounts.length === 0) {
    return (
      <div style={styles.wrapper}>
        <div style={styles.card}>
          <h2 style={styles.title}>Google Ads Accounts</h2>
          <p style={styles.subtitle}>
            No Google Ads account is connected yet.
          </p>

          <button style={styles.connectBtn} onClick={connectGoogleAds}>
            🔗 Connect Google Ads
          </button>

          <p style={styles.note}>
            You’ll be redirected to Google to grant access.
          </p>
        </div>
      </div>
    );
  }

  /* ✅ CONNECTED */
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Google Ads Accounts</h2>
        <p style={styles.subtitle}>
          Select a Google Ads account to continue
        </p>

        <div style={styles.list}>
          {accounts.map((id) => (
            <label
              key={id}
              style={{
                ...styles.accountItem,
                borderColor: selected === id ? "#2563eb" : "#e5e7eb",
                background:
                  selected === id ? "#eff6ff" : "transparent",
              }}
            >
              <input
                type="radio"
                name="googleAccount"
                value={id}
                checked={selected === id}
                onChange={() => {
                  setSelected(id);
                  localStorage.setItem("googleCustomerId", id);
                }}
                style={styles.radio}
              />
              <span style={styles.accountId}>{id}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

/* 🔥 INLINE STYLES */
const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    padding: "40px",
    display: "flex",
    justifyContent: "center",
  },

  card: {
    width: "100%",
    maxWidth: "520px",
    background: "#ffffff",
    borderRadius: "12px",
    padding: "28px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },

  title: {
    fontSize: "22px",
    fontWeight: 700,
    marginBottom: "6px",
    color: "#111827",
  },

  subtitle: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "24px",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  accountItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 16px",
    borderRadius: "10px",
    border: "2px solid #e5e7eb",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },

  radio: {
    transform: "scale(1.2)",
    cursor: "pointer",
  },

  accountId: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#1f2937",
  },

  connectBtn: {
    width: "100%",
    padding: "12px",
    background: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
  },

  note: {
    marginTop: "14px",
    fontSize: "12px",
    color: "#6b7280",
    textAlign: "center",
  },

  center: {
    padding: "40px",
    textAlign: "center",
  },

  loading: {
    fontSize: "14px",
    color: "#6b7280",
  },
};
