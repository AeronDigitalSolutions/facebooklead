import { useEffect, useState } from "react";
import styles from "../../styles/dashbaord/campaigns.module.css";
import { fetchCampaigns, syncCampaigns } from "../../api/campaigns";
import type { Campaign } from "@/types/campaign";
import CampaignTable from "@/components/dashboard/campaigns/CampaignTable";
import AdAccountSelector from "@/components/dashboard/accounts/AdAccountSelector";

interface AdAccount {
  id: string; // act_XXXX
  name: string;
}



export default function Campaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedAccount, setSelectedAccount] = useState<AdAccount | null>(
    null
  );

  // 🔹 Load selected account from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem("selected_ad_account");
    if (stored) {
      setSelectedAccount(JSON.parse(stored));
    }
  }, []);

  const adAccountId = selectedAccount?.id?.replace("act_", "");

  const loadCampaigns = async () => {
    if (!adAccountId) {
      setCampaigns([]);
      setError("No ad account selected");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await fetchCampaigns(adAccountId);
      setCampaigns(data);
    } catch (err) {
      console.error("Failed to load campaigns:", err);
      setCampaigns([]);
      setError("Failed to load campaigns");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Reload campaigns when account changes
  useEffect(() => {
    if (adAccountId) {
      loadCampaigns();
    }
  }, [adAccountId]);

  const handleSync = async () => {
    if (!adAccountId) {
      alert("Please select an ad account first");
      return;
    }

    try {
      setLoading(true);
      await syncCampaigns(adAccountId);
      await loadCampaigns();
    } catch (err) {
      console.error("Sync failed:", err);
      alert("Campaign sync failed. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
        <div>
          <h1>Campaigns</h1>
          <p>Facebook / Meta campaigns</p>
        </div>

        <button className={styles.syncBtn} onClick={handleSync}>
          Sync Campaigns
        </button>
      </div>

      {/* 🔹 AD ACCOUNT SELECTOR */}
      <AdAccountSelector onChange={setSelectedAccount} />

      {/* STATES */}
      {loading && <p>Loading campaigns...</p>}

      {!loading && error && (
        <p style={{ color: "red" }}>{error}</p>
      )}

      {!loading && !error && (
        <CampaignTable campaigns={campaigns} />
      )}
    </div>
  );
}
