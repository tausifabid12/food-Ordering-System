import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import AllCategory from "../Pages&Components/Pages/AllCategory/AllCategory";

// import AllRestaurant from "../Pages&Components/Pages/AllRestaurant/AllRestaurant";
import Home from "../Pages&Components/Pages/Home/Home/Home";
import Login from "../Pages&Components/Pages/Login/Login";
import SignUp from "../Pages&Components/Pages/SignUp/SignUp";
import Restaurant from "../Pages&Components/Pages/Restaurant/Restaurant";
import Cart from "../Pages&Components/Pages/Cart/Cart";
import Restaurants from "../Pages&Components/Pages/Restaurants/Restaurants";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import AddProducts from "../Pages&Components/Pages/AddProducts/AddProducts";
import RestaurantRegister from "../Pages&Components/Pages/RestaurantRegister/RestaurantRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allCategory",
        element: <AllCategory />,
      },
      {
        path: "/restaurants",
        element: <Restaurants />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurant />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/restaurantReg",
        element: <RestaurantRegister />,
      },
      // {
      //   path: "/AllRestaurant",
      //   element: <AllRestaurant />,
      // },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/addProduct",
        element: <AddProducts />,
      },
    ],
  },
]);

export default router;
