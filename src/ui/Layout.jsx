import Aos from "aos";
import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  // const auth = getAuth();
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) setAuth(user);
  //   });
  // }, [auth]);

  useEffect(() => {
    Aos.init({ duration: 1000, offset: 0, easing: "ease-in-out", once: true });
  }, []);
  return (
    <div className="w-full min-h-[100vh] mx-auto" data-theme="winter">
      <Navbar />
      <div className="w-full min-h-[66vh] flex flex-col justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
