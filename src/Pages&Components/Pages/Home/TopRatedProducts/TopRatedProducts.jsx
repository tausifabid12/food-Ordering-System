import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const TopRatedProducts = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`https://express-food-server.vercel.app/allProduct?limit=3`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  return (
    <div className="pl-2 lg:pl-12 p-2 max-w-full">
      <div className="flex justify-between items-center px-0 ">
        <h2 className="text-xl md:text-3xl font-bold pl-2">
          Top Rated Products
        </h2>
        <Link to="/products">
          <button className="btn btn-primary btn-xs text-white font-bold">
            view all
          </button>
        </Link>
      </div>
      <div className="flex overflow-x-auto space-x-2 lg:space-x-0 py-12  md:grid md:gap-2 md:grid-cols-2 lg:grid-cols-3 md:gap-x-3  md:gap-y-5">
        {products?.data &&
          products?.data.map((product) => (
            <ProductCard key={product?._id} info={product}></ProductCard>
          ))}
      </div>
    </div>
  );
};

export default TopRatedProducts;
