import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const ProtectedRoutes = ({ children }) => {
  const { user, loading, accessToken } = useContext(AuthContext);
  console.log(accessToken);
  const token = localStorage.getItem("access");

  if (loading) {
    return <div>Loading</div>;
  }

  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
