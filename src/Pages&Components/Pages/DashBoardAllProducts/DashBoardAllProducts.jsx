import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import useRestaurantInfo from "../../../Hooks/UseRestaurantInfo/UseRestaurantInfo";
import useUserData from "../../../Hooks/UseUserData/UseUserData";
import ProductsTable from "./ProductsTable";

const DashBoardAllProducts = () => {
  const [loading, setLoading] = useState(false);
  const [userInfo] = useUserData();
  const [restaurantInfo] = useRestaurantInfo(userInfo?.email);
  console.log(restaurantInfo, "thos ffj");
  const { data: allProducts = [] } = useQuery({
    queryKey: ["allProducts"],
    queryFn: () =>
      fetch(
        `http://localhost:5000/myProducts?restaurantName=${restaurantInfo?.restaurantName}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      ).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    // fetch(`http://localhost:5000/allDeliveryMan/${id}`, {
    //   method: "DELETE",
    //   headers: {
    //     authorization: `bearer ${localStorage.getItem("accessToken")}`,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.status) {
    //       setLoading(false);
    //       refetch();
    //       toast.error("deliveryman Removed", {
    //         position: "top-center",
    //       });
    //     } else {
    //       setLoading(false);
    //     }
    //   });
  };

  const header = ["Name", "Price", "Category", "Action"];
  return (
    <div>
      <ProductsTable
        header={header}
        body={allProducts?.data}
        handleDelete={handleDelete}
        loading={loading}
      />
    </div>
  );
};

export default DashBoardAllProducts;
