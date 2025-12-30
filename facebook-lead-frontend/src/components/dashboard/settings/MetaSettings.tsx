import { useNavigate } from "react-router-dom";
import styles from "../../../styles/dashbaord/metaSettings.module.css";

export default function MetaSettings() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <h1>Meta Integration</h1>
      <p className={styles.subtitle}>
        Manage your connected Meta business assets and permissions.
      </p>

      {/* STATUS CARD */}
      <div className={styles.statusCard}>
        <div className={styles.statusRow}>
          <span>Status</span>
          <strong className={styles.connected}>Connected</strong>
        </div>

        <div className={styles.statusRow}>
          <span>Last synced</span>
          <strong>Just now</strong>
        </div>
      </div>

      {/* CONNECTED ASSETS */}
      <div className={styles.card}>
        <h3>Connected Assets</h3>

        <div className={styles.asset}>
          <span>Facebook Page</span>
          <strong>LeadFlow Clinic</strong>
        </div>

        <div className={styles.asset}>
          <span>Instagram</span>
          <strong>@leadflow_clinic</strong>
        </div>

        <div className={styles.asset}>
          <span>Ad Account</span>
          <strong>LeadFlow Ads – 01</strong>
        </div>
      </div>

      {/* ACTIONS */}
      <div className={styles.actions}>
        <button
          className={styles.reconnect}
          onClick={() => navigate("/dashboard/integrations/meta")}
        >
          Reconnect Meta
        </button>

        <button className={styles.disconnect}>
          Disconnect Meta
        </button>
      </div>

      <div className={styles.warning}>
        Disconnecting Meta will stop lead syncing and message automation.
      </div>
    </div>
  );
}
