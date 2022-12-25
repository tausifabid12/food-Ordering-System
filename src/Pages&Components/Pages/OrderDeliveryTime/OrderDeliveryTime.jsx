import React from "react";
import useRestaurantInfo from "../../../Hooks/UseRestaurantInfo/UseRestaurantInfo";
import Countdown from "react-countdown";
import CountDownTimer from "./CountDownTimer";

const OrderDeliveryTime = () => {
  const restaurantInfo = useRestaurantInfo();
  console.log(restaurantInfo);
  return (
    <div className="h-screen w-full bg-base-100 grid place-content-center space-y-8">
      <h2 className="text-center text-5xl font-bold text-primary">
        Your Order has been placed
      </h2>
      <h3 className="text-center text-4xl font-bold text-gray-900">
        Your Order will be available in {30} minutes
      </h3>
      {/* <Countdown
        date={Date.now() + 500000}
        renderer={<CountDownTimer />}
      ></Countdown> */}
    </div>
  );
};

export default OrderDeliveryTime;
