import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../styles/dashbaord/metaReview.module.css";

interface MetaItem {
  id: string;
  name: string;
}

interface MetaSelection {
  pages: MetaItem[];
  adAccounts: MetaItem[];
}

export default function MetaReview() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<MetaSelection | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("metaSelection");
    if (!stored) {
      navigate("/dashboard/integrations/meta/assets");
      return;
    }
    setSelection(JSON.parse(stored));
  }, [navigate]);

  if (!selection) return null;

  return (
    <div className={styles.wrapper}>
      <h1>Review & Confirm</h1>
      <p className={styles.subtitle}>
        Review the selected Meta assets before completing setup.
      </p>

      <div className={styles.card}>
        <div className={styles.row}>
          <span>Facebook Pages</span>
          <ul>
            {selection.pages.map((p) => (
              <li key={p.id}>{p.name}</li>
            ))}
          </ul>
        </div>

        <div className={styles.row}>
          <span>Instagram</span>
          <strong>Linked automatically via Pages</strong>
        </div>

        <div className={styles.row}>
          <span>Ad Accounts</span>
          <ul>
            {selection.adAccounts.map((a) => (
              <li key={a.id}>{a.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.notice}>
        By confirming, LeadFlow will sync leads, messages, and campaign data from
        these assets.
      </div>

      <div className={styles.actions}>
        <button
          className={styles.back}
          onClick={() => navigate("/dashboard/integrations/meta/assets")}
        >
          Edit Selection
        </button>

        <button
          className={styles.confirm}
          onClick={() => navigate("/dashboard/integrations/meta/success")}
        >
          Confirm & Connect
        </button>
      </div>
    </div>
  );
}
