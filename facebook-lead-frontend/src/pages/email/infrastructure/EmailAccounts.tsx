import { useEffect, useState } from "react";
import {
  fetchMailboxes,
  toggleWarmup,
  deleteMailbox,
} from "../../../api/email";
import styles from "../../../styles/dashbaord/accounts.module.css";

export default function EmailAccounts() {
  const [mailboxes, setMailboxes] = useState<any[]>([]);

  const load = async () => {
    const res = await fetchMailboxes();
    setMailboxes(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1>Email Accounts</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Status</th>
            <th>Daily Limit</th>
            <th>Warmup</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {mailboxes.map((m) => (
            <tr key={m._id}>
              <td>{m.email}</td>
              <td>
                <span className={styles.badge}>{m.status}</span>
              </td>
              <td>{m.dailyLimit}</td>
              <td>
                <input
                  type="checkbox"
                  checked={m.warmupEnabled}
                  onChange={() => {
                    toggleWarmup(m._id).then(load);
                  }}
                />
              </td>
              <td>
                <button
                  className={styles.delete}
                  onClick={() => {
                    if (confirm("Delete this mailbox?")) {
                      deleteMailbox(m._id).then(load);
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {!mailboxes.length && (
            <tr>
              <td colSpan={5}>No email accounts connected</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
