import { io } from "socket.io-client";

const SOCKET_URL =
  import.meta.env.VITE_API_URL ||
  "https://facebookleadbackend-2.onrender.com";

export const socket = io(SOCKET_URL, {
  withCredentials: true,
  transports: ["polling", "websocket"], // 🚨 DO NOT force websocket only
});
