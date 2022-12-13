import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({ info }) => {
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
      <div className="card min-w-[200px] md:w-full max-h-60 card-compact bg-base-100 rounded-md shadow-md">
        <figure>
          <img src={coverImg} alt="Restaurant" />
        </figure>
        <div className="card-body">
          <h2 className="text-md font-bold">{restaurantName}</h2>
          <p className="text-sm text-gray-600">{location}</p>
          <p className="text-sm text-gray-800">Rating {4.5}</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
