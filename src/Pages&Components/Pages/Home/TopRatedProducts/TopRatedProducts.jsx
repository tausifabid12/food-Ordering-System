import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const TopRatedProducts = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`http://localhost:5000/allProduct?limit=3`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  return (
    <div className="md:pl-12 p-2 max-w-full">
      <div className="flex justify-between items-center px-0 ">
        <h2 className="text-2xl md:text-3xl font-bold">Top Rated Products</h2>
        <Link to="/products">
          <button className="btn btn-primary btn-xs text-white font-bold">
            view all
          </button>
        </Link>
      </div>
      <div className="flex w-full overflow-x-auto py-12 gap-3 md:grid  md:grid-cols-2 lg:grid-cols-3 md:gap-7">
        {products?.data &&
          products?.data.map((product) => (
            <ProductCard key={product?._id} info={product}></ProductCard>
          ))}
      </div>
    </div>
  );
};

export default TopRatedProducts;
