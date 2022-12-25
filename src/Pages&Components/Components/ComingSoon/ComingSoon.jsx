import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="w-full h-[500px] bg-base-100 grid place-content-center">
      <h2 className="text-5xl md:text-7xl text-gray-900 font-bold pb-10">
        Coming Soon
      </h2>
      <div className="mx-auto">
        <Link to="/" className="btn btn-primary  text-white">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
