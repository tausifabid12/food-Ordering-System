import React from "react";
import AllRestaurant from "../AllRestaurants/AllRestaurant";
import Campaigns from "../Campaigns/Campaigns";
import Categories from "../Categories/Categories";
import Hero from "../Hero/Hero";
import PopularRestaurants from "../PopularRestaurants/PopularRestaurants";
import TopRatedProducts from "../TopRatedProducts/TopRatedProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="lg:flex block  ">
        <div className="w-full  lg:w-80">
          <Categories />
        </div>
        <div className="w-full">
          <PopularRestaurants />
          <Campaigns />
          <TopRatedProducts />
          <PopularRestaurants />
          <TopRatedProducts />
          <AllRestaurant />
        </div>
      </div>
    </div>
  );
};

export default Home;
