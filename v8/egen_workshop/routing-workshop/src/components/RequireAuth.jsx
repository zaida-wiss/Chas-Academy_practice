import { Navigate, Outlet, useLocation } from "react-router";

export default function RequireAuth({ isLogged }) {
  const location = useLocation();

  if (!isLogged) {
    // Skicka till login och spara var vi kom ifrån i 'state' [cite: 293, 299]
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return <Outlet />;
}