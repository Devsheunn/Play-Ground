import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const token = localStorage.getItem("access");

  if (loading) {
    return <div>Loading</div>;
  }

  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
