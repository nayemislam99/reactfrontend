import { Navigate, Outlet } from "react-router-dom";
const protectedRoute = () => {
  const auth = JSON.parse(localStorage.getItem("token"));
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default protectedRoute;
