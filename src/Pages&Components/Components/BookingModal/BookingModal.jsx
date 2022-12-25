import React from "react";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const BookingModal = ({ info }) => {
  const { productName, price, _id } = info;
  const { register, handleSubmit } = useForm();
  console.log(info, "this is info");

  const handleProductInfo = (data, e) => {
    const { productName, ProductPrice } = data;
    console.log(data);
    // fetch("http://localhost:5000/cart", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //     authorization: `bearer ${localStorage.getItem("accessToken")}`,
    //   },
    //   body: JSON.stringify({ productId: _id }),
    // });
  };

  return (
    <div>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative bg-white">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
            onSubmit={handleSubmit(handleProductInfo)}
            className="py-10  space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="flex space-x-4">
              <div className="space-y-1 text-sm w-1/2">
                <label
                  htmlFor="userName"
                  className="block dark:dark:text-gray-400 font-bold"
                >
                  Product Name
                </label>
                <input
                  type="userName"
                  {...register("userName")}
                  name="userName"
                  defaultValue={productName}
                  readOnly
                  id="userName"
                  placeholder="userName"
                  className="w-full px-4 py-3 font-bold rounded-md bg-accent dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 "
                />
              </div>
              <div className="space-y-1 text-sm w-1/2">
                <label
                  htmlFor="userName"
                  className="block dark:dark:text-gray-400 font-bold"
                >
                  Product Price
                </label>
                <input
                  type="ProductPrice"
                  {...register("ProductPrice")}
                  name="ProductPrice"
                  defaultValue={price}
                  // readOnly
                  id="ProductPrice"
                  className="w-full px-4 py-3 font-bold rounded-md bg-base-100 text-gray-900"
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full  p-3 text-center rounded-md bg-gray-900  text-white"
            >
              <label htmlFor="bookingModal">Submit now</label>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
