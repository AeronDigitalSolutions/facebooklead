import axios from "axios";
import { API_BASE } from "@/config/api";

const API = `${API_BASE}/email`;

export const verifyEmail = (email: string) =>
  axios.post(`${API}/verify-email`, { email });
