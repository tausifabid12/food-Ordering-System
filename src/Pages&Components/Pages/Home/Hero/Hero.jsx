import React from 'react';
import { Link } from 'react-router-dom';
import hero1 from '../../../../Assets/HeroImg/hero0.1.jpg';
// import heroImg1 from "../../../../Assets/HeroImg/hero2.jpg";

const Hero = () => {
  return (
    <div className="" data-aos="fade-down">
      <div className="hidden lg:block  ">
        <div
          className="hero min-h-screen "
          style={{
            backgroundImage: ` url(${hero1})`,
          }}
        >
          <div className=" absolute left-0 text-gray-900">
            <div className="max-w-lg pl-10 space-y-10">
              <h1 className="mb-5 text-7xl font-bold">Express Food</h1>
              <p className="mb-5">
                We made it easily to place an order when you are stuck in
                traffic or on the way to pick up the kids. We provide the
                freedom to order from any place at any time without pausing
                everything and making a call to the restaurant.
              </p>
              <Link
                to="/signUp"
                className="btn btn-primary text-gray-900 font-bold transition duration-250 ease-in hover:bg-transparent  hover:border-2"
              >
                Join Us Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="block w-full lg:hidden py-9 ">
        <div className="mx-auto max-w-full  px-4 md:w-1/2">
          <h2 className="text-[40px] font-bold ">
            <span>Find Your Favorite</span> <br />
            <span className="text-primary mt-3">Food</span>
          </h2>
          <input
            type="text"
            placeholder="Search here"
            className="input  rounded-lg text-primary bg-base-100 border border-gray-300 w-full  mt-5 max-w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
