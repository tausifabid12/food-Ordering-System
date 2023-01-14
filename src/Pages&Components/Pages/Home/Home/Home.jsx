import React from 'react';
import AllRestaurant from '../AllRestaurants/AllRestaurant';
import Campaigns from '../Campaigns/Campaigns';
import Categories from '../Categories/Categories';
import Hero from '../Hero/Hero';
import PopularRestaurants from '../PopularRestaurants/PopularRestaurants';
import TopRatedProducts from '../TopRatedProducts/TopRatedProducts';

const Home = () => {
  return (
    <div className="">
      <Hero />
      <div className="grid grid-cols-1 lg:grid-cols-5 mx-1 lg:mx-5">
        <div className="w-full">
          <Categories />
        </div>
        <div className="w-full lg:overflow-hidden  col-span-4">
          <PopularRestaurants />
          <div className="lg:overflow-hidden" data-aos="zoom-in">
            <Campaigns />
          </div>
        </div>
      </div>
      <div>
        <TopRatedProducts />
      </div>
      <AllRestaurant />
    </div>
  );
};

export default Home;
