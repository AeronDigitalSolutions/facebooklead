import { useNavigate } from "react-router-dom";
import styles from "../../styles/dashbaord/addaccounts.module.css";

export default function AddAccounts() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Connect Meta Account</h1>
        <p>
          Securely connect your Facebook, Instagram & WhatsApp to start capturing
          and converting leads.
        </p>
      </div>

      <div className={styles.grid}>
        {/* LEFT CONTENT */}
        <div className={styles.info}>
          <h3>What will happen?</h3>

          <ul>
            <li>✔ You’ll login with your Meta account</li>
            <li>✔ Grant permission to access business assets</li>
            <li>✔ Select which Pages & Ad Accounts to connect</li>
          </ul>

          <div className={styles.box}>
            <h4>We will access</h4>
            <ul>
              <li>Facebook Pages</li>
              <li>Instagram Business Account</li>
              <li>Ad Accounts</li>
              <li>Lead Forms & Messages</li>
            </ul>
          </div>

          <div className={styles.boxLight}>
            <h4>We will NOT access</h4>
            <ul>
              <li>Personal messages</li>
              <li>Personal posts</li>
              <li>Private data</li>
            </ul>
          </div>

          <p className={styles.time}>⏱ Takes about 2 minutes</p>
        </div>

        {/* RIGHT CARD */}
        <div className={styles.card}>
          <div className={styles.status}>
            <span className={styles.dot}></span>
            Meta account not connected
          </div>

          <button
            className={styles.connectBtn}
            onClick={() => navigate("/dashboard/integrations/meta")}
          >
            Continue with Meta
          </button>

          <p className={styles.note}>
            You can disconnect your Meta account anytime from settings.
          </p>
        </div>
      </div>
    </div>
  );
}
