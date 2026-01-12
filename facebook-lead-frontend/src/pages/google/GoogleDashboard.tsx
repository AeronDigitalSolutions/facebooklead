import { Outlet, useNavigate } from "react-router-dom";

export default function GoogleDashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Google Ads</h1>

      <nav style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => navigate("accounts")}>Accounts</button>
        <button onClick={() => navigate("campaigns")}>Campaigns</button>
        <button onClick={() => navigate("leads")}>Leads</button>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
