import React from 'react';

const NoData = ({ message }) => {
  return (
    <div className="w-full h-full min-h-[400px] text-5xl font-bold grid place-content-center  text-gray-600">
      {message}
    </div>
  );
};

export default NoData;
