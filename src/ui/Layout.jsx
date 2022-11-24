import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div
      className="w-full md:w-[80%] min-h-[100vh] mx-auto"
      data-theme="winter"
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
