import React from "react";
import { useQuery } from "@tanstack/react-query";
import RestaurantCard from "../../../Components/RestaurantCard/RestaurantCard";
import { Link } from "react-router-dom";

const PopularRestaurants = () => {
  const { data: restaurants = [] } = useQuery({
    queryKey: ["restaurants"],
    queryFn: () =>
      fetch(`http://localhost:5000/allRestaurants`, {
        // headers: {
        //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
        // },
      }).then((res) => res.json()),
  });

  console.log(restaurants);

  return (
    <div className="md:pl-12 md:pt-8 p-2 max-w-full">
      <div className="flex justify-between items-center px-0 ">
        <h2 className="text-2xl md:text-3xl font-bold">PopularRestaurants</h2>
        <Link to="restaurants">
          <button>view all</button>
        </Link>
      </div>
      <div className="flex overflow-x-auto py-12 gap-2 md:grid  md:grid-cols-2 lg:grid-cols-3 md:gap-7">
        {restaurants.data &&
          restaurants?.data.map((restaurant) => (
            <RestaurantCard key={restaurant?._id} info={restaurant} />
          ))}
      </div>
    </div>
  );
};

export default PopularRestaurants;
