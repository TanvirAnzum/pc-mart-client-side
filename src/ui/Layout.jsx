import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="w-full min-h-[100vh] mx-auto" data-theme="winter">
      <Navbar />
      <div className="min-h-[66vh]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
