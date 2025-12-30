import styles from "../../styles/dashbaord/campaigns.module.css";

export default function Campaigns() {
  return (
    <div className={styles.container}>
      <h1>Campaigns</h1>
      <p>All campaigns across Meta & Google</p>

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
          <tr>
            <td>Hair Jan</td>
            <td>Meta</td>
            <td>Lead Form</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>Brand Awareness</td>
            <td>Google</td>
            <td>Awareness</td>
            <td>Paused</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
