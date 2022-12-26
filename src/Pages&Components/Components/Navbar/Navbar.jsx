import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useCart from "../../../Hooks/useCart/useCart";
import useUserData from "../../../Hooks/UseUserData/UseUserData";

const Navbar = () => {
  const [userInfo] = useUserData();
  const [cartProducts] = useCart();

  const { user, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <li className=" rounded-md  transition duration-150 ease-in hover:text-white hover:bg-primary ">
        <Link to="/">Home</Link>
      </li>
      <li className=" rounded-md  transition duration-150 ease-in hover:text-white hover:bg-primary ">
        <Link to="/products">Products</Link>
      </li>
      <li className=" rounded-md  transition duration-150 ease-in hover:text-white hover:bg-primary ">
        <Link to="/">Favorites</Link>
      </li>

      {userInfo?.role === "admin" ||
        (userInfo?.role === "restaurantOwner" && (
          <li className=" rounded-md  transition duration-150 ease-in hover:text-white hover:bg-primary ">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        ))}

      {user?.uid ? (
        <li className="hidden lg:block rounded-md  transition duration-150 ease-in hover:text-white hover:bg-primary ">
          <div className="dropdown dropdown-end">
            <Link to="/cart">
              <p className="flex items-center justify-center px-2">
                <span className="pr-2">Cart</span>

                <label tabIndex={0} className=" p-0">
                  <div className="indicator">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">
                      {cartProducts?.data && cartProducts?.data.length}
                    </span>
                  </div>
                </label>
              </p>
            </Link>
          </div>
        </li>
      ) : (
        <>
          <li className=" rounded-md  transition duration-150 ease-in hover:text-white hover:bg-primary ">
            <Link to="/login">Log in</Link>
          </li>
          <li className=" rounded-md  transition duration-150 ease-in hover:text-white hover:bg-primary ">
            <Link to="/signUp">SignUP</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar max-w-full backdrop-blur-sm font-semibold">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn text-primary p-0 btn-ghost lg:hidden"
          >
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
            className="menu menu-compact dropdown-content mt-3 p-2 space-y-3 bg-base-100 rounded-box w-52"
          >
            {navLinks}
            <li>
              <Link to="/deliveryManReg">SignUp Delivery Man</Link>
            </li>
            <li>
              <Link to="/restaurantReg">SignUP Restaurant</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className=" pl-2 font-semibold text-primary text-md lg:text-2xl"
        >
          Express Food
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navLinks}</ul>
      </div>
      <div className="navbar-end ">
        {user?.uid ? (
          <div>
            <button
              onClick={() => logOut()}
              className="btn btn-primary btn-sm hidden lg:block"
            >
              LogOut
            </button>
            <div className="block lg:hidden">
              <div className="flex-none items-center ">
                <div className="dropdown dropdown-end">
                  <Link to="/cart">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost text-primary btn-circle"
                    >
                      <div className="indicator">
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
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span className="badge badge-sm indicator-item">
                          {cartProducts?.data && cartProducts?.data.length}
                        </span>
                      </div>
                    </label>
                  </Link>
                </div>

                <div className="dropdown dropdown-end  ">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src="https://placeimg.com/80/80/people" alt="" />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content  mt-3 p-2  bg-white rounded-box w-52"
                  >
                    <li>
                      <Link className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link>Settings</Link>
                    </li>
                    <li onClick={() => logOut()}>
                      <Link>Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="hidden lg:block  dropdown dropdown-bottom dropdown-end ">
              <label tabIndex={0} className="btn btn-primary btn-xs lg:btn-sm ">
                Join us
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2  bg-white rounded-box w-52"
              >
                <li>
                  <Link to="/deliveryManReg">As a Delivery Man</Link>
                </li>
                <li>
                  <Link to="/restaurantReg">As a Restaurant</Link>
                </li>
              </ul>
            </div>
          </>
        )}

        {/* <Link className="btn">Get started</Link> */}
      </div>
    </div>
  );
};

export default Navbar;
