import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://api.alquran.cloud/v1",
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);
