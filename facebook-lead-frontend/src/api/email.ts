import axios from "axios";

import { API_BASE } from "@/config/api";
const API_URL = `${API_BASE}/api/email-leads`;

/* =========================
   EMAIL CONNECTION
========================= */

export const testMailboxConnection = (data: any) =>
  axios.post(`${API_URL}/mailboxes/test`, data);

export const saveMailbox = (data: any) =>
  axios.post(`${API_URL}/mailboxes`, data);

/* =========================
   EMAIL ACCOUNTS LIST
========================= */

// Fetch all connected email accounts
export const fetchMailboxes = () =>
  axios.get(`${API_URL}/mailboxes`);

// Toggle warmup ON / OFF
export const toggleWarmup = (mailboxId: string) =>
  axios.patch(`${API_URL}/mailboxes/${mailboxId}/warmup`);

// Delete an email account
export const deleteMailbox = (mailboxId: string) =>
  axios.delete(`${API_URL}/mailboxes/${mailboxId}`);

/* =========================
   (NEXT FEATURES - COMING)
========================= */

// Send test email (next step)
// export const sendTestEmail = (id: string, to: string) =>
//   axios.post(`${API_URL}/mailboxes/${id}/test-email`);

// Health check
// export const checkMailboxHealth = (id: string) =>
//   axios.get(`${API_URL}/mailboxes/${id}/health`);
