import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import ProductProvider from "./Contexts/ProductProvider/ProductProvider";

function App() {
  // const override: CSSProperties = {
  //   display: "block",
  //   margin: "0 auto",
  //   borderColor: "red",
  // };
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
