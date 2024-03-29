import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Loading from '../Loading/Loading';

const AllProduct = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch(`https://express-food-server.vercel.app/allProduct`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      }).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="md:pl-12 md:pt-8 p-2 max-w-full">
      <div className="flex justify-between items-center px-0 ">
        <h2 className="text-2xl md:text-3xl font-bold">All Products</h2>
      </div>
      <div className="w-full py-12 gap-3 grid grid-cols-1 lg:grid-cols-2 md:gap-7">
        {products.data &&
          products?.data.map((restaurant) => (
            <ProductCard key={restaurant?._id} info={restaurant} />
          ))}
      </div>
    </div>
  );
};

export default AllProduct;
