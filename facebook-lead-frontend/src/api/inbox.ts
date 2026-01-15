import axios from "axios";

const API = "http://localhost:5000/api/email";

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
