import React from "react";
import campain1 from "../../../../Assets/campain1.webp";
import campain2 from "../../../../Assets/campain2.webp";
import campain3 from "../../../../Assets/campain3.webp";

const Campaigns = () => {
  return (
    <div className="md:pl-12 md:pt-3 p-2  max-w-full">
      <div className="flex justify-between items-center px-0 ">
        <h2 className="text-2xl md:text-3xl font-bold">Campaigns</h2>
      </div>
      <div className="flex overflow-x-auto py-10 gap-2 md:grid  md:grid-cols-2 lg:grid-cols-3 md:gap-7">
        <div className="card min-w-[200px] md:w-full card-compact bg-base-100 rounded-md shadow-md">
          <figure>
            <img src={campain1} alt="Shoes" />
          </figure>
        </div>{" "}
        <div className="card min-w-[200px] md:w-full card-compact bg-base-100 rounded-md shadow-md">
          <figure>
            <img src={campain2} alt="Shoes" />
          </figure>
        </div>{" "}
        <div className="card min-w-[200px] md:w-full card-compact bg-base-100 rounded-md shadow-md">
          <figure>
            <img src={campain3} alt="Shoes" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
