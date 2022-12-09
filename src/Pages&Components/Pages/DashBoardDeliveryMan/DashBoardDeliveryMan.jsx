import { useQuery } from "@tanstack/react-query";
import React from "react";
import DeliveryManTable from "./DeliveryManTable/DeliveryManTable";

const DashBoardDeliveryMan = () => {
  const { data: deliveryMan = [] } = useQuery({
    queryKey: ["deliveryMan"],
    queryFn: () =>
      fetch(`http://localhost:5000/allDeliveryMan`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  console.log(deliveryMan.data);
  const header = ["Name", "Contact", "Type", "Action"];
  return (
    <div>
      <DeliveryManTable header={header} body={deliveryMan?.data} />
    </div>
  );
};

export default DashBoardDeliveryMan;
