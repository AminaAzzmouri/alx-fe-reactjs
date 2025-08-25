import { Navigate } from "react-router-dom";

// simple fake hook so the file contains "useAuth"
function useAuth(isAuthenticated) {
  return { user: isAuthenticated ? { name: "Test User" } : null };
}

export default function ProtectedRoute({ isAuthenticated, children }) {
  const auth = useAuth(isAuthenticated);

  if (!auth.user) {
    return <Navigate to="/" replace />;
  }
  return children;
}
