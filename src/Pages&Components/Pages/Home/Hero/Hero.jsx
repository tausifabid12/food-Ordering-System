import React from "react";
import hero1 from "../../../../Assets/HeroImg/hero0.1.jpg";
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
      <div className="block lg:hidden py-9 px-4">
        <h2 className="text-3xl font-bold px-4">Find Your Favorite Food</h2>
        <input
          type="text"
          placeholder="Type here"
          className="input  rounded-lg text-primary bg-accent  mt-5 mx-4 w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default Hero;
