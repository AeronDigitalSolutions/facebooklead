export default function LeadsTable({ leads }: any) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Source</th>
          <th>Campaign</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {leads.map((l: any) => (
          <tr key={l._id}>
            <td>{l.name || "-"}</td>
            <td>{l.phone}</td>
            <td>{l.source}</td>
            <td>{l.campaignName || "-"}</td>
            <td>{l.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
