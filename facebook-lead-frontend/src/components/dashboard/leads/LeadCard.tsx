import styles from "../../../styles/dashbaord/leads.module.css";

export default function LeadCard({ lead }: any) {
  return (
    <div className={styles.leadCard}>
      <div className={styles.avatar}>
        {lead.name?.[0] || "L"}
      </div>

      <div>
        <div className={styles.leadName}>{lead.name || "Unnamed Lead"}</div>
        <div className={styles.leadSource}>{lead.source || "Direct"}</div>
      </div>
    </div>
  );
}
