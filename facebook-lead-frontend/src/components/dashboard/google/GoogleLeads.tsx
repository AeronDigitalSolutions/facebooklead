import { useEffect, useState } from "react";
import { fetchGoogleLeads } from "../../../api/google";

export default function GoogleLeads() {
  const [leads, setLeads] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const customerId = localStorage.getItem("googleCustomerId");

  useEffect(() => {
    if (!customerId) return;

    fetchGoogleLeads(customerId)
      .then((res) => setLeads(res.data || []))
      .catch(() => setError("Failed to fetch leads"));
  }, [customerId]);

  return (
    <div style={styles.wrapper}>
      {error && <p style={styles.error}>{error}</p>}

      {leads.map((l, i) => (
        <div key={i} style={styles.card}>
          <h4 style={styles.name}>{l.campaign.name}</h4>
          <p style={styles.value}>
            Leads: <strong>{l.metrics.conversions}</strong>
          </p>
        </div>
      ))}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "16px",
  },
  card: {
    background: "#fff",
    padding: "18px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
  },
  name: {
    fontSize: "15px",
    fontWeight: 700,
  },
  value: {
    marginTop: "6px",
    fontSize: "13px",
  },
  error: {
    color: "red",
  },
};
