import axios from "@/lib/axios";

export const getLeads = (params?: any) =>
  axios.get(`/leads`, { params });

export const getLeadById = (id: string) =>
  axios.get(`/leads/${id}`);

export const updateLead = (id: string, data: any) =>
  axios.patch(`/leads/${id}`, data);
