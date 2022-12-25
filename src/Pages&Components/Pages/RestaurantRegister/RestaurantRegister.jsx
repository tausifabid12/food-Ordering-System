import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const RestaurantRegister = () => {
  const [isAdded, setIsAdded] = useState(true);
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  //handleRegister
  // *1st img hosting
  // *2nd posting restaurant info
  // *3rd  creating firebase user
  // *4th posting userInfo to DB

  const handleRegister = (data, e) => {
    setIsAdded(false);
    const {
      userName,
      email,
      restaurantName,
      location,
      deliveryTime,
      minOrder,
      coverImg,
      password,
    } = data;
    const image = coverImg[0];
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
        if (imgUrl) {
          const restaurantInfo = {
            userName,
            email,
            restaurantName: restaurantName.toLowerCase(),
            location,
            deliveryTime,
            minOrder,
            coverImg: imgUrl,
            approved: false,
          };
          fetch(`https://express-food-server.vercel.app/addRestaurant`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(restaurantInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status) {
                createUser(email, password).then((result) => {
                  if (result?.user?.uid) {
                    console.log(result.user, "from create user");
                    const userInfo = {
                      email,
                      password,
                      role: "restaurantOwner",
                    };
                    fetch("https://express-food-server.vercel.app/users", {
                      method: "POST",
                      headers: {
                        "content-type": "application/json",
                        authorization: `bearer ${localStorage.getItem(
                          "accessToken"
                        )}`,
                      },
                      body: JSON.stringify(userInfo),
                    })
                      .then((res) => res.json())
                      .then((result) => {
                        console.log("user saved ot db", result);
                        if (result.status) {
                          e.target.reset();
                          setIsAdded(true);
                          navigate("/");
                          toast.success(
                            "You have resisted successfully please wait for admin conformation",
                            {
                              position: "top-center",
                              autoClose: 10000,
                            }
                          );
                        }
                      });
                  } else {
                    setIsAdded(true);
                    e.target.reset();
                  }
                });
              } else {
                setIsAdded(true);
                e.target.reset();
              }
            });
        }
      });
  };
  return (
    <section className="bg-base-100 dark:bg-gray-900">
      <div className="flex justify-center min-h-screen">
        <div className="flex items-center w-full  p-8 mx-auto ">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Get your free account now.
            </h1>

            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            <form
              onSubmit={handleSubmit(handleRegister)}
              className="grid  gap-6 mt-8 grid-cols-2"
            >
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  User Name
                </label>
                <input
                  type="text"
                  name="userName"
                  {...register("userName", { required: true })}
                  placeholder="John"
                  className="block w-full px-5 py-3 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:primary dark:focus:primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              {errors.userName && (
                <span className="text-red-500 pt-2">This is required</span>
              )}

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Email address
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="johnsnow@example.com"
                  className="block w-full px-5 py-3 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:primary dark:focus:primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.email && (
                  <span className="text-red-500 pt-2">This is required</span>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  name="restaurantName"
                  {...register("restaurantName", { required: true })}
                  placeholder="my awesome restaurant"
                  className="block w-full px-5 py-3 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:primary dark:focus:primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.restaurantName && (
                  <span className="text-red-500 pt-2">This is required</span>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Location
                </label>
                <input
                  type="text"
                  {...register("location", { required: true })}
                  placeholder="Gaibandha Sadar,Gaibandha."
                  className="block w-full px-5 py-3 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:primary dark:focus:primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.location && (
                  <span className="text-red-500 pt-2">This is required</span>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Delivery Time (minute)
                </label>
                <input
                  type="number"
                  {...register("deliveryTime", { required: true })}
                  placeholder="30"
                  className="block w-full px-5 py-3 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:primary dark:focus:primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.deliveryTime && (
                  <span className="text-red-500 pt-2">This is required</span>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Minimum Order Price
                </label>
                <input
                  type="number"
                  {...register("minOrder", { required: true })}
                  placeholder="50"
                  className="block w-full px-5 py-3 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:primary dark:focus:primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.minOrder && (
                  <span className="text-red-500 pt-2">This is required</span>
                )}
              </div>

              {/* <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Profile Photo
                </label>
                <input
                  type="file"
                  {...register("profileImg", { required: true })}
                  placeholder="Snow"
                  className="block w-full px-5 py-3 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:primary dark:focus:primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.profileImg && (
                  <span className="text-red-500 pt-2">This is required</span>
                )}
              </div> */}
              <div className="col-span-2 lg:col-span-1">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Cover Photo
                </label>
                <input
                  type="file"
                  {...register("coverImg", { required: true })}
                  placeholder="cover photo"
                  className="block w-full px-5 py-3 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:primary dark:focus:primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.coverImg && (
                  <span className="text-red-500 pt-2">This is required</span>
                )}
              </div>

              <div className="col-span-2 lg:col-span-1">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                  placeholder="Enter your password"
                  className="block w-full px-5 py-3 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:primary dark:focus:primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.password && errors.password.type === "required" && (
                  <span className="text-red-500 pt-2">This is required</span>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <span className="text-red-500 pt-2">
                    Password must have 6 character
                  </span>
                )}
              </div>
              <div className="w-full col-span-2">
                {isAdded ? (
                  <input
                    type="submit"
                    defaultValue="Add Product For Sale"
                    className="btn btn-primary w-full ring-0  rounded-md   text-white"
                  />
                ) : (
                  <button className="btn loading w-full">loading</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantRegister;
