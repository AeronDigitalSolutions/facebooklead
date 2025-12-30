import styles from "../../styles/dashbaord/leads.module.css";

export default function Leads() {
  return (
    <div className={styles.container}>
      <h1>Leads</h1>
      <p>All incoming leads</p>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Source</th>
            <th>Campaign</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rahul</td>
            <td>WhatsApp</td>
            <td>Hair Jan</td>
            <td>New</td>
          </tr>
          <tr>
            <td>Anita</td>
            <td>Lead Form</td>
            <td>Skin Care</td>
            <td>Contacted</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
