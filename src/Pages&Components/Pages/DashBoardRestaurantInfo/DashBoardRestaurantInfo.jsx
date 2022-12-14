import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import useUserData from "../../../Hooks/UseUserData/UseUserData";
import Table from "../../Components/Table/Table";

const DashBoardRestaurantInfo = () => {
  const [loading, setLoading] = useState(false);
  const [currentUserInfo] = useUserData();
  console.log(currentUserInfo, "this is user info");
  const { data: restaurants = [], refetch } = useQuery({
    queryKey: ["restaurants"],
    queryFn: () =>
      fetch(`https://express-food-server.vercel.app/allRestaurants`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  const handleRestaurantApprove = (id) => {
    setLoading(true);
    fetch(`https://express-food-server.vercel.app/allRestaurants/${id}`, {
      method: "PATCH",
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
          toast.success("restaurant approved", {
            position: "top-center",
          });
        } else {
          setLoading(false);
        }
      });
  };

  const handleDelete = (id) => {
    fetch(`https://express-food-server.vercel.app/allRestaurants/${id}`, {
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
          toast.error("restaurant Removed", {
            position: "top-center",
          });
        } else {
          setLoading(false);
        }
      });
  };

  const tableHeader = ["Restaurant Info", "Owner", "Status", "Action"];
  const tableBody = restaurants.data;
  console.log(tableBody);
  return (
    <div className="">
      <Table
        body={tableBody}
        header={tableHeader}
        handleAction={handleRestaurantApprove}
        handleDelete={handleDelete}
        loading={loading}
      ></Table>
    </div>
  );
};

export default DashBoardRestaurantInfo;
