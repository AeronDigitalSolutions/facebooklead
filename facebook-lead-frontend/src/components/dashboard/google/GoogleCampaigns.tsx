import { useEffect, useState, type SetStateAction } from "react";
import { fetchGoogleCampaigns } from "../../../api/google";

export default function GoogleCampaigns() {
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const customerId = localStorage.getItem("googleCustomerId");

  useEffect(() => {
    if (!customerId) return;
    fetchGoogleCampaigns(customerId).then((res: { data: SetStateAction<any[]>; }) => setCampaigns(res.data));
  }, [customerId]);

  return (
    <div>
      <h2>Google Campaigns</h2>

      {campaigns.map((c: any) => (
        <div key={c.campaign.id}>
          <strong>{c.campaign.name}</strong>
          <div>Clicks: {c.metrics.clicks}</div>
          <div>Impressions: {c.metrics.impressions}</div>
        </div>
      ))}
    </div>
  );
}
