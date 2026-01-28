import axios from "axios";
import { API_BASE } from "@/config/api";

const API = `${API_BASE}/api/email`;

/* =========================
   MAILBOX CONNECTION
========================= */

export const testMailboxConnection = (data: any) =>
  axios.post(`${API}/mailboxes/test`, data);

export const saveMailbox = (data: any) =>
  axios.post(`${API}/mailboxes`, data);

/* =========================
   EMAIL ACCOUNTS LIST
========================= */

export const fetchMailboxes = () =>
  axios.get(`${API}/mailboxes`);

export const toggleWarmup = (mailboxId: string) =>
  axios.patch(`${API}/mailboxes/${mailboxId}/warmup`);

export const deleteMailbox = (mailboxId: string) =>
  axios.delete(`${API}/mailboxes/${mailboxId}`);

/* =========================
   INBOX
========================= */

export const fetchFolderEmails = (
  mailboxId: string,
  folder: string
) => axios.get(`${API}/inbox/${mailboxId}/${folder}`);

export const syncFolder = (
  mailboxId: string,
  folder: string
) => axios.post(`${API}/inbox/${mailboxId}/${folder}/sync`);

export const fetchEmailById = (emailId: string) =>
  axios.get(`${API}/email/${emailId}`);

export const replyToEmail = (emailId: string, body: string) =>
  axios.post(`${API}/email/${emailId}/reply`, { body });

export const sendNewEmail = (
  mailboxId: string,
  to: string,
  subject: string,
  body: string
) =>
  axios.post(`${API}/email/send`, {
    mailboxId,
    to,
    subject,
    body,
  });

/* =========================
   VERIFY EMAIL
========================= */

export const verifyEmail = (email: string) =>
  axios.post(`${API}/verify-email`, { email });
