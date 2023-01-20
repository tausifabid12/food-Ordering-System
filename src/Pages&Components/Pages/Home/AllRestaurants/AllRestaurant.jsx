import React from 'react';
import { useQuery } from '@tanstack/react-query';
import AllRestaurantCard from './AllRestaurantCard/AllRestaurantCard';

const AllRestaurant = () => {
  const { data: restaurants = [] } = useQuery({
    queryKey: ['restaurants'],
    queryFn: () =>
      fetch(`https://express-food-server.vercel.app/allRestaurants`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      }).then((res) => res.json()),
  });

  return (
    <div data-aos="zoom-in" className="p-2 lg:p-5 md:pt-8  max-w-full">
      <div className="flex justify-between items-center px-0 ">
        <h2 className="text-2xl md:text-5xl  font-bold pl-3">
          All Restaurants
        </h2>
      </div>
      <div className="w-full py-6 lg:py-12 gap-y-3 grid grid-cols-1 lg:grid-cols-2 md:gap-7">
        {restaurants.data &&
          restaurants?.data.map((restaurant) => (
            <AllRestaurantCard key={restaurant?._id} info={restaurant} />
          ))}
      </div>
    </div>
  );
};

export default AllRestaurant;
