import styles from "../../../styles/dashbaord/leads.module.css";

export default function LeadsHeader({ view, onViewChange }: any) {
  return (
    <div className={styles.header}>
      <h2>Leads Centre</h2>

      <div className={styles.headerRight}>
        <div className={styles.viewToggle}>
          <button
            className={view === "pipeline" ? styles.active : ""}
            onClick={() => onViewChange("pipeline")}
          >
            Pipeline view
          </button>
          <button
            className={view === "table" ? styles.active : ""}
            onClick={() => onViewChange("table")}
          >
            Table view
          </button>
        </div>

        <button className={styles.primaryBtn}>+ Add leads</button>
      </div>
    </div>
  );
}
