import React from "react";
import { useProducts } from "../../../../Contexts/ProductProvider/ProductProvider";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const TopRatedProducts = () => {
  const {
    state: { loading, products },
  } = useProducts();

  if (loading) {
    console.log("loading");
  }

  return (
    <div className="md:pl-12 p-2 max-w-full">
      <div className="flex justify-between items-center px-0 ">
        <h2 className="text-2xl md:text-3xl font-bold">Top Rated Products</h2>
        <button>view all</button>
      </div>
      <div className="flex overflow-x-auto py-12 gap-2 md:grid  md:grid-cols-2 lg:grid-cols-3 md:gap-7">
        {products &&
          products
            .filter((p) => p.strCategory === "dessert")
            .map((product) => (
              <ProductCard key={product?._id} info={product}></ProductCard>
            ))}
      </div>
    </div>
  );
};

export default TopRatedProducts;
