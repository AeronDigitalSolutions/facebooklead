import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../styles/dashbaord/metaAssets.module.css";

const PAGES = [
  { id: "p1", name: "LeadFlow Clinic" },
  { id: "p2", name: "LeadFlow Hair Studio" },
];

const AD_ACCOUNTS = [
  { id: "a1", name: "LeadFlow Ads – 01" },
  { id: "a2", name: "LeadFlow Ads – 02" },
];

export default function MetaAssets() {
  const navigate = useNavigate();

  const [page, setPage] = useState<string | null>(null);
  const [adAccount, setAdAccount] = useState<string | null>(null);

  const isValid = page && adAccount;

  return (
    <div className={styles.wrapper}>
      <h1>Select Meta Assets</h1>
      <p className={styles.subtitle}>
        Choose which business assets you want to connect with LeadFlow.
      </p>

      {/* FACEBOOK PAGE */}
      <section className={styles.section}>
        <h3>Facebook Page</h3>

        {PAGES.map((p) => (
          <label key={p.id} className={styles.option}>
            <input
              type="radio"
              name="page"
              checked={page === p.id}
              onChange={() => setPage(p.id)}
            />
            <span>{p.name}</span>
          </label>
        ))}
      </section>

      {/* INSTAGRAM */}
      <section className={styles.section}>
        <h3>Instagram Business Account</h3>

        <div className={styles.staticBox}>
          <strong>@leadflow_clinic</strong>
          <span>Connected via selected page</span>
        </div>
      </section>

      {/* AD ACCOUNT */}
      <section className={styles.section}>
        <h3>Ad Account</h3>

        {AD_ACCOUNTS.map((a) => (
          <label key={a.id} className={styles.option}>
            <input
              type="radio"
              name="ad"
              checked={adAccount === a.id}
              onChange={() => setAdAccount(a.id)}
            />
            <span>{a.name}</span>
          </label>
        ))}
      </section>

      {/* ACTION */}
      <div className={styles.actions}>
        <button
          disabled={!isValid}
          onClick={() => navigate("/dashboard/integrations/meta/review")}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
