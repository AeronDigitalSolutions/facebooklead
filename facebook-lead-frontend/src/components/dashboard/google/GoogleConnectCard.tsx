import { connectGoogleAds } from "../../../api/google";

export default function GoogleConnectCard() {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Google Ads</h3>
      <p style={styles.text}>
        Connect your Google Ads account to sync campaigns & leads
      </p>
      <button style={styles.btn} onClick={connectGoogleAds}>
        Connect Google Ads
      </button>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: "#fff",
    padding: "24px",
    borderRadius: "14px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    maxWidth: "360px",
  },
  title: {
    fontSize: "18px",
    fontWeight: 700,
  },
  text: {
    fontSize: "14px",
    color: "#6b7280",
    margin: "10px 0 16px",
  },
  btn: {
    width: "100%",
    padding: "10px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: 600,
    cursor: "pointer",
  },
};
