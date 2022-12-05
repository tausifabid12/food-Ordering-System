import React from "react";
import heroImg2 from "../../../../Assets/HeroImg/hero1.jpg";
// import heroImg1 from "../../../../Assets/HeroImg/hero2.jpg";

const Hero = () => {
  return (
    <div>
      <div className="hidden lg:block carousel max-h-[550px] max-w-full ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={heroImg2} className="w-full max-h-full" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* <div id="slide2" className="carousel-item relative w-full">
          <img src={heroImg1} className="w-full" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
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
