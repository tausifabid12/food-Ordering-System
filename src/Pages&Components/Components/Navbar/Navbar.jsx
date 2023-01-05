import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useCart from '../../../Hooks/useCart/useCart';
import useUserData from '../../../Hooks/UseUserData/UseUserData';
import { useState, useEffect } from 'react';
import { Navbar, MobileNav, IconButton } from '@material-tailwind/react';

const Nav = () => {
  const [userInfo] = useUserData();
  const [cartProducts] = useCart();

  const { user, logOut } = useContext(AuthContext);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 text-gray-900 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-1">
      <>
        <li>
          <Link
            to="/"
            className=" rounded-md px-3 py-2  transition duration-150 ease-in hover:text-white hover:bg-primary  "
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className=" rounded-md px-3 py-2  transition duration-150 ease-in hover:text-white hover:bg-primary "
          >
            Products
          </Link>
        </li>
        {/* <li>
          <Link
            to="/"
            className=" rounded-md px-3 py-2  transition duration-150 ease-in hover:text-white hover:bg-primary "
          >
            Favorites
          </Link>
        </li> */}

        {userInfo?.role === 'admin' || userInfo?.role === 'restaurantOwner' ? (
          <li>
            <Link
              to="/dashboard"
              className=" rounded-md px-3 py-2  transition duration-150 ease-in hover:text-white hover:bg-primary "
            >
              Dashboard
            </Link>
          </li>
        ) : (
          ''
        )}

        {user?.uid ? (
          <li>
            {userInfo && userInfo?.role !== 'restaurantOwner' && (
              <div className="">
                <Link
                  to="/cart"
                  className="hidden lg:block rounded-md px-3 py-2  transition duration-150 ease-in hover:text-white hover:bg-primary "
                >
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
            )}
          </li>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className=" rounded-md px-3 py-2  transition duration-150 ease-in hover:text-white hover:bg-primary "
              >
                Log in
              </Link>
            </li>
            <li>
              <Link
                to="/signUp"
                className=" rounded-md px-3 py-2  transition duration-150 ease-in hover:text-white hover:bg-primary "
              >
                SignUP
              </Link>
            </li>
          </>
        )}
      </>
    </ul>
  );

  return (
    <Navbar className="mx-auto min-w-full rounded-none py-3 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link
          to="/"
          className=" font-semibold text-primary text-lg lg:text-2xl"
        >
          Express Food
        </Link>

        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center justify-center">
          <div className=" mr-2">
            {user?.uid ? (
              <div>
                <button
                  onClick={() => logOut()}
                  className="bg-primary rounded-md transition duration-150 ease-in font-semibold px-4 py-2 hidden  lg:block border-2 border-primary hover:text-primary hover:bg-white "
                >
                  LogOut
                </button>
                <div className="block lg:hidden">
                  <div className="flex-none items-center ">
                    <div className="dropdown dropdown-end">
                      {userInfo && userInfo?.role !== 'restaurantOwner' && (
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
                                {cartProducts?.data &&
                                  cartProducts?.data.length}
                              </span>
                            </div>
                          </label>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="hidden lg:block  dropdown dropdown-bottom dropdown-end ">
                  <label
                    tabIndex={0}
                    className="btn btn-primary btn-xs lg:btn-sm "
                  >
                    Join us
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow-md bg-white  rounded-box w-52"
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
          <IconButton
            variant="text"
            className="ml-auto  h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        {user?.uid && (
          <button onClick={() => logOut()} className="btn btn-primary btn-sm ">
            LogOut
          </button>
        )}
        {/* <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button> */}
      </MobileNav>
    </Navbar>
  );
};

export default Nav;
