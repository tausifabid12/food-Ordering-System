import React from "react";
import { Link } from "react-router-dom";

const AllRestaurantCard = ({ info: { _id } }) => {
  return (
    <Link to={`/restaurant/${_id}`}>
      <div className="card card-side w-full p-2 bg-base-100 rounded-md shadow-md">
        <figure>
          <img src="https://placeimg.com/150/150/arch" alt="Movie" />
        </figure>
        <div className="card-body p-6 space-y-0">
          <h2 className="text-md font-semibold">New movie is released!</h2>
          <p className="text-sm text-gray-600">strCategory</p>
          <p className="text-sm font-bold">$700</p>
        </div>
      </div>
    </Link>
  );
};

export default AllRestaurantCard;
