import { useNavigate } from "react-router-dom";
import styles from "../../../styles/dashbaord/metaError.module.css";

export default function MetaError() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.icon}>⚠️</div>

        <h1>Meta Connection Issue</h1>
        <p className={styles.subtitle}>
          We couldn’t complete the connection to your Meta account.
        </p>

        <div className={styles.reason}>
          <p>Possible reasons:</p>
          <ul>
            <li>Permission was denied</li>
            <li>Login was cancelled</li>
            <li>Access was revoked on Meta</li>
            <li>Session expired</li>
          </ul>
        </div>

        <div className={styles.actions}>
          <button
            onClick={() => navigate("/dashboard/integrations/meta")}
          >
            Retry Connection
          </button>

          <button
            className={styles.secondary}
            onClick={() => navigate("/dashboard/settings/meta")}
          >
            Go to Settings
          </button>
        </div>

        <p className={styles.note}>
          Need help? Contact support or check Meta permissions.
        </p>
      </div>
    </div>
  );
}
