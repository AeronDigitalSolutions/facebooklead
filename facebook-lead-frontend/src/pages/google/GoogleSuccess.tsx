import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GoogleSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => {
      navigate("/dashboard/google/accounts");
    }, 1500);

    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div>
      <h2>✅ Google Ads Connected</h2>
      <p>Redirecting to Google dashboard...</p>
    </div>
  );
}
