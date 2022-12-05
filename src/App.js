import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import ProductProvider from "./Contexts/ProductProvider/ProductProvider";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto lg:px-24 bg-white">
      <ProductProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
      </ProductProvider>
    </div>
  );
}

export default App;
