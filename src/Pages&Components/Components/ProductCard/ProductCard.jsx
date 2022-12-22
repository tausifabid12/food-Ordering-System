import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const ProductCard = ({ info }) => {
  const { imgUrl, productName, price, category } = info;
  return (
    <>
      <label
        htmlFor="bookingModal"
        className="card card-side w-full min-w-[200px] p-2 bg-base-100 rounded-md shadow-md mx-auto"
      >
        <div className=" w-5/12 rounded-md">
          <img
            src={imgUrl}
            className="w-full h-full rounded-md"
            alt={productName}
          />
        </div>
        <div className="card-body py-1 space-y-0">
          <h2 className="text-md font-semibold">{productName}</h2>
          <p className="text-sm text-gray-600">{category}</p>
          <p className="text-sm font-bold">${price}</p>
        </div>

        {/* <label htmlFor="bookingModal" className="btn">
        open modal
      </label> */}
        <BookingModal />
      </label>
    </>
  );
};

export default ProductCard;
