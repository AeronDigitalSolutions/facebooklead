import { io } from "socket.io-client";

const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const SOCKET_URL = baseUrl.replace('/api', '');

export const socket = io(SOCKET_URL, {
  transports: ["websocket"],
  withCredentials: true,
});
