import { useContext, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import useAxiosPrivate from "../Hooks/usePrivateAxios";

const GetUserDetails = () => {
  const { user, setUser, accessToken } = useContext(AuthContext);
  const api = useAxiosPrivate();

  const getUser = async () => {
    try {
      const response = await api.get("api/users/own/");
      setUser(response.data);
      return true;
    } catch (err) {
      console.log(err);
      return;
    }
  };

  return getUser;
};

export default GetUserDetails;
