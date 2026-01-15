import axios from "axios";

const API_URL = "http://localhost:5000/api/email-leads";

/* SAVE GROUP + LEADS */
export const saveEmailLeadsGroup = (
  groupName: string,
  leads: any[]
) =>
  axios.post(`${API_URL}/groups`, {
    groupName,
    leads,
  });

/* 🔥 FETCH ALL EMAIL LEADS */
export const fetchAllEmailLeads = () =>
  axios.get(API_URL);
