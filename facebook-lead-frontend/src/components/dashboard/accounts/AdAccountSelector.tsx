import { useEffect, useState } from "react";


interface AdAccount {
  id: string; // act_xxx
  name: string;
}

interface Props {
  onChange: (account: AdAccount) => void;
}

export default function AdAccountSelector({ onChange }: Props) {
  const [accounts, setAccounts] = useState<AdAccount[]>([]);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    const storedAccounts = localStorage.getItem("meta_ad_accounts");
    const storedSelected = localStorage.getItem("selected_ad_account");

    if (storedAccounts) {
      const parsed = JSON.parse(storedAccounts);
      setAccounts(parsed);

      if (storedSelected) {
        const acc = JSON.parse(storedSelected);
        setSelected(acc.id);
        onChange(acc);
      } else if (parsed.length > 0) {
        setSelected(parsed[0].id);
        localStorage.setItem(
          "selected_ad_account",
          JSON.stringify(parsed[0])
        );
        onChange(parsed[0]);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setSelected(id);

    const account = accounts.find((a) => a.id === id);
    if (!account) return;

    localStorage.setItem("selected_ad_account", JSON.stringify(account));
    onChange(account);
  };

  if (accounts.length === 0) {
    return (
      <p style={{ color: "red", marginTop: 10 }}>
        No ad accounts found
      </p>
    );
  }

  return (
    <div style={{ margin: "15px 0" }}>
      <label style={{ fontWeight: 600 }}>Select Ad Account</label>
      <br />
      <select
        value={selected}
        onChange={handleChange}
        style={{
          marginTop: 6,
          padding: "8px 12px",
          borderRadius: 6,
          border: "1px solid #ccc",
          minWidth: 280,
        }}
      >
        {accounts.map((acc) => (
          <option key={acc.id} value={acc.id}>
            {acc.name}
          </option>
        ))}
      </select>
    </div>
  );
}
