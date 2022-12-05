import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({ info: { rating, location, name, _id } }) => {
  return (
    <Link to={`/restaurant/${_id}`}>
      <div className="card min-w-[200px] md:w-full card-compact bg-base-100 rounded-md shadow-md">
        <figure>
          <img src="https://placeimg.com/400/200/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-md font-bold">{name}</h2>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
