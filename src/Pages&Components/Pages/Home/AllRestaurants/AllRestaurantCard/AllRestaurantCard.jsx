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
      <div className="card card-side w-full h-40  lg:h-44  p-2 bg-base-100 rounded-md shadow-md ">
        <div className=" w-5/12 rounded-md">
          <img
            src={coverImg}
            className="w-full h-full rounded-md "
            alt="Movie"
          />
        </div>
        <div className="card-body p-6 space-y-0">
          <h2 className="text-md font-bold text-gray-900 uppercase">
            {restaurantName}
          </h2>
          <p className="text-sm text-gray-800">{location}</p>
          <div className="rating rating-sm">
            {/* <p>Rating:</p> */}
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-primary"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-primary"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-primary"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-primary"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-primary"
            />
          </div>
          <p className="text-sm text-gray-700 font-semibold">
            Average Delivery Time: {deliveryTime}min
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AllRestaurantCard;
