export interface Campaign {
  _id: string;
  metaCampaignId: string;
  adAccountId: string;

  name: string;
  objective?: string;
  status: string;

  platform: "Meta";

  createdAt: string;
}
