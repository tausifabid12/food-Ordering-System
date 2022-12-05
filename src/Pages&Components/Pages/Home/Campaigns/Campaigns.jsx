import React from "react";

const Campaigns = () => {
  return (
    <div className="md:pl-12 md:pt-3 p-2  max-w-full">
      <div className="flex justify-between items-center px-0 ">
        <h2 className="text-2xl md:text-3xl font-bold">Campaigns</h2>
        <button>view all</button>
      </div>
      <div className="flex overflow-x-auto py-10 gap-2 md:grid  md:grid-cols-2 lg:grid-cols-3 md:gap-7">
        <div className="card min-w-[200px] md:w-full card-compact bg-base-100 rounded-md shadow-md">
          <figure>
            <img src="https://placeimg.com/400/200/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-md font-bold">
              If a dog chews shoes whose shoes does he choose?
            </h2>
            {/* <p className="text-sm text-gray-600">{location}</p> */}
          </div>
        </div>{" "}
        <div className="card min-w-[200px] md:w-full card-compact bg-base-100 rounded-md shadow-md">
          <figure>
            <img src="https://placeimg.com/400/200/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-md font-bold">
              If a dog chews shoes whose shoes does he choose?
            </h2>
            {/* <p className="text-sm text-gray-600">{location}</p> */}
          </div>
        </div>{" "}
        <div className="card min-w-[200px] md:w-full card-compact bg-base-100 rounded-md shadow-md">
          <figure>
            <img src="https://placeimg.com/400/200/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-md font-bold">
              If a dog chews shoes whose shoes does he choose?
            </h2>
            {/* <p className="text-sm text-gray-600">{location}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
