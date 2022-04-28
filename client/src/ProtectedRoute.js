import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./Hooks/useAuth.js";

const ProtectedRoute = () => {
  const location = useLocation();

  const { auth } = useAuth();

  return auth?.username ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
