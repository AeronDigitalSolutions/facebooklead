import axios from "../lib/axios";

/**
 * 🔥 START GOOGLE OAUTH
 * Browser redirect (NOT axios)
 */
export const connectGoogleAds = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login again");
    return;
  }

  // Pass JWT as query param
  window.location.href = `${import.meta.env.VITE_API_URL}/google/auth?token=${token}`;
};

/* 🔐 FETCH ACCOUNTS */
export const fetchGoogleAccounts = () => {
  return axios.get("/google/accounts");
};

/* 🔐 FETCH CAMPAIGNS */
export const fetchGoogleCampaigns = (customerId: string) => {
  return axios.get(`/google/campaigns/${customerId}`);
};

/* 🔐 FETCH LEADS */
export const fetchGoogleLeads = (customerId: string) => {
  return axios.get(`/google/leads/${customerId}`);
};
