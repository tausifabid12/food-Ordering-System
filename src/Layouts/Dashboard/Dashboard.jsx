import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Pages&Components/Components/Navbar/Navbar";
import { FaAngleDown } from "react-icons/fa";
import useUserData from "../../Hooks/UseUserData/UseUserData";

const Dashboard = () => {
  const [userInfo] = useUserData();
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile relative">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col py-4 px-10">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
          <label
            htmlFor="dashboardDrawer"
            className="btn btn-primary btn-xm  top-2 w-2 text-center absolute left-0  drawer-button lg:hidden"
          >
            ❯
          </label>
        </div>
        <div className="drawer-side w-72">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-full  text-base-content ">
            <div className="collapse">
              <input type="checkbox" />
              <>
                <li className="collapse-title p-0 text-sm  font-medium">
                  <h3 className="text-sm  font-bold">
                    Order Management
                    <span>
                      <FaAngleDown />
                    </span>
                  </h3>
                </li>
              </>
              <div className="collapse-content">
                <ul className="menu bg-base-100 text-base-content ">
                  {/* <li className=" text-sm  font-medium rounded-md">
                    <Link to="/dashboard/addProduct">My Orders</Link>
                  </li> */}
                  {userInfo?.role === "restaurantOwner" && (
                    <>
                      <li className=" text-sm  font-medium">
                        <Link to="/dashboard/allOrders">All Orders</Link>
                      </li>
                      <li className="text-sm  font-medium">
                        <Link to="/dashboard/addProduct">Cooking</Link>
                      </li>
                      <li className=" text-sm  font-medium">
                        <Link to="/dashboard/addProduct">
                          Ready For delivery
                        </Link>
                      </li>
                      <li className=" text-sm  font-medium">
                        <Link to="/dashboard/addProduct">Delivered</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <div className="collapse">
              <input type="checkbox" />
              <>
                <li className="collapse-title p-0 text-sm  font-medium">
                  <h3 className="text-sm  font-bold">
                    Food Management
                    <span>
                      <FaAngleDown />
                    </span>
                  </h3>
                </li>
              </>
              <div className="collapse-content">
                <ul className="menu bg-base-100 text-base-content ">
                  <li className=" text-sm  font-medium">
                    <Link to="/dashboard/allProduct">All Products</Link>
                  </li>
                  <li className=" text-sm  font-medium">
                    <Link to="/dashboard/addProduct">Add Product</Link>
                  </li>
                  {/* <li className="text-sm  font-medium">
                    <Link to="/dashboard/addProduct">Add Category</Link>
                  </li>
                  <li className=" text-sm  font-medium">
                    <Link to="/dashboard/addProduct">Addons</Link>
                  </li> */}
                </ul>
              </div>
            </div>
            {userInfo?.role === "admin" && (
              <div className="collapse">
                <input type="checkbox" />
                <>
                  <li className="collapse-title p-0 text-sm  font-medium">
                    <h3 className="text-sm font-bold">
                      Delivery Man Management
                      <span>
                        <FaAngleDown />
                      </span>
                    </h3>
                  </li>
                </>
                <div className="collapse-content">
                  <ul className="menu bg-base-100 text-base-content ">
                    <li className=" text-sm  font-medium">
                      {userInfo.role === "admin" && (
                        <Link to="/dashboard/allDeliveryMan">
                          All Delivery Man
                        </Link>
                      )}
                    </li>
                    <li className="text-sm  font-medium">
                      <Link to="/dashboard/addDeliveryMan">
                        Add Delivery Man
                      </Link>
                    </li>
                    <li className=" text-sm  font-medium">
                      <Link to="/dashboard/addProduct">Reviews</Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <div className="collapse">
              <input type="checkbox" />
              <>
                {userInfo?.role === "admin" ||
                  (userInfo?.role === "restaurantOwner" && (
                    <li className="collapse-title p-0 text-sm  font-medium">
                      <h3 className="text-sm  font-bold">
                        Business Management
                        <span>
                          <FaAngleDown />
                        </span>
                      </h3>
                    </li>
                  ))}
              </>
              <div className="collapse-content">
                <ul className="menu bg-base-100 text-base-content ">
                  {userInfo?.role === "admin" && (
                    <>
                      <li className=" text-sm  font-medium">
                        <Link to="/dashboard/addRestaurant">
                          Add Restaurant
                        </Link>
                      </li>
                      <li className="text-sm  font-medium">
                        <Link to="/dashboard/allRestaurant">
                          All Restaurant
                        </Link>
                      </li>
                    </>
                  )}
                  {userInfo?.role === "restaurantOwner" && (
                    <li className=" text-sm  font-medium">
                      <Link to="/dashboard/addProduct">My Restaurant</Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
