import styles from "../../../styles/dashbaord/campaigns.module.css";
import type { Campaign } from "@/types/campaign";
import CampaignRow from "./CampaignRow";

interface Props {
  campaigns: Campaign[];
}

export default function CampaignTable({ campaigns }: Props) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Campaign</th>
          <th>Platform</th>
          <th>Objective</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {campaigns.length === 0 ? (
          <tr>
            <td colSpan={4} className={styles.empty}>
              No campaigns found
            </td>
          </tr>
        ) : (
          campaigns.map((campaign) => (
            <CampaignRow
              key={campaign._id}
              campaign={campaign}
            />
          ))
        )}
      </tbody>
    </table>
  );
}
