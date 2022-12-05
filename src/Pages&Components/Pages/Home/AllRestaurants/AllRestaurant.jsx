import React from "react";
import { useQuery } from "@tanstack/react-query";
import AllRestaurantCard from "./AllRestaurantCard/AllRestaurantCard";
const AllRestaurant = () => {
  const { data: restaurants = [] } = useQuery({
    queryKey: ["restaurants"],
    queryFn: () =>
      fetch(`http://localhost:5000/allRestaurants`, {
        // headers: {
        //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
        // },
      }).then((res) => res.json()),
  });
  return (
    <div className="md:pl-12 md:pt-8 p-2 max-w-full">
      <div className="flex justify-between items-center px-0 ">
        <h2 className="text-2xl md:text-3xl font-bold">All Restaurants</h2>
      </div>
      <div className="w-full py-12 gap-2 md:grid  md:grid-cols-1 lg:grid-cols-2 md:gap-7">
        {restaurants.data &&
          restaurants?.data.map((restaurant) => (
            <AllRestaurantCard key={restaurant?._id} info={restaurant} />
          ))}
      </div>
    </div>
  );
};

export default AllRestaurant;
