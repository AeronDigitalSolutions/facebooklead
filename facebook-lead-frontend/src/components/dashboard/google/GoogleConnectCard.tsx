import { connectGoogleAds } from "../../../api/google";

export default function GoogleConnectCard() {
  return (
    <div className="card">
      <h3>Google Ads</h3>
      <p>Connect your Google Ads account to sync campaigns & leads</p>
      <button onClick={connectGoogleAds}>
        Connect Google Ads
      </button>
    </div>
  );
}
