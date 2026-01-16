import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GoogleSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => {
      navigate("/dashboard/google/accounts");
    }, 1500);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>✅ Google Ads Connected</h2>
        <p style={styles.text}>
          Your Google Ads account was connected successfully.
        </p>
        <p style={styles.note}>Redirecting…</p>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    height: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "14px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },
  title: {
    fontSize: "22px",
    fontWeight: 700,
    marginBottom: "10px",
  },
  text: {
    fontSize: "14px",
    color: "#374151",
  },
  note: {
    marginTop: "12px",
    fontSize: "12px",
    color: "#6b7280",
  },
};
