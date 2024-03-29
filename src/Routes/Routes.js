import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
import AllCategory from '../Pages&Components/Pages/AllCategory/AllCategory';
import Home from '../Pages&Components/Pages/Home/Home/Home';
import Login from '../Pages&Components/Pages/Login/Login';
import SignUp from '../Pages&Components/Pages/SignUp/SignUp';
import Restaurant from '../Pages&Components/Pages/Restaurant/Restaurant';
import Cart from '../Pages&Components/Pages/Cart/Cart';
import Restaurants from '../Pages&Components/Pages/Restaurants/Restaurants';
import Dashboard from '../Layouts/Dashboard/Dashboard';
import AddProducts from '../Pages&Components/Pages/AddProducts/AddProducts';
import RestaurantRegister from '../Pages&Components/Pages/RestaurantRegister/RestaurantRegister';
import RegisterDeliveryMan from '../Pages&Components/Pages/RegisterDeliveryMan/RegisterDeliveryMan';
import DashBoardRestaurantInfo from '../Pages&Components/Pages/DashBoardRestaurantInfo/DashBoardRestaurantInfo';
import DashBoardDeliveryMan from '../Pages&Components/Pages/DashBoardDeliveryMan/DashBoardDeliveryMan';
import ErrorPage from '../Pages&Components/Pages/ErrorPage/ErrorPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AdminRoute from './AdminRoute/AdminRoute';
import RestaurantOwnerRoute from './RestaurantOwnerRoute/RestaurantOwnerRoute';
import DashBoardAllProducts from '../Pages&Components/Pages/DashBoardAllProducts/DashBoardAllProducts';
import OrderDeliveryTime from '../Pages&Components/Pages/OrderDeliveryTime/OrderDeliveryTime';
import AllProduct from '../Pages&Components/Pages/AllProduct/AllProduct';
import CategoryProducts from '../Pages&Components/Pages/CategoryProducts/CategoryProducts';
import DashBoardAllOrders from '../Pages&Components/Pages/DashBoardAllOrders/DashBoardAllOrders';
import DashBoardInfo from '../Pages&Components/Pages/DashBoardInfo/DashBoardInfo';
import Faq from '../Pages&Components/Pages/Faq/Faq';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/allCategory',
        element: <AllCategory />,
      },
      {
        path: '/restaurants',
        element: <Restaurants />,
      },
      {
        path: '/products',
        element: <AllProduct />,
      },
      {
        path: '/allProduct/:catName',
        loader: ({ params }) =>
          fetch(
            `https://express-food-server.vercel.app/catProducts/${params.catName}`
          ),
        element: <CategoryProducts />,
      },
      {
        path: '/restaurant/:id',
        loader: ({ params }) =>
          fetch(
            `https://express-food-server.vercel.app/allRestaurants/${params.id}`
          ),
        element: <Restaurant />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/deliveryTime',
        element: (
          <PrivateRoute>
            <OrderDeliveryTime />
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signUp',
        element: <SignUp />,
      },
      {
        path: '/restaurantReg',
        element: <RestaurantRegister />,
      },
      {
        path: '/deliveryManReg',
        element: <RegisterDeliveryMan />,
      },
      {
        path: '/faq',
        element: <Faq />,
      },
      // {
      //   path: "/AllRestaurant",
      //   element: <AllRestaurant />,
      // },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <DashBoardInfo />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/allOrders',
        element: (
          <RestaurantOwnerRoute>
            <DashBoardAllOrders />
          </RestaurantOwnerRoute>
        ),
      },
      {
        path: '/dashboard/addProduct',
        element: (
          <RestaurantOwnerRoute>
            <AddProducts />
          </RestaurantOwnerRoute>
        ),
      },
      {
        path: '/dashboard/allProduct',
        element: (
          <PrivateRoute>
            <DashBoardAllProducts />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/addRestaurant',
        element: <RestaurantRegister />,
      },
      {
        path: '/dashboard/allRestaurant',
        element: (
          <AdminRoute>
            <DashBoardRestaurantInfo />
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/addDeliveryMan',
        element: (
          <AdminRoute>
            <RegisterDeliveryMan />
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/allDeliveryMan',
        element: (
          <AdminRoute>
            <DashBoardDeliveryMan />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
