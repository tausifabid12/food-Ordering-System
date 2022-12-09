import React from "react";

const Restaurant = () => {
  return (
    <div className="grid grid-cols-1 gap-y-2 lg:px-6 lg:grid-cols-2 h-[300px] rounded-md place-content-center text-white bg-[#171a29] ">
      <div className="w-full max-h-full">
        <img
          className="w-full max-h-[250px] rounded-md"
          src="https://placeimg.com/400/550/arch"
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
              <h2 className="text-md font-semibold">Le Haluya Restaurant</h2>
              <p className="text-sm text-gray-600">NoyaKhali location</p>
              <p className="text-sm font-bold">Minimum Order</p>
            </div>
          </div>
          <div>Add to favarite</div>
        </div>
        <div className="flex justify-between py-8 px-16">
          <p>Rating </p>
          <p>Location</p>
          <p>Delivery Time</p>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
