import { useQuery } from "@tanstack/react-query";
import React from "react";
import Table from "../../Components/Table/Table";

const DashBoardRestaurantInfo = () => {
  const { data: restaurants = [] } = useQuery({
    queryKey: ["restaurants"],
    queryFn: () =>
      fetch(`http://localhost:5000/allRestaurants`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  console.log(restaurants.data);
  // const { userName, coverImg, email, restaurantName, approved } =
  //   restaurants?.data;
  const tableHeader = ["Restaurant Info", "Owner", "Status", "Action"];
  const tableBody = restaurants.data;
  return (
    <div className="">
      <Table body={tableBody} header={tableHeader}></Table>
    </div>
  );
};

export default DashBoardRestaurantInfo;
