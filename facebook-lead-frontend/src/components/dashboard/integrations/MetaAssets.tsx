import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../styles/dashbaord/metaAssets.module.css";
import { API_BASE } from "@/config/api";

interface MetaItem {
  id: string;
  name: string;
}

export default function MetaAssets() {
  const navigate = useNavigate();

  const [pages, setPages] = useState<MetaItem[]>([]);
  const [adAccounts, setAdAccounts] = useState<MetaItem[]>([]);

  const [selectedPages, setSelectedPages] = useState<MetaItem[]>([]);
  const [selectedAds, setSelectedAds] = useState<MetaItem[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const isValid = selectedPages.length > 0 && selectedAds.length > 0;

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const [pagesRes, adsRes] = await Promise.all([
          fetch(`${API_BASE}/meta/pages`),
          fetch(`${API_BASE}/meta/adaccounts`),
        ]);7

        if (!pagesRes.ok || !adsRes.ok) {
          throw new Error("Failed to fetch Meta assets");
        }

        const pagesData = await pagesRes.json();
        const adsData = await adsRes.json();

        setPages(pagesData);
        setAdAccounts(adsData);

        // ✅ REQUIRED: store ALL ad accounts for Campaign dropdown
        localStorage.setItem(
          "meta_ad_accounts",
          JSON.stringify(adsData)
        );
      } catch (err) {
        console.error(err);
        setError("Unable to load Meta assets. Please reconnect Meta.");
      } finally {
        setLoading(false);
      }
    };

    fetchAssets();
  }, []);

  const toggleItem = (
    item: MetaItem,
    list: MetaItem[],
    setList: React.Dispatch<React.SetStateAction<MetaItem[]>>
  ) => {
    setList(
      list.some((i) => i.id === item.id)
        ? list.filter((i) => i.id !== item.id)
        : [...list, item]
    );
  };

  const handleContinue = () => {
    // ✅ keep existing onboarding flow
    sessionStorage.setItem(
      "metaSelection",
      JSON.stringify({
        pages: selectedPages,
        adAccounts: selectedAds,
      })
    );

    // 🔥 REQUIRED: store ONE selected ad account for campaigns
    if (selectedAds.length > 0) {
      localStorage.setItem(
        "selected_ad_account",
        JSON.stringify(selectedAds[0]) // first selected
      );
    }

    navigate("/dashboard/integrations/meta/review");
  };

  if (loading)
    return <div className={styles.wrapper}>Loading Meta assets...</div>;

  if (error)
    return <div className={styles.wrapper}>{error}</div>;

  return (
    <div className={styles.wrapper}>
      <h1>Select Meta Assets</h1>
      <p className={styles.subtitle}>
        Select one or more business assets to connect.
      </p>

      {/* FACEBOOK PAGES */}
      <section className={styles.section}>
        <h3>Facebook Pages</h3>
        {pages.map((p) => (
          <label key={p.id} className={styles.option}>
            <input
              type="checkbox"
              checked={selectedPages.some((sp) => sp.id === p.id)}
              onChange={() =>
                toggleItem(p, selectedPages, setSelectedPages)
              }
            />
            <span>{p.name}</span>
          </label>
        ))}
      </section>

      {/* INSTAGRAM */}
      <section className={styles.section}>
        <h3>Instagram</h3>
        <div className={styles.staticBox}>
          Instagram Business accounts are linked automatically via Pages.
        </div>
      </section>

      {/* AD ACCOUNTS */}
      <section className={styles.section}>
        <h3>Ad Accounts</h3>
        {adAccounts.map((a) => (
          <label key={a.id} className={styles.option}>
            <input
              type="checkbox"
              checked={selectedAds.some((sa) => sa.id === a.id)}
              onChange={() =>
                toggleItem(a, selectedAds, setSelectedAds)
              }
            />
            <span>{a.name || a.id}</span>
          </label>
        ))}
      </section>

      <div className={styles.actions}>
        <button
          type="button"
          disabled={!isValid}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
