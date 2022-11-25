import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { getRole } from "../APIs/usersAPI";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import GlobalLoader from "./GlobalLoader";

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext) || {};

  const { data, isLoading } = useQuery({
    queryKey: ["dashboard", user.email],
    queryFn: () => getRole(user.email),
  });

  let content;
  if (isLoading) content = <GlobalLoader />;
  else if (!isLoading)
    content = (
      <div>
        <Navbar />
        <div className="drawer drawer-mobile ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex items-center justify-center">
            <Outlet />
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-300 text-base-content ">
              {data?.role === "buyer" && (
                <li>
                  <Link className="w-full h-full" to="/dashboard/myOrder">
                    My Orders
                  </Link>
                </li>
              )}
              {data?.role === "seller" && (
                <>
                  <li>
                    <Link className="w-full h-full">My Products</Link>
                  </li>
                  <li>
                    <Link className="w-full h-full">My Buyers</Link>
                  </li>
                  <li>
                    <Link className="w-full h-full" to="/dashboard/addProduct">
                      Add a Product
                    </Link>
                  </li>
                </>
              )}
              {data?.role === "admin" && (
                <>
                  <li>All Seller</li>
                  <li>All Buyer</li>
                  <li>Reported Item</li>
                </>
              )}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );

  return content;
};

export default DashBoardLayout;
