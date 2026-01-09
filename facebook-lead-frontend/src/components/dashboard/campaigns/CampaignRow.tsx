import type { Campaign } from "@/types/campaign";
import styles from "../../../styles/dashbaord/campaigns.module.css";

export default function CampaignRow({
  campaign,
}: {
  campaign: Campaign;
}) {
  return (
    <tr>
      <td>{campaign.name}</td>
      <td>
        <span className={styles.meta}>Meta</span>
      </td>
      <td>{campaign.objective || "—"}</td>
      <td>
        <span
          className={`${styles.status} ${
            styles[campaign.status.toLowerCase()]
          }`}
        >
          {campaign.status}
        </span>
      </td>
    </tr>
  );
}
