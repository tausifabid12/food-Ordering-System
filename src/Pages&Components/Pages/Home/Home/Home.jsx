import React from 'react';
import AllRestaurant from '../AllRestaurants/AllRestaurant';
import Blogs from '../Blogs/Blogs';
import Campaigns from '../Campaigns/Campaigns';
import Categories from '../Categories/Categories';
import Hero from '../Hero/Hero';
import JoinPartnerShip from '../JoinPartnerShip/JoinPartnerShip';
import PopularRestaurants from '../PopularRestaurants/PopularRestaurants';
import Status from '../Status/Status';
import Subscribe from '../Subscribe/Subscribe';
import TopRatedProducts from '../TopRatedProducts/TopRatedProducts';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className=" lg:mx-5">
        <div className="grid grid-cols-1 lg:grid-cols-5 mx-1 ">
          <Categories />
          <div className="w-full lg:overflow-hidden  col-span-4">
            <PopularRestaurants />
            <Campaigns />
          </div>
        </div>
        <TopRatedProducts />
        <Status />
        <JoinPartnerShip />
        <Blogs />
        <AllRestaurant />
        <Subscribe />
      </div>
    </div>
  );
};

export default Home;
