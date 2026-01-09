import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MetaProcessing() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("meta_access_token", token);
    }

    navigate("/dashboard/integrations/meta/assets");
  }, [navigate]);

  return <p>Processing Meta connection…</p>;
}
