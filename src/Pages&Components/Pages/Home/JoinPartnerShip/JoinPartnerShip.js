import React from 'react';
import { Link } from 'react-router-dom';
import deliveryMan from '../../../../Assets/deliveryMan.jpg';
import restaurantO from '../../../../Assets/restaurantO.jpg';

const JoinPartnerShip = () => {
  return (
    <section className="w-full h-[90vh]  relative z-10 ">
      <h2 className="text-5xl font-bold text-center text-gray-900 py-16">
        Want to Join Partnership?
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 px-24 h-80 "
        data-aos="flip-down"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="relative mx-6">
          <div className="border-4 border-primary  w-full h-full absolute z-30 rounded-3xl"></div>
          <div className="relative -z-10 top-5 -left-5">
            <img
              className="brightness-50 h-3/4 w-full rounded-3xl  "
              src={deliveryMan}
              alt="deliveryMan"
            />
          </div>
          <div className="absolute bottom-8 left-7 z-30">
            <h4 className="text-3xl font-bold text-white pb-7">
              Join Our Delivery System
            </h4>
            <Link
              to="/deliveryManReg"
              className="btn  btn-outline btn-sm border-2 border-primary text-white"
            >
              Join Now!
            </Link>
          </div>
        </div>
        <div
          className="relative mx-6"
          data-aos="flip-down"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="border-4 border-primary  w-full h-full absolute z-30 rounded-3xl"></div>
          <div className="relative -z-10 top-5 -left-5">
            <img
              className="brightness-50 h-3/4 w-full rounded-3xl  "
              src={restaurantO}
              alt="restaurantO"
            />
          </div>
          <div className="absolute bottom-8 left-7 z-30">
            <h4 className="text-3xl font-bold text-white pb-7">
              Resigner Your Restaurant
            </h4>
            <Link
              to="/restaurantReg"
              className="btn  btn-outline btn-sm border-2 border-primary text-white"
            >
              Join Now!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinPartnerShip;
