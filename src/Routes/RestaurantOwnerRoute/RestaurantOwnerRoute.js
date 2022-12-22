import React from "react";
import { Navigate } from "react-router-dom";
import useUserData from "../../Hooks/UseUserData/UseUserData";
import Loading from "../../Pages&Components/Pages/Loading/Loading";

const RestaurantOwnerRoute = ({ children }) => {
  const [userInfo, userLoading] = useUserData();

  if (userLoading) {
    return <Loading />;
  }
  console.log(userInfo, userLoading, "this is usr info");

  if (userInfo?.role === "restaurantOwner") {
    return children;
  }

  return <Navigate to="/not-found" />;
};

export default RestaurantOwnerRoute;
