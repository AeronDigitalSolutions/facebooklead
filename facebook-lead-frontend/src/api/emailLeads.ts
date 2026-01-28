import axios from "axios";
import { API_BASE } from "@/config/api";

const API_URL = `${API_BASE}/api/email-leads`;

/* =========================
   CREATE GROUP + SAVE LEADS
========================= */
export const saveEmailLeadsGroup = (
  groupName: string,
  leads: any[],
  groupId?: string
) =>
  axios.post(`${API_URL}/groups`, {
    groupName,
    groupId, // allows saving into existing group
    leads,
  });

/* =========================
   FETCH ALL EMAIL LEADS
========================= */
export const fetchAllEmailLeads = () =>
  axios.get(API_URL);

/* =========================
   FETCH ALL LEAD GROUPS
========================= */
export const fetchEmailLeadGroups = () =>
  axios.get(`${API_URL}/groups`);
