import { useState } from "react";
import MailboxForm from "../../../components/email/MailboxForm";
import {
  testMailboxConnection,
  saveMailbox,
} from "../../../api/email";
import styles from "../../../styles/dashbaord/connectMailbox.module.css";

export default function ConnectMailbox() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);
      await testMailboxConnection(data);
      await saveMailbox(data);
      alert("Email connected successfully!");
    } catch (err: any) {
      alert(err.response?.data?.message || "Connection failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>Email Connection Setup</h1>
        <p className={styles.subtitle}>
          Connect your email inbox to send cold emails and campaigns
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.info}>
          ⚠️ Use an inbox created only for outreach. Do not use your main domain
          email.
        </div>

        <MailboxForm onSubmit={handleSubmit} loading={loading} />
      </div>
    </div>
  );
}
