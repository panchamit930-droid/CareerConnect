import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, allowedRole }) => {
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);

  // User is not logged in
  if (!isAuthenticated || !currentUser) {
    return <Navigate to="/login" replace />;
  }

  // Role check (only if a role is provided)
  if (allowedRole && currentUser.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
