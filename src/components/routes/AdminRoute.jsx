import { useLocation, Navigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole"; 

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, isLoading } = useRole(); // role = "admin", "member", or "user"
  const location = useLocation();

  if (loading || isLoading) return <p>Loading...</p>;

  if (!user || role !== "admin") {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute;
