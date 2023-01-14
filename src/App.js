import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import ProductProvider from './Contexts/ProductProvider/ProductProvider';
import useUserData from './Hooks/UseUserData/UseUserData';
import Loading from './Pages&Components/Pages/Loading/Loading';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  const [userInfo, isLoading] = useUserData();

  useEffect(() => {
    AOS.init();
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-[1500px] mx-auto  bg-white">
      <ProductProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
      </ProductProvider>
    </div>
  );
}

export default App;
