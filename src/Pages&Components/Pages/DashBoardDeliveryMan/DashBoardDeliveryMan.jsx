import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";
import DeliveryManTable from "./DeliveryManTable/DeliveryManTable";

const DashBoardDeliveryMan = () => {
  const [loading, setLoading] = useState(false);
  const { data: deliveryMan = [], refetch } = useQuery({
    queryKey: ["deliveryMan"],
    queryFn: () =>
      fetch(`https://express-food-server.vercel.app/allDeliveryMan`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  const handleDeliverymanApprove = (id) => {
    setLoading(true);
    fetch(`https://express-food-server.vercel.app/allDeliveryMan/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ approved: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status) {
          setLoading(false);
          refetch();
          toast.success("deliveryman approved", {
            position: "top-center",
          });
        } else {
          setLoading(false);
        }
      });
  };

  const handleDelete = (id) => {
    fetch(`https://express-food-server.vercel.app/allDeliveryMan/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status) {
          setLoading(false);
          refetch();
          toast.error("deliveryman Removed", {
            position: "top-center",
          });
        } else {
          setLoading(false);
        }
      });
  };

  console.log(deliveryMan.data);
  const header = ["Name", "Contact", "Status", "Action"];
  return (
    <div>
      <DeliveryManTable
        header={header}
        body={deliveryMan?.data}
        handleAction={handleDeliverymanApprove}
        handleDelete={handleDelete}
        loading={loading}
      />
    </div>
  );
};

export default DashBoardDeliveryMan;
