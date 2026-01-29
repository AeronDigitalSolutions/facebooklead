import styles from "../../../styles/dashbaord/metaIntro.module.css";
import { RiMetaFill } from "react-icons/ri";

export default function MetaIntro() {
  const handleMetaLogin = () => {
  window.location.href = "http://localhost:5000/api/auth/meta/login";
};


  return (
    <div className={styles.wrapper}>
      <div className={styles.container_Intro}>
        {/* HEADER */}
        <div className={styles.meta_display_top}>
        <h1>Connect your Meta Business</h1>
        <p className={styles.Officlasy}>Use Officlasy Meta AI</p>
        </div>
        <p className={styles.subtitle}>
         Securely connect Facebook & Instagram to LeadFlow:
        </p>

        {/* STEPS */}
      
<div className={styles.stepWrapper}>
    <div className={`${styles.line} ${styles.completedLines}`} />
      {/* Step 1 */}
      <div className={styles.stepBlock}>
        <div className={`${styles.circle} ${styles.completed}`}>✓</div>
        <p className={styles.label}>Login</p>
      </div>

      <div className={`${styles.line} ${styles.completedLine}`} />

      {/* Step 2 */}
      <div className={styles.stepBlock}>
        <div className={`${styles.circle} ${styles.active}`}>2</div>
        <p className={`${styles.label} ${styles.activeLabel}`}>
          Permissions
        </p>
      </div>

      <div className={styles.line} />

      {/* Step 3 */}
      <div className={styles.stepBlock}>
        <div className={styles.circle}>3</div>
        <p className={styles.label}>Select Assets</p>
      </div>
    </div>

        {/* PERMISSIONS */}
       
 <div className={styles.permissions_display}>
          <div className={styles.permissionsCard}>
            <h3>We WILL access</h3>

            <div className={styles.permissionItem}>
              <span className={styles.check}>✓</span>
              Facebook Pages
            </div>

            <div className={styles.permissionItem}>
              <span className={styles.check}>✓</span>
              Instagram Business Account
            </div>

            <div className={styles.permissionItem}>
              <span className={styles.check}>✓</span>
              Ad Accounts
            </div>

            <div className={styles.permissionItem}>
              <span className={styles.check}>✓</span>
              Lead Forms & Messages
            </div>
          </div>

          <div className={styles.permissionsCard}>
            <h3>We will NEVER access</h3>

            <div className={styles.permissionItem}>
              <span className={styles.cross}>✕</span>
              Personal messages
            </div>

            <div className={styles.permissionItem}>
              <span className={styles.cross}>✕</span>
              Personal posts
            </div>

            <div className={styles.permissionItem}>
              <span className={styles.cross}>✕</span>
              Private data
            </div>
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className={styles.notice}>
          <strong>You stay in Control:</strong> Lead flow necer post,message or runs  ads without your approval
        </div>

        {/* ACTION */}
        <button className={styles.metaBtn} onClick={handleMetaLogin}>
         <RiMetaFill /> Continue to Meta Login
        </button>

        <p className={styles.footerNote}>
          You can disconnect anytime form settings.
        </p>
      </div>
    </div>
  );
}
