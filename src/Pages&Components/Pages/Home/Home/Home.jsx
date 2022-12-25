import React from "react";
import AllRestaurant from "../AllRestaurants/AllRestaurant";
import Campaigns from "../Campaigns/Campaigns";
import Categories from "../Categories/Categories";
import Hero from "../Hero/Hero";
import PopularRestaurants from "../PopularRestaurants/PopularRestaurants";
import TopRatedProducts from "../TopRatedProducts/TopRatedProducts";

const Home = () => {
  return (
    <div className="-z-40">
      <Hero />
      <div className="lg:flex block  ">
        <div className="w-full  lg:w-80 lg:pl-7">
          <Categories />
        </div>
        <div className="w-full lg:pr-7">
          <PopularRestaurants />
          <Campaigns />
          <TopRatedProducts />
          {/* <PopularRestaurants />
          <TopRatedProducts /> */}
          <AllRestaurant />
        </div>
      </div>
    </div>
  );
};

export default Home;
