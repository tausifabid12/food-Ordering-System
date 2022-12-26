import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import ComingSoon from "../../Components/ComingSoon/ComingSoon";

const CategoryProducts = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className=" lg:px-12 py-8 px-2">
      <h1 className="text-2xl md:text-3xl font-bold">
        {products.message} Dishes
      </h1>
      <div className="w-full py-12  grid gap-3 md:grid-cols-1 lg:grid-cols-2 md:gap-7">
        {products?.data && products?.data.length ? (
          products?.data.map((product) => (
            <ProductCard key={product?._id} info={product} />
          ))
        ) : (
          <div className="col-span-2">
            <ComingSoon />
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;

// {products?.data && products?.data.length ? (
//   products?.data.map((product) => (
//     <ProductCard key={product?._id} info={product} />
//   ))
// ) : (
//   <div className="col-span-2">
//     <ComingSoon />
//   </div>
// )}
