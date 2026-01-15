import { useEffect, useState } from "react";

export default function InstagramAccounts() {
  const [accounts, setAccounts] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/instagram/accounts")
      .then(res => res.json())
      .then(setAccounts);
  }, []);

  return (
    <div>
      <h2>Instagram Accounts</h2>

      {accounts.map(acc => (
        <div key={acc.instagramAccountId}>
          <strong>{acc.username}</strong>
        </div>
      ))}
    </div>
  );
}
