import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../styles/dashbaord/metaSuccess.module.css";

interface MetaItem {
  id: string;
  name: string;
}

interface MetaSelection {
  pages: MetaItem[];
  adAccounts: MetaItem[];
}

export default function MetaSuccess() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<MetaSelection | null>(null);

  useEffect(() => {
    // 🔥 1. STORE META ACCESS TOKEN (CRITICAL)
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("meta_access_token", token);
    }

    // 🔹 2. LOAD SELECTED ASSETS
    const stored = sessionStorage.getItem("metaSelection");

    if (!stored) {
      navigate("/dashboard");
      return;
    }

    setSelection(JSON.parse(stored));
  }, [navigate]);

  if (!selection) return null;

  /* ---------- SAFE NAVIGATION HANDLERS ---------- */
  const goToLeads = () => {
    sessionStorage.removeItem("metaSelection");
    navigate("/dashboard/leads");
  };

  const goToDashboard = () => {
    sessionStorage.removeItem("metaSelection");
    navigate("/dashboard");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.icon}>🎉</div>

        <h1>Meta Account Connected</h1>
        <p className={styles.subtitle}>
          Your Meta business assets are now successfully connected to LeadFlow.
        </p>

        {/* SUMMARY */}
        <div className={styles.summary}>
          <div>
            <strong>{selection.pages.length}</strong> Facebook Page(s)
          </div>
          <div>
            <strong>{selection.adAccounts.length}</strong> Ad Account(s)
          </div>
        </div>

        {/* CONNECTED ASSETS */}
        <div className={styles.assets}>
          <h4>Connected Facebook Pages</h4>
          <ul>
            {selection.pages.map((p) => (
              <li key={p.id}>{p.name}</li>
            ))}
          </ul>

          <h4>Connected Ad Accounts</h4>
          <ul>
            {selection.adAccounts.map((a) => (
              <li key={a.id}>{a.name}</li>
            ))}
          </ul>
        </div>

        {/* FEATURES */}
        <div className={styles.features}>
          <div>✔ Lead form syncing enabled</div>
          <div>✔ Messages from Facebook & Instagram</div>
          <div>✔ Campaign performance tracking</div>
          <div>✔ AI agent ready to assist</div>
        </div>

        {/* ACTIONS */}
        <div className={styles.actions}>
          <button onClick={goToLeads}>View Leads</button>

          <button className={styles.secondary} onClick={goToDashboard}>
            Go to Dashboard
          </button>
        </div>

        <p className={styles.note}>
          You can manage or disconnect your Meta account anytime from settings.
        </p>
      </div>
    </div>
  );
}
