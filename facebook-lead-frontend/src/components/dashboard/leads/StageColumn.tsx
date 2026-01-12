import LeadCard from "./LeadCard";
import styles from "../../../styles/dashbaord/leads.module.css";

export default function StageColumn({ stage, leads }: any) {
  return (
    <div className={styles.column}>
      <div className={styles.columnHeader}>
        <h4>{stage.charAt(0).toUpperCase() + stage.slice(1)}</h4>
        <span>{leads.length}</span>
      </div>

      {leads.length === 0 ? (
        <div className={styles.emptyState}>
          No {stage} leads
        </div>
      ) : (
        leads.map((lead: any) => (
          <LeadCard key={lead._id} lead={lead} />
        ))
      )}
    </div>
  );
}
