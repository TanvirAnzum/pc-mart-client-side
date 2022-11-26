import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { getRole } from "../APIs/usersAPI";
import { AuthContext } from "../context/AuthContext";
import GlobalLoader from "../ui/GlobalLoader";
import AllSeller from "./AllSeller";
import MyOrder from "./MyOrder";
import MyProducts from "./MyProducts";

const Dashboard = () => {
  const { user } = useContext(AuthContext) || {};
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dashboard", user.email],
    queryFn: () => getRole(user.email),
  });

  if (isLoading) return <GlobalLoader />;
  if (data?.role === "admin") return <AllSeller />;
  else if (data?.role === "buyer") return <MyOrder />;
  else if (data?.role === "seller") return <MyProducts />;
};

export default Dashboard;
