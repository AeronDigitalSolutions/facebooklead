import StageColumn from "./StageColumn";
import styles from "../../../styles/dashbaord/leads.module.css";

const STAGES = ["intake", "qualified", "converted"];

export default function PipelineBoard({ leads }: any) {
  return (
    <div className={styles.pipeline}>
      {STAGES.map((stage) => (
        <StageColumn
          key={stage}
          stage={stage}
          leads={leads.filter((l: any) => l.stage === stage)}
        />
      ))}

      <div className={styles.addStage}>
        <p>Add a custom stage</p>
        <button className={styles.primaryBtn}>Add custom stage</button>
      </div>
    </div>
  );
}
