import axios from "../lib/axios";

/* 🔥 START GOOGLE OAUTH (FULL PAGE REDIRECT) */
export const connectGoogleAds = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login again");
    window.location.href = "/signin";
    return;
  }

  // IMPORTANT: direct browser redirect
  window.location.href =
    `${import.meta.env.VITE_API_URL}/google/auth`;
};

/* 🔐 FETCH ACCOUNTS */
export const fetchGoogleAccounts = () => {
  return axios.get("/google/accounts");
};
