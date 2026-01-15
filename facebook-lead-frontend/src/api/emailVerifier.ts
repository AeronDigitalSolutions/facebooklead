import axios from "axios";

const API = "http://localhost:5000/api/email";

export const verifyEmail = (email: string) =>
  axios.post(`${API}/verify-email`, { email });
