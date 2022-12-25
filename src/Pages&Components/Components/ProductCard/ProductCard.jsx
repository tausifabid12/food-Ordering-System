import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

import useCart from "../../../Hooks/useCart/useCart";

const ProductCard = ({ info }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { imgUrl, productName, price, category, _id } = info;
  const { user } = useContext(AuthContext);
  const [cartProducts, refetch] = useCart();
  const navigate = useNavigate();

  // if (cartProducts?.data) {
  //   const resultArray = cartProducts?.data.filter((p) => p?.productId === _id);
  //   console.log(resultArray.length, "this si");
  // }
  useEffect(() => {
    if (!cartProducts?.data) {
      return;
    }
    const resultArray = cartProducts?.data.filter((p) => p?.productId === _id);
    if (resultArray.length > 0) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [_id, cartProducts?.data, user?.email]);

  const handleAddToCart = () => {
    if (!user?.email) {
      navigate("/login");
      toast.error("please login to continue", {
        position: "top-center",
      });
      return;
    }
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ productId: _id, email: user?.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAdded(true);
        refetch();
      });
  };

  return (
    <>
      <label
        htmlFor="bookingModal"
        className="card card-side min-w-[350px] lg:min-w-[200px]  p-2 bg-base-100 rounded-md shadow-md mx-auto "
      >
        <div className=" w-5/12 rounded-md">
          <img
            src={imgUrl}
            className="w-full h-full rounded-md"
            alt={productName}
          />
        </div>
        <div className="card-body py-1">
          <h2 className="text-xl font-bold">{productName}</h2>
          <p className="text-sm text-gray-600">{category}</p>
          <div>
            <p className="text-sm font-bold p-0 m-0">${price}</p>
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
          </div>

          {/* <button
            onClick={handleAddToCart}
            className={`btn ${
              isAdded ? "btn-disabled" : "btn-primary"
            }  btn-xs `}
          >
            Add to cart
          </button> */}
          {isAdded ? (
            <label
              onClick={handleAddToCart}
              className="btn btn-disabled btn-xs text-gray-600"
            >
              Added to Cart
            </label>
          ) : (
            <>
              <label
                onClick={handleAddToCart}
                className="btn btn-primary btn-xs text-white"
              >
                Add to cart
              </label>
            </>
          )}
        </div>

        {/* <BookingModal info={info} /> */}
      </label>
    </>
  );
};

export default ProductCard;
