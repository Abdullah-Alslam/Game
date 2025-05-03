// components/RequireAuth.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function RequireAuth() {
  const { user, loading } = useAuth();
console.log(user);

  if (loading) return <p>Loading...</p>;

  return user ? <Outlet/> : <Navigate to="/signin" replace={true} />;
}
