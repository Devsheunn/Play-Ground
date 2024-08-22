import axios from "axios";

const api = axios.create({
  baseURL:
    "https://egbin-ssp-api-c8axfebjhacngsb4.eastus-01.azurewebsites.net/",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

// api.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem("accessToken");

//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }

//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// api.interceptors.response.use(
//   response => {
//     console.log(response);
//     return response;
//   },
//   async error => {
//     const originaRequest = error.config;

//     if (error.response.status === 401 && !originaRequest._retry) {
//       originaRequest._retry = true;

//       try {
//         const res = await api.post(
//           "api/users/token/",
//           {},
//           { withCredentials: true }
//         );

//         const { accessToken } = res.data;

//         localStorage.setItem("accessToken", accessToken);

//         originaRequest.headers["Authorization"] = `Bearer ${accessToken}`;
//         return api(originaRequest);
//       } catch (refreshError) {
//         localStorage.removeItem("accessToken");
//         window.localStorage.href = "/";
//       }
//     }

//     return Promise.reject(error);
//   }
// );

export default api;
