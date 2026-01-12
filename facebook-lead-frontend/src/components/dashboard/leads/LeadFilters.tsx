import { useState } from "react";
import styles from "../../../styles/dashbaord/leads.module.css";
import type { Campaign } from "@/types/campaign";

interface FiltersProps {
  onChange: (filters: any) => void;
  campaigns: Campaign[];
}

export default function LeadsFilters({
  onChange,
  campaigns,
}: FiltersProps) {
  const [showFilters, setShowFilters] = useState(true);
  const [labels, setLabels] = useState<string[]>([]);

  const toggleLabel = (label: string) => {
    setLabels((prev) => {
      const updated = prev.includes(label)
        ? prev.filter((l) => l !== label)
        : [...prev, label];

      onChange({ labels: updated });
      return updated;
    });
  };

  if (!showFilters) {
    return (
      <div className={styles.filtersTop}>
        <button
          className={styles.outlineBtn}
          onClick={() => setShowFilters(true)}
        >
          Show filters
        </button>
      </div>
    );
  }

  return (
    <>
      {/* TOP ACTION BAR */}
      <div className={styles.filtersTop}>
        <button className={styles.outlineBtn}>Add custom stage</button>
        <button className={styles.outlineBtn}>Bulk edit</button>

        <button
          className={styles.hideBtn}
          onClick={() => setShowFilters(false)}
        >
          Hide filters
        </button>
      </div>

      {/* FILTERS ROW */}
      <div className={styles.filters}>
        {/* CAMPAIGN (DYNAMIC) */}
        <select
          onChange={(e) =>
            onChange({
              campaignId: e.target.value || undefined,
            })
          }
        >
          <option value="">Campaign</option>
          {campaigns.map((c) => (
            <option
              key={c.metaCampaignId}
              value={c.metaCampaignId}
            >
              {c.name}
            </option>
          ))}
        </select>

        {/* STATUS */}
        <select onChange={(e) => onChange({ status: e.target.value })}>
          <option value="">Status</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="qualified">Qualified</option>
          <option value="followup">Follow-up</option>
          <option value="converted">Converted</option>
          <option value="lost">Lost</option>
        </select>

        {/* SOURCE */}
        <select onChange={(e) => onChange({ source: e.target.value })}>
          <option value="">Source</option>
          <option value="form">Form</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="messenger">Messenger</option>
          <option value="instagram">Instagram</option>
          <option value="website">Website</option>
        </select>

        {/* DATE RANGE → BACKEND COMPATIBLE */}
        <div className={styles.dateRange}>
          <input
            type="date"
            onChange={(e) =>
              onChange({ startDate: e.target.value })
            }
          />
          <span>–</span>
          <input
            type="date"
            onChange={(e) =>
              onChange({ endDate: e.target.value })
            }
          />
        </div>

        {/* ASSIGNED AGENT */}
        <select
          onChange={(e) =>
            onChange({ agent: e.target.value })
          }
        >
          <option value="">Assigned to</option>
          <option value="unassigned">Unassigned</option>
          <option value="agent_1">Agent 1</option>
          <option value="agent_2">Agent 2</option>
        </select>

        {/* LABELS */}
        <div className={styles.labels}>
          {["hot", "warm", "cold"].map((label) => (
            <span
              key={label}
              className={`${styles.label} ${
                labels.includes(label)
                  ? styles.activeLabel
                  : ""
              }`}
              onClick={() => toggleLabel(label)}
            >
              {label.toUpperCase()}
            </span>
          ))}
        </div>

        <button className={styles.moreBtn}>⋯</button>
      </div>
    </>
  );
}
