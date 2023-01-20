import React from 'react';
import campain1 from '../../../../Assets/campain1.webp';
import campain2 from '../../../../Assets/campain2.webp';
import campain3 from '../../../../Assets/campain3.webp';
import './style.campaigns/style.campaigns.css';

const Campaigns = () => {
  // const cardFlip = {
  //   b
  // }
  return (
    <div
      data-aos="zoom-in"
      data-aos-anchor-placement="center-bottom"
      className="pl-2 lg:pl-12 md:pt-3 lg:pt-0 p-2  max-w-full "
    >
      <div className="flex justify-between items-center px-0 ">
        <h2 className="text-2xl md:text-3xl font-bold pl-2">Campaigns</h2>
      </div>
      <div className="flex overflow-x-auto space-x-2 lg:space-x-0 py-6 lg:py-7 gap-2 md:grid  md:grid-cols-2 lg:grid-cols-3 md:gap-x-3  md:gap-y-5">
        <div className="card min-w-[200px] md:w-full card-compact bg-base-100 rounded-md shadow-md  duration-1000 hover:rotate-x-180">
          <figure>
            <img
              src={campain1}
              alt="campainImage"
              className="rounded-md h-full w-full"
            />
          </figure>
        </div>
        <div className="card min-w-[200px] md:w-full card-compact bg-base-100 rounded-md shadow-md">
          <figure>
            <img src={campain2} alt="campainImage" className="rounded-md" />
          </figure>
        </div>
        <div className="card min-w-[200px] md:w-full card-compact bg-base-100 rounded-md shadow-md">
          <figure>
            <img src={campain3} alt="campainImage" className="rounded-md" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
