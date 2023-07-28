import axios from "axios";

const BASE_URL = "http://43.202.4.184:8080";
export const axiosClient = axios.create({ baseURL: BASE_URL });

axiosClient.interceptors.response.use((response) => {
  return response.data;
});

axiosClient.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json; charset=utf-8";
  // if (localStorage.getItem("token")) {
  //   config.headers["Authorization"] = `Bearer 여기에 토큰 넣어야함`;
  // }
  return config;
});
