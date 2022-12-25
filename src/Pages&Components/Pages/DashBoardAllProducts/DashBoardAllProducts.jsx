import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Loading from "../Loading/Loading";
import ProductsTable from "./ProductsTable";

const DashBoardAllProducts = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const { data: allProducts = [], refetch } = useQuery({
    queryKey: ["allProducts"],
    queryFn: () =>
      fetch(`http://localhost:5000/myProducts?email=${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  console.log(allProducts);
  const handleDelete = (id) => {
    setLoading(true);
    fetch(`http://localhost:5000/products/${id}`, {
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
          toast.error("Product Removed", {
            position: "top-center",
          });
        } else {
          setLoading(false);
        }
      });
  };

  const header = ["Name", "Price", "Category", "Action"];
  return (
    <div>
      {allProducts?.data && allProducts?.data.length ? (
        <ProductsTable
          header={header}
          body={allProducts?.data}
          handleDelete={handleDelete}
          loading={loading}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default DashBoardAllProducts;
