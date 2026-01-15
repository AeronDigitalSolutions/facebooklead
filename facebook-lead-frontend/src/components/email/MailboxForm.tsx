import { useState } from "react";
import styles from "../../styles/dashbaord/connectMailbox.module.css";

interface Props {
  onSubmit: (data: any) => void;
  loading: boolean;
}

export default function MailboxForm({ onSubmit, loading }: Props) {
  const [form, setForm] = useState({
    email: "",
    smtpHost: "",
    smtpPort: 587,
    smtpUser: "",
    smtpPass: "",
    imapHost: "",
    imapPort: 993,
    imapUser: "",
    imapPass: "",
  });

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Mailbox</div>
        <input
          className={`${styles.input} ${styles.full}`}
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>SMTP Configuration</div>
        <div className={styles.grid}>
          <input className={styles.input} name="smtpHost" placeholder="SMTP Host" onChange={handleChange} />
          <input className={styles.input} name="smtpPort" placeholder="SMTP Port" onChange={handleChange} />
          <input className={styles.input} name="smtpUser" placeholder="SMTP Username" onChange={handleChange} />
          <input className={styles.input} type="password" name="smtpPass" placeholder="SMTP Password" onChange={handleChange} />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>IMAP Configuration</div>
        <div className={styles.grid}>
          <input className={styles.input} name="imapHost" placeholder="IMAP Host" onChange={handleChange} />
          <input className={styles.input} name="imapPort" placeholder="IMAP Port" onChange={handleChange} />
          <input className={styles.input} name="imapUser" placeholder="IMAP Username" onChange={handleChange} />
          <input className={styles.input} type="password" name="imapPass" placeholder="IMAP Password" onChange={handleChange} />
        </div>
      </div>

      <button className={styles.button} disabled={loading}>
        {loading ? "Testing Connection..." : "Connect Email"}
      </button>
    </form>
  );
}
