import axios from "@/lib/axios";
import type { Campaign } from "@/types/campaign";

const getAuthHeaders = () => {
  const token = localStorage.getItem("meta_access_token");

  return token
    ? { Authorization: `Bearer ${token}` }
    : {};
};

export const fetchCampaigns = async (
  adAccountId: string
): Promise<Campaign[]> => {
  const res = await axios.get(
    `/campaigns/meta/${adAccountId}`,
    {
      headers: getAuthHeaders(),
    }
  );

  return Array.isArray(res.data) ? res.data : [];
};

export const syncCampaigns = async (adAccountId: string) => {
  await axios.get(
    `/campaigns/meta/sync/${adAccountId}`,
    {
      headers: getAuthHeaders(),
    }
  );
};
