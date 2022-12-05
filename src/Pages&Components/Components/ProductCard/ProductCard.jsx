import React from "react";

const ProductCard = ({ info }) => {
  return (
    <div className="card card-side w-full min-w-[250px] p-2 bg-base-100 rounded-md shadow-md">
      <figure>
        <img src="https://placeimg.com/150/150/arch" alt="Movie" />
      </figure>
      <div className="card-body p-1 space-y-0">
        <h2 className="text-md font-semibold">New movie is released!</h2>
        <p className="text-sm text-gray-600">strCategory</p>
        <p className="text-sm font-bold">$700</p>
      </div>
    </div>
  );
};

export default ProductCard;
