import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { getRole } from "../APIs/usersAPI";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext) || {};

  const { data, isLoading } = useQuery({
    queryKey: ["dashboard", user.email],
    queryFn: () => getRole(user.email),
  });

  console.log(data);

  return <div>Dashboard</div>;
};

export default Dashboard;
