import axios from "../lib/axios";

/* 🔥 START OAUTH (CORRECT WAY) */
export const connectGoogleAds = async () => {
  const res = await axios.get("/google/auth"); // JWT sent here
  window.location.href = res.data.url;         // Redirect to Google
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
