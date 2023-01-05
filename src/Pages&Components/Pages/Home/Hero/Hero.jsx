import React from 'react';
import hero1 from '../../../../Assets/HeroImg/hero0.1.jpg';
// import heroImg1 from "../../../../Assets/HeroImg/hero2.jpg";

const Hero = () => {
  return (
    <div className="">
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
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary text-gray-900 font-bold transition duration-250 ease-in hover:bg-transparent  hover:border-2">
                Get Started
              </button>
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
