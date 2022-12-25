import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const RegisterDeliveryMan = () => {
  const [isAdded, setIsAdded] = useState(true);
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data, e) => {
    const { userName, email, phoneNumber, password, nid, deliveryManType } =
      data;
    setIsAdded(false);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (result?.user?.uid) {
          const deliveryManInfo = {
            userName,
            email,
            phoneNumber,
            nid,
            deliveryManType,
            role: "deliveryMan",
          };
          fetch(`https://express-food-server.vercel.app/addDeliveryMan`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(deliveryManInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.status) {
                toast.success(
                  "You have resisted successfully please wait for admin's conformation",
                  {
                    position: "top-center",
                    autoClose: 5000,
                  }
                );
                setIsAdded(true);
                e.target.reset();
              } else {
                e.target.reset();
                setIsAdded(true);
              }
            });
        }
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="flex justify-center min-h-screen ">
        <div class="flex items-center w-full p-8 mx-auto lg:px-12 ">
          <div class="w-full">
            <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Get your free account now.
            </h1>

            <p class="mt-4 text-gray-500 dark:text-gray-400">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            {
              <span className="text-center my-5 text-red-500 font-bold">
                {error}
              </span>
            }
            <form
              onSubmit={handleSubmit(handleRegister)}
              class="grid grid-cols-2 gap-6 mt-8 "
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
                {errors.userName && (
                  <span className="text-red-500 pt-2">This is required</span>
                )}
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Phone number
                </label>
                <input
                  type="text"
                  {...register("phoneNumber", { required: true })}
                  placeholder="XXX-XX-XXXX-XXX"
                  className="block w-full px-5 py-3 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:primary dark:focus:primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.phoneNumber && (
                  <span className="text-red-500 pt-2">This is required</span>
                )}
              </div>
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
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  NID
                </label>
                <input
                  type="text"
                  {...register("nid", { required: true })}
                  placeholder="XXX-XX-XXXX"
                  className="block w-full px-5 py-3 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:primary dark:focus:primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.nid && (
                  <span className="text-red-500 pt-2">This is required</span>
                )}
              </div>

              <div>
                <label htmlFor="deliveryManType" className="block text-sm ">
                  Delivery Type
                </label>
                <select
                  // {...register("itemType", {
                  //   required: true,
                  // })}
                  name="deliveryManType"
                  {...register("deliveryManType", { required: true })}
                  id="deliveryManType"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40  "
                >
                  <option defaultValue>Freelancer</option>
                  <option>Salary Based</option>
                </select>
                {errors.deliveryManType && (
                  <span className="text-red-500 pt-2">This is required</span>
                )}
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  password
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

export default RegisterDeliveryMan;
