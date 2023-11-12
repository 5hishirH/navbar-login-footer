import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MyButton from "../Button/MyButton";
import { FiMenu } from "react-icons/fi";
import { MdCloseFullscreen } from "react-icons/md";

const Navbar = () => {
  // replace with actual user data
  const user = {
    email: "testuser@code.com",
    displayName: "Username",
    photoURL: "https://i.ibb.co/XVKD97P/dummy-profile-1.jpg",
  };
  //...
  const [open, setOpen] = useState(false);
  // replace with actual public navlinks
  const publicNavlinks = [
    {
      name: "Home",
      pageLink: "/",
    },
    {
      name: "Blogs",
      pageLink: "/blogs",
    },
  ];

  // replace with actual private navlinks
  const privateNavlinks = [
    {
      name: "About",
      pageLink: "/about",
    },
    {
      name: "Contact",
      pageLink: "/contact",
    },
  ];

  // basic navbar styles
  const navbarStyles = {
    backgroud: "bg-white",
    inactiveNavLink: "text-black font-medium",
    activeNavLink: "text-emerald-600 font-bold",
  };

  //   Log in btn styles
  const loginBtnStyle = {
    backgroud: "bg-emerald-600",
    textColor: "text-white",
  };

  //   Log out btn styles
  const logoutBtnStyle = {
    backgroud: "bg-orange-500",
    textColor: "text-white",
  };

  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="w-11/12 lg:w-4/5 mx-auto py-6 flex items-center justify-between">
        {/* Logo Part */}
        <div className="flex items-center gap-4">
          <span
            onClick={() => {
              setOpen(!open);
            }}
            className="cursor-pointer block lg:hidden"
          >
            {open ? <MdCloseFullscreen /> : <FiMenu />}
          </span>
          <div className="h-8 lg:h-10 lg:w-10">
            <img
              src="https://i.ibb.co/N1v8ZTZ/icons8-favicon-96.png"
              alt="logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-2xl font-bold">
            <span>Nav</span>
            <span>bar</span>
          </div>
        </div>
        {/* Navlinks and user info */}
        <div className="flex items-center gap-4">
          {/* navlinks */}
          <div
            className={`text-lg font-medium ${
              open ? "" : "hidden lg:flex"
            } flex flex-col lg:flex-row gap-4 absolute lg:relative top-11 left-0 lg:top-auto lg:left-auto pl-4 lg:pl-0 w-full lg:w-fit bg-some_green`}
          >
            {publicNavlinks?.map(({ name, pageLink }) => (
              <NavLink
                to={pageLink}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? `text-lg ${navbarStyles.activeNavLink}`
                    : `text-lg ${navbarStyles.inactiveNavLink}`
                }
              >
                {name}
              </NavLink>
            ))}
            {user
              ? privateNavlinks?.map(({ name, pageLink }) => (
                  <NavLink
                    to={pageLink}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? `text-lg ${navbarStyles.activeNavLink}`
                        : `text-lg ${navbarStyles.inactiveNavLink}`
                    }
                  >
                    {name}
                  </NavLink>
                ))
              : ""}
          </div>
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <div className="h-10 w-10 border-2 border-emerald-600 rounded-full overflow-hidden">
                  <img
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co/GRmXjRc/icons8-avatar-96.png"
                    }
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <button
                  className={`${logoutBtnStyle.backgroud} ${logoutBtnStyle.textColor} ${MyButton}`}
                >
                  LOGOUT
                </button>
              </>
            ) : (
              <NavLink
                to={"/login"}
                className={`${loginBtnStyle.backgroud} ${loginBtnStyle.textColor} ${MyButton}`}
              >
                LOGIN
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
