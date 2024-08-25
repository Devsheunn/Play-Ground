import { useEffect } from "react";
import useRefreshToken from "./useRefresh";
import useAuth from "./UseAuth";
import { PrivateApi } from "../Utils/axios";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = PrivateApi.interceptors.request.use(
      config => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      error => Promise.reject(error)
    );

    const responseIntercept = PrivateApi.interceptors.response.use(
      response => response,
      async error => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return PrivateApi(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      PrivateApi.interceptors.request.eject(requestIntercept);
      PrivateApi.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return PrivateApi;
};

export default useAxiosPrivate;
