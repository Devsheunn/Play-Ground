import { useContext, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import useAxiosPrivate from "../Hooks/usePrivateAxios";

const GetUserDetails = () => {
  const { user, setUser } = useContext(AuthContext);
  const api = useAxiosPrivate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await api.get("api/user/me");
        setUser(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
        return;
      }
    };

    getUser();
  }, [api, setUser]);
  console.log(user);
  return;
};

export default GetUserDetails;
