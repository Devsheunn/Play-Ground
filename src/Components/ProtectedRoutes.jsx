import { useAuth } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading</div>;
  }

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
