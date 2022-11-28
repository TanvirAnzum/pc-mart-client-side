import React from "react";
import { useRouteError } from "react-router";
import { Link } from "react-router-dom";
import errorImg from "../assets/images/404-pages.jpg";
import { userSignOut } from "../firebase/authenticaion";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="w-full  min-h-screen flex flex-col gap-5 items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <img src={errorImg} alt="" />
        <p className="text-error text-center font-semibold text-xl">
          Something went wrong!!!
        </p>
        <p className="text-error text-center font-semibold text-xl">
          {error.statusText || error.message}
        </p>
        <div className="btn-group">
          <Link className="btn btn-sm btn-success" to={"/"}>
            Home
          </Link>
          <button className="btn btn-sm btn-error" onClick={userSignOut}>
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
