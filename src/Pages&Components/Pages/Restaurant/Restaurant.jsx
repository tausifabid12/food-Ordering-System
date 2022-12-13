import React from "react";
import { useLoaderData } from "react-router-dom";

const Restaurant = () => {
  const info = useLoaderData();
  console.log("thsi si info", info);
  const {
    approved,
    userName,
    restaurantName,
    minOrder,
    location,
    email,
    deliveryTime,
    coverImg,
  } = info?.data;
  return (
    <div className="grid grid-cols-1 gap-y-2 lg:px-6 lg:grid-cols-2 h-[300px] rounded-md place-content-center text-white bg-primary  ">
      <div className="w-full max-h-full">
        <img
          className="w-full max-h-[250px] rounded-md"
          src={coverImg}
          alt="Movie"
        />
      </div>
      <div className="grid items-center  lg:px-8">
        <div className="flex justify-between items-center ">
          <div className="card card-side rounded-sm  bg-transparent p-2 bg-base-100 ">
            <figure>
              <img src="https://placeimg.com/100/100/arch" alt="Movie" />
            </figure>
            <div className="card-body p-1 space-y-0">
              <h2 className="text-md font-semibold">{restaurantName}</h2>
              <p className="text-sm text-gray-600">{location}</p>
              <p className="text-sm font-bold">
                Minimum Order:{" "}
                <span className="text-primary">{minOrder}tk</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-8 px-16">
          <p>Rating 4.5</p>
          {/* <p>Location</p> */}
          <p>Delivery Time {deliveryTime}min</p>
          <div>Add to favarite</div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
