import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer } from "react-toastify";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-800 font-black" : ""
          }
        >
          Home
        </NavLink>
      </div>
    </>
  );

  const navigate = useNavigate();
  const handleSignOut = () => {
    logOut();
    navigate("/");
  };

  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    html.setAttribute("data-theme", newTheme);
    html.classList.remove(currentTheme);
    html.classList.add(newTheme);
    localStorage.setItem("currentTheme", JSON.stringify(newTheme));
  };

  useEffect(() => {
    const currentTheme =
      JSON.parse(localStorage.getItem("currentTheme")) || "light";
    setCurrentTheme(currentTheme);
    const html = document.documentElement;
    html.classList.add(currentTheme);
  }, [currentTheme]);

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
          <span className="normal-case text-xl">HudaHudi</span>
        </div>
        <div className="navbar-center hidden lg:flex">
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
                <button className="px-2 py-1 border border-black hover:text-white hover:bg-slate-800 drop-shadow-lg rounded-md">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
        <button
          onClick={toggleTheme}
          className="ml-2 rounded-full w-7 h-7 border text-xs bg-black"
        ></button>
      </div>
    </>
  );
};

export default NavBar;
