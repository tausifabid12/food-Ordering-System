import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ info }) => {
  const { _id, restaurantName, location, coverImg } = info;
  return (
    <Link to={`/restaurant/${_id}`} className="px-1">
      <div className="card min-w-[230px] md:w-full h-60 card-compact bg-base-100 rounded-md shadow-md">
        <figure>
          <img
            src={coverImg}
            className="rounded-t-md transition duration-200 ease-linear lg:hover:scale-125"
            alt="RestaurantImg"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-md font-bold uppercase text-gray-900">
            {restaurantName}
          </h2>
          <p className="text-sm text-gray-600">{location}</p>
          {/* <p className="text-sm text-gray-800">Rating {4.5}</p> */}
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
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-primary"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
