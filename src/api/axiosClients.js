import axios from "axios";

const BASE_URL = "http://localhost";
export const axiosClient = axios.create({ baseURL: BASE_URL });

axiosClient.interceptors.response.use((response) => {
  return response.data;
});
