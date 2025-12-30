import { useNavigate } from "react-router-dom";
import styles from "../../../styles/dashbaord/metaReview.module.css";

export default function MetaReview() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <h1>Review & Confirm</h1>
      <p className={styles.subtitle}>
        Please review the selected Meta assets before completing the connection.
      </p>

      <div className={styles.card}>
        <div className={styles.row}>
          <span>Facebook Page</span>
          <strong>LeadFlow Clinic</strong>
        </div>

        <div className={styles.row}>
          <span>Instagram Account</span>
          <strong>@leadflow_clinic</strong>
        </div>

        <div className={styles.row}>
          <span>Ad Account</span>
          <strong>LeadFlow Ads – 01</strong>
        </div>
      </div>

      <div className={styles.notice}>
        By confirming, you allow LeadFlow to access these assets to fetch leads,
        messages, and performance insights.
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
