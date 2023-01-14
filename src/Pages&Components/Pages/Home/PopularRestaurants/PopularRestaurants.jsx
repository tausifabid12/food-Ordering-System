import React from 'react';
import { useQuery } from '@tanstack/react-query';
import RestaurantCard from '../../../Components/RestaurantCard/RestaurantCard';
import { Link } from 'react-router-dom';

const PopularRestaurants = () => {
  const { data: restaurants = [] } = useQuery({
    queryKey: ['restaurants'],
    queryFn: () =>
      fetch(`https://express-food-server.vercel.app/allRestaurants`, {
        // headers: {
        //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
        // },
      }).then((res) => res.json()),
  });

  console.log(restaurants);

  return (
    <div className="pl-2 lg:pl-12 md:pt-8 p-2 max-w-full" data-aos="fade-left">
      <div className="flex justify-between items-center  pl-3 ">
        <h2 className="text-xl md:text-3xl font-bold ">PopularRestaurants</h2>
        <Link to="restaurants">
          <button className="btn btn-primary btn-xs text-xs text-white font-bold">
            view all
          </button>
        </Link>
      </div>
      <div className="flex overflow-x-auto py-6 lg:py-8 gap-2 md:grid  md:grid-cols-2 lg:grid-cols-3 md:gap-x-3  md:gap-y-5">
        {restaurants.data &&
          restaurants?.data.map((restaurant) => (
            <RestaurantCard key={restaurant?._id} info={restaurant} />
          ))}
      </div>
    </div>
  );
};

export default PopularRestaurants;
