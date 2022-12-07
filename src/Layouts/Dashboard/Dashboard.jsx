import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Pages&Components/Components/Navbar/Navbar";
import { FaAngleDown } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile relative">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
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
          <ul className="menu p-4 w-full bg-base-100 text-base-content ">
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
                  <li className=" text-sm  font-medium">
                    <Link to="/dashboard/addProduct">All Orders</Link>
                  </li>
                  <li className="text-sm  font-medium">
                    <Link to="/dashboard/addProduct">Accepted</Link>
                  </li>
                  <li className=" text-sm  font-medium">
                    <Link to="/dashboard/addProduct">Ready For delivery</Link>
                  </li>
                  <li className=" text-sm  font-medium">
                    <Link to="/dashboard/addProduct">Delivered</Link>
                  </li>
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
                    <Link to="/dashboard/addProduct">Add Product</Link>
                  </li>
                  <li className="text-sm  font-medium">
                    <Link to="/dashboard/addProduct">Add Category</Link>
                  </li>
                  <li className=" text-sm  font-medium">
                    <Link to="/dashboard/addProduct">Addons</Link>
                  </li>
                </ul>
              </div>
            </div>
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
                    <Link to="/dashboard/addProduct">All Delivery Man</Link>
                  </li>
                  <li className="text-sm  font-medium">
                    <Link to="/dashboard/addProduct">Add Delivery Man</Link>
                  </li>
                  <li className=" text-sm  font-medium">
                    <Link to="/dashboard/addProduct">Reviews</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="collapse">
              <input type="checkbox" />
              <>
                <li className="collapse-title p-0 text-sm  font-medium">
                  <h3 className="text-sm  font-bold">
                    Business Management
                    <span>
                      <FaAngleDown />
                    </span>
                  </h3>
                </li>
              </>
              <div className="collapse-content">
                <ul className="menu bg-base-100 text-base-content ">
                  <li className=" text-sm  font-medium">
                    <Link to="/dashboard/addProduct">Add Restaurant</Link>
                  </li>
                  <li className="text-sm  font-medium">
                    <Link to="/dashboard/addProduct">All Restaurant</Link>
                  </li>
                  <li className=" text-sm  font-medium">
                    <Link to="/dashboard/addProduct">My Restaurant</Link>
                  </li>
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