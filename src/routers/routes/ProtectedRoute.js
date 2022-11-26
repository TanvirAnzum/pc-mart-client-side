import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Navigate } from "react-router";
import { getRole } from "../../APIs/usersAPI";
import { AuthContext } from "../../context/AuthContext";
import GlobalLoader from "../../ui/GlobalLoader";

const ProtectedRoute = ({ children, role }) => {
  const { user } = useContext(AuthContext) || {};

  const { data, isLoading } = useQuery({
    queryKey: ["dashboard", user.email],
    queryFn: () => getRole(user.email),
  });

  let content;
  if (isLoading) content = <GlobalLoader />;
  else if (data && !isLoading)
    content = data.role === role ? children : <Navigate to="/dashboard" />;

  return <>{content}</>;
};

export default ProtectedRoute;
