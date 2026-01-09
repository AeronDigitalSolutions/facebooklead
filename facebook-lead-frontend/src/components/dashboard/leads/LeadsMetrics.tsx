import styles from "../../../styles/dashbaord/leads.module.css";

export default function LeadsMetrics({ leads }: any) {
  const intake = leads.filter((l: any) => l.stage === "intake").length;
  const converted = leads.filter((l: any) => l.stage === "converted").length;

  return (
    <div className={styles.metrics}>
      <span>Intake leads: <b>{intake}</b></span>
      <span>Converted leads: <b>{converted}</b></span>
      <span>
        Conversion rate:{" "}
        <b>{intake ? Math.round((converted / intake) * 100) : 0}%</b>
      </span>
    </div>
  );
}
