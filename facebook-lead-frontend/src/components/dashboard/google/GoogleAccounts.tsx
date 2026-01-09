import { useEffect, useState } from "react";
import { fetchGoogleAccounts, connectGoogleAds } from "../../../api/google";

export default function GoogleAccounts() {
  const [accounts, setAccounts] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    fetchGoogleAccounts()
      .then(res => {
        setAccounts(res.data || []);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading Google accounts...</p>;
  }

  /* 🔥 NOT CONNECTED YET */
  if (accounts.length === 0) {
    return (
      <div>
        <h2>Google Ads Accounts</h2>
        <p>No Google Ads account connected yet.</p>

        <button onClick={connectGoogleAds}>
          🔗 Connect Google Ads
        </button>
      </div>
    );
  }

  /* ✅ CONNECTED */
  return (
    <div>
      <h2>Google Ads Accounts</h2>

      {accounts.map(id => (
        <label key={id} style={{ display: "block", cursor: "pointer" }}>
          <input
            type="radio"
            name="googleAccount"
            value={id}
            checked={selected === id}
            onChange={() => {
              setSelected(id);
              localStorage.setItem("googleCustomerId", id);
            }}
          />
          {id}
        </label>
      ))}
    </div>
  );
}
