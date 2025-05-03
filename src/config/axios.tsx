import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { getToken } from "../utils/getToken";

const token: string | null = getToken();
const BASE_URL: string = import.meta.env.VITE_APP_BASE_URL + "server/api/";

const privateInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    "x-access-token": `${token}`,
  },
});

const publicInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

privateInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export { privateInstance, publicInstance, BASE_URL };
