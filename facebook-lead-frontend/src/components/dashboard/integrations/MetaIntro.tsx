import styles from "../../../styles/dashbaord/metaIntro.module.css";

export default function MetaIntro() {
  const handleMetaLogin = () => {
    // 🔥 OAuth redirect will be wired later
    window.location.href = "/dashboard/integrations/meta/processing";
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* HEADER */}
        <h1>Connect your Meta Business</h1>
        <p className={styles.subtitle}>
          You’re about to securely connect your Facebook & Instagram business
          assets with LeadFlow.
        </p>

        {/* STEPS */}
        <div className={styles.steps}>
          <div className={styles.step}>
            <span>1</span>
            <p>Login using your Meta account</p>
          </div>

          <div className={styles.step}>
            <span>2</span>
            <p>Grant access to business assets</p>
          </div>

          <div className={styles.step}>
            <span>3</span>
            <p>Select pages & ad accounts</p>
          </div>
        </div>

        {/* PERMISSIONS */}
        <div className={styles.permissions}>
          <h3>Permissions we request</h3>

          <ul>
            <li>✔ View & manage Facebook Pages</li>
            <li>✔ Access Instagram Business account</li>
            <li>✔ Read leads & messages</li>
            <li>✔ Manage ad accounts</li>
          </ul>
        </div>

        {/* DISCLAIMER */}
        <div className={styles.notice}>
          <strong>Important:</strong> We never post, message, or run ads without
          your approval. You stay in full control.
        </div>

        {/* ACTION */}
        <button className={styles.metaBtn} onClick={handleMetaLogin}>
          Continue to Meta Login
        </button>

        <p className={styles.footerNote}>
          You can revoke access anytime from Meta or LeadFlow settings.
        </p>
      </div>
    </div>
  );
}
