import { useState } from "react";
import { useEffect } from "react";

const useRestaurantInfo = (email) => {
  const [restaurantInfo, setRestaurantInfo] = useState("");
  useEffect(() => {
    fetch(
      `https://express-food-server.vercel.app/restaurantInfo?email=${email}`
    )
      .then((res) => res.json())
      .then((data) => setRestaurantInfo(data?.data));
  }, [email]);

  return [restaurantInfo];
};

export default useRestaurantInfo;
