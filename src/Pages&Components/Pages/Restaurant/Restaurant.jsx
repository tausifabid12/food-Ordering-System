import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ComingSoon from '../../Components/ComingSoon/ComingSoon';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Loading from '../Loading/Loading';

const Restaurant = () => {
  const info = useLoaderData();
  console.log(info);
  const {
    // approved,
    // userName,
    restaurantName,
    minOrder,
    location,
    email,
    deliveryTime,
    coverImg,
  } = info?.data;

  const { data: allProducts = [], isLoading } = useQuery({
    queryKey: ['allProducts', email],
    queryFn: () =>
      fetch(
        `https://express-food-server.vercel.app/myProducts?email=${email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {/* page header or top section */}
      <div className="grid grid-cols-1 gap-y-2 lg:px-6 lg:grid-cols-2 h-[300px]  place-content-center text-white bg-[#171a29]  ">
        <div className="w-full max-h-full">
          <img
            className="w-full max-h-[250px] rounded-md"
            src={coverImg}
            alt="Movie"
          />
        </div>
        <div className="grid items-center  lg:px-8">
          <div className="flex justify-between items-center ">
            <div className="card card-side   bg-[#171a29]  p-2  ">
              <figure>
                <img
                  src="https://placeimg.com/100/100/arch"
                  className="rounded-xl"
                  alt="Movie"
                />
              </figure>
              <div className="card-body p-1 space-y-0 ml-4">
                <h2 className="text-md font-semibold">{restaurantName}</h2>
                <p className="text-sm text-gray-500">Location: {location}</p>
                <p className="text-sm font-bold">
                  Minimum Order:{' '}
                  <span className="text-primary">{minOrder}tk</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex  py-8 px-8">
            <p className="pr-7">Rating 4.5</p>
            {/* <p>Location</p> */}
            <p>Delivery Time {deliveryTime}min</p>
            {/* <div>Add to favorite</div> */}
          </div>
        </div>
      </div>
      {/* this is product section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 lg:px-7 gap-4">
        {allProducts?.data && allProducts?.data.length ? (
          allProducts?.data.map((product) => (
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

export default Restaurant;
