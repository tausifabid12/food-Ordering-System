import React from "react";
import { Link } from "react-router-dom";

const AllRestaurantCard = ({ info }) => {
  const {
    _id,
    approved,
    userName,
    restaurantName,
    minOrder,
    location,
    email,
    deliveryTime,
    coverImg,
  } = info;
  return (
    <Link to={`/restaurant/${_id}`}>
      <div className="card card-side w-full h-40  lg:h-48  p-2 bg-base-100 rounded-md shadow-md">
        <div className=" w-5/12 rounded-md">
          <img
            src={coverImg}
            className="w-full h-full rounded-md"
            alt="Movie"
          />
        </div>
        <div className="card-body p-6 space-y-0">
          <h2 className="text-md font-semibold">{restaurantName}</h2>
          <p className="text-sm text-gray-600">{location}</p>
          <p className="text-sm font-bold">
            Average Delivery Time: {deliveryTime}min
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AllRestaurantCard;
