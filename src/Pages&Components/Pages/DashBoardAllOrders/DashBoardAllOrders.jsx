import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import OrdersTable from "./OrdersTable/OrdersTable";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const DashBoardAllOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: allOrders = [] } = useQuery({
    queryKey: ["allOrders", user?.email],
    queryFn: () =>
      fetch(
        `https://express-food-server.vercel.app/allOrders?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      ).then((res) => res.json()),
  });

  console.log(allOrders, "this is all ");

  const header = ["Product", "Price", "User Email", "Actions"];
  return (
    <div className="lg:p-4 space-y-4">
      <h1 className="text-4xl font-bold text-gray-900"> All Orders</h1>
      <OrdersTable header={header} body={allOrders?.data} />
    </div>
  );
};

export default DashBoardAllOrders;
