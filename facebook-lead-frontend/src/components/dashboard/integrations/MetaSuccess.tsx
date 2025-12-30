import { useNavigate } from "react-router-dom";
import styles from "../../../styles/dashbaord/metaSuccess.module.css";

export default function MetaSuccess() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.icon}>🎉</div>

        <h1>Meta Account Connected</h1>
        <p className={styles.subtitle}>
          Your Meta business assets are now successfully connected to LeadFlow.
        </p>

        <div className={styles.features}>
          <div>✔ Lead form syncing enabled</div>
          <div>✔ Messages from Facebook & Instagram</div>
          <div>✔ Campaign performance tracking</div>
          <div>✔ AI agent ready to assist</div>
        </div>

        <div className={styles.actions}>
          <button onClick={() => navigate("/dashboard/leads")}>
            View Leads
          </button>

          <button
            className={styles.secondary}
            onClick={() => navigate("/dashboard")}
          >
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
