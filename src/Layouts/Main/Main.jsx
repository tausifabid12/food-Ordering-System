import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages&Components/Components/Footer/Footer';
import Navbar from '../../Pages&Components/Components/Navbar/Navbar';

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
