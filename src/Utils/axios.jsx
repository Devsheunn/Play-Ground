import axios from "axios";
const BASE_URL =
  "https://egbin-ssp-api-c8axfebjhacngsb4.eastus-01.azurewebsites.net/";

const PublicApi = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export default PublicApi;

export const PrivateApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
