import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import { FiSun } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-800 font-black" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/mycart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-800 font-black" : ""
          }
        >
          My Cart
        </NavLink>
      </div>
    </>
  );

  const navigate = useNavigate();
  const handleSignOut = () => {
    logOut();
    navigate("/");
  };

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const html = document.documentElement;
    if (theme === "light") {
      html.setAttribute("data-theme", "dark");
      html.classList.remove("light");
      html.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
      html.classList.remove("dark");
      html.classList.add("light");
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
    console.log("Previous Theme:", theme);
  };

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme") || "light";
    setTheme(localStorageTheme);
    const html = document.documentElement;
    html.setAttribute("data-theme", localStorageTheme);
    html.classList.add(localStorageTheme);
    console.log("Local Storage Theme:", localStorageTheme);
  }, []);

  return (
    <>
      <ToastContainer></ToastContainer>
      <div className="navbar font-bold border-b-2 drop-shadow-2xl z-50">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] py-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <span className="normal-case text-xl text-blue-900">HudaHudi</span>
        </div>
        <div className="navbar-center justify-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div
              onClick={handleSignOut}
              className="flex justify-end items-center text-xs drop-shadow-2xl hover:text-red-700"
            >
              <img
                className="mr-1 w-5 rounded-full border border-white"
                src={user?.photoURL}
              />
              <span>{user?.displayName}</span>
            </div>
          ) : (
            <div className="text-xs">
              <Link to="/login">
                <button className="px-2 py-1 border border-blue hover:text-white hover:bg-blue-800 drop-shadow-lg rounded-md">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
        {theme === "light" ? (
          <MdDarkMode
            onClick={toggleTheme}
            className="ml-2 rounded-full w-5 h-5 text-xs"
          ></MdDarkMode>
        ) : (
          <FiSun
            onClick={toggleTheme}
            className="ml-2 rounded-full w-5 h-5 text-xs"
          ></FiSun>
        )}
      </div>
    </>
  );
};

export default NavBar;
