// src/services/apiClient.ts
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  withCredentials: true, // send cookies
  headers: { "Content-Type": "application/json" },
});

export default apiClient;
