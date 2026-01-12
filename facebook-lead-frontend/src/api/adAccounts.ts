import axios from "@/lib/axios";
import type { AdAccount } from "../types/adAccount";

const getHeaders = () => {
  const token = localStorage.getItem("meta_access_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const fetchAdAccounts = async (): Promise<AdAccount[]> => {
  const res = await axios.get("/meta/ad-accounts", {
    headers: getHeaders(),
  });

  return Array.isArray(res.data) ? res.data : [];
};
