import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlusCircle } from "react-icons/fa";

import { toast } from "react-toastify";

import useUserData from "../../../Hooks/UseUserData/UseUserData";

const AddProducts = () => {
  const [isAdded, setIsAdded] = useState(true);
  const { register, handleSubmit } = useForm();
  // const navigate = useNavigate();
  const [userInfo] = useUserData();
  // const [restaurantInfo] = useRestaurantInfo(userInfo?.email);

  //loading category
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch(`https://express-food-server.vercel.app/allCategory`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  // if (userInfo?.role !== "restaurantOwner") {
  //   navigate("/error");
  //   return;
  // }
  const handleAddProduct = (data, e) => {
    setIsAdded(false);
    const { productName, price, category, itemType, discount, description } =
      data;

    const image = data.image[0];
    // console.log(productInfo);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGEBB_API_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const imgUrl = imgData?.data?.url;
        const productInfo = {
          productName,
          price,
          category,
          itemType,
          discount,
          description,
          imgUrl,
          email: userInfo?.email,
        };
        if (imgUrl) {
          fetch(`https://express-food-server.vercel.app/allProduct`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(productInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.status) {
                toast.success("product added successfully", {
                  position: "top-center",
                });
                setIsAdded(true);
              } else {
                setIsAdded(true);
              }
            });
        } else {
          setIsAdded(true);
        }
      });
  };

  return (
    <div className="px-24 w-full">
      <h3 className="text-gray-900 font-bold text-3xl flex items-center">
        <span className="text-primary pr-3">
          <FaPlusCircle />
        </span>
        Add Product
      </h3>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="py-10  space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="flex space-x-4">
          <div className="space-y-1 text-sm w-1/2">
            <label htmlFor="Product Name" className="block ">
              Product Name
            </label>
            <input
              type="Product Name"
              {...register("productName", {
                required: true,
              })}
              name="productName"
              id="productName"
              placeholder="Product Name"
              className="w-full px-4 py-3 rounded-md bg-[#f1f1f1]  "
            />
          </div>
          <div className="space-y-1 text-sm w-1/2">
            <label htmlFor="price" className="block ">
              price
            </label>
            <input
              type="price"
              {...register("price", {
                required: true,
              })}
              name="price"
              id="price"
              placeholder="price"
              className="w-full px-4 py-3 rounded-md bg-[#f1f1f1]  "
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="space-y-1 text-sm w-1/2">
            <label htmlFor="discount" className="block ">
              Discount
            </label>
            <input
              type="discount"
              {...register("discount", {
                required: true,
              })}
              name="discount"
              id="discount"
              placeholder="discount"
              className="w-full px-4 py-3 rounded-md bg-[#f1f1f1]  "
            />
          </div>
          <div className="space-y-1 text-sm w-1/2">
            <label htmlFor="itemType" className="block ">
              ItemType
            </label>
            <select
              {...register("itemType", {
                required: true,
              })}
              name="itemType"
              id="itemType"
              className="w-full  p-3  rounded-md bg-[#f1f1f1]  "
            >
              <option defaultValue>Select Your Option</option>
              <option>Veg</option>
              <option>Non Veg</option>
            </select>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="space-y-1  text-sm w-1/2">
            <label htmlFor="location" className="block ">
              Image
            </label>
            <input
              type="file"
              {...register("image", {
                required: true,
              })}
              name="image"
              id="image"
              className="w-full px-4 py-3 rounded-md bg-[#f1f1f1]  "
            />
          </div>
          <div className="space-y-1 w-1/2 text-sm">
            <label htmlFor="category" className="block ">
              Select category
            </label>
            <select
              {...register("category", {
                required: true,
              })}
              name="category"
              id="category"
              className="w-full  p-3  rounded-md bg-[#f1f1f1]  "
            >
              <option defaultValue>Select Your Option</option>
              {categories?.status &&
                categories?.data.map((cat) => (
                  <option key={cat?._id}>{cat?.strCategory}</option>
                ))}
            </select>
          </div>
        </div>
        <div className="col-span-full">
          <label htmlFor="bio" className="text-sm">
            Description
          </label>
          <textarea
            id="bio"
            placeholder=""
            name="description"
            className="w-full h-24 bg-[#f1f1f1] rounded-md focus:ring focus:ring-opacity-75  dark:border-gray-700 dark:text-gray-900"
          ></textarea>
        </div>
        <div className="w-full">
          {isAdded ? (
            <input
              type="submit"
              value="Add Product For Sale"
              className="btn btn-primary w-full   text-gray-900 font-bold"
            />
          ) : (
            <button className="btn loading w-full">loading</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
