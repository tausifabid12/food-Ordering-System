import React from 'react';
import loading from '../../../Assets/loading.gif';

const Loading = () => {
  return (
    <div className="max-w-screen-2xl w-full mx-auto h-screen grid place-content-center bg-white">
      <img src={loading} className="w-64 h-64" alt="" />
      <span className="animate-bounce mr-3 text-2xl text-center font-bold">
        Loading...
      </span>
    </div>
  );
};

export default Loading;
