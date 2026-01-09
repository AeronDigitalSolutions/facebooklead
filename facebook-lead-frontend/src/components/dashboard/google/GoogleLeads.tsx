import { useEffect, useState, type SetStateAction } from "react";
import { fetchGoogleLeads } from "../../../api/google";

export default function GoogleLeads() {
  const [leads, setLeads] = useState<any[]>([]);
  const customerId = localStorage.getItem("googleCustomerId");

  useEffect(() => {
    if (!customerId) return;
    fetchGoogleLeads(customerId).then((res: { data: SetStateAction<any[]>; }) => setLeads(res.data));
  }, [customerId]);

  return (
    <div>
      <h2>Google Leads</h2>

      {leads.map((l: any, i) => (
        <div key={i}>
          <strong>{l.campaign.name}</strong>
          <div>Leads: {l.metrics.conversions}</div>
        </div>
      ))}
    </div>
  );
}
