import { useEffect, useState } from "react";
import { fetchGoogleCampaigns } from "../../../api/google";

export default function GoogleCampaigns() {
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const customerId = localStorage.getItem("googleCustomerId");

  useEffect(() => {
    if (!customerId) return;
    fetchGoogleCampaigns(customerId).then((res) =>
      setCampaigns(res.data || [])
    );
  }, [customerId]);

  return (
    <div style={styles.grid}>
      {campaigns.map((c) => (
        <div key={c.campaign.id} style={styles.card}>
          <h3 style={styles.name}>{c.campaign.name}</h3>

          <div style={styles.stat}>
            <span>Clicks</span>
            <strong>{c.metrics.clicks}</strong>
          </div>

          <div style={styles.stat}>
            <span>Impressions</span>
            <strong>{c.metrics.impressions}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "16px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
  },
  name: {
    fontSize: "15px",
    fontWeight: 700,
    marginBottom: "12px",
  },
  stat: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
    marginTop: "6px",
  },
};
