import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { userSignOut } from "../firebase/authenticaion.js";

const Navbar = () => {
  const auth = useContext(AuthContext);
  const { user } = auth || {};

  return (
    <div className="navbar bg-base-100 shadow shadow-neutral h-[10vh] rounded p-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li tabIndex={0}>
              <Link className="justify-between">
                Categories
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link to="/category/1">Desktop</Link>
                </li>
                <li>
                  <Link to="/category/2">Components</Link>
                </li>
                <li>
                  <Link to="/category/3">Accesories</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl font-serif" to="/">
          PC Mart
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li tabIndex={0}>
            <Link>
              Categories
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2 z-[100] bg-slate-100">
              <li>
                <Link to="/category/1">Desktop</Link>
              </li>
              <li>
                <Link to="/category/2">Components</Link>
              </li>
              <li>
                <Link to="/category/3">Accessories</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-8">
        {auth?.accessToken ? (
          <>
            <div
              className="tooltip tooltip-bottom tooltip-primary"
              data-tip={user.displayName}
            >
              <img
                src={user.photoURL}
                alt=""
                className="hidden sm:block w-[2em] h-[2em] rounded-full ring cursor-pointer"
              />
            </div>
            <button className="btn btn-error" onClick={userSignOut}>
              Log Out
            </button>
          </>
        ) : (
          <Link className="btn btn-success" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
