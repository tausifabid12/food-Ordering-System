import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { useProducts } from '../../../Contexts/ProductProvider/ProductProvider';
import useCart from '../../../Hooks/useCart/useCart';
import useRestaurantInfo from '../../../Hooks/UseRestaurantInfo/UseRestaurantInfo';
import CartProductInfo from './CartProductInfo/CartProductInfo';

const Cart = () => {
  const [cartProducts, refetch] = useCart();
  const navigate = useNavigate();
  const {
    state: { products },
  } = useProducts();
  const { user } = useContext(AuthContext);
  const [restaurantInfo] = useRestaurantInfo();
  console.log(restaurantInfo, 'this is restaurant info');

  // if (cartProducts?.data.length) {
  // }
  const cartItemsInfo = products.filter((p) =>
    cartProducts?.data.find((pId) => pId.productId === p._id)
  );

  console.log(cartItemsInfo);

  const handleDelete = (id) => {
    fetch(`https://express-food-server.vercel.app/cart/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.error('item deleted', {
          position: 'top-center',
        });
        refetch();
      });
  };

  const handleConfirmOrder = () => {
    const confirmProductsInfo = cartItemsInfo.map((p) => {
      return {
        productId: p?._id,
        img: p?.imgUrl,
        price: p?.price,
        restaurantEmail: p?.email,
        ProductName: p?.productName,
        UserEmail: user?.email,
        status: 'new',
      };
    });
    console.log(confirmProductsInfo);

    fetch(`http://localhost:5000/addOrder`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify({
        orderProductsInfo: confirmProductsInfo,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          console.log(data, 'this is first');
          fetch(
            `https://express-food-server.vercel.app/clearCart/${user?.email}`,
            {
              method: 'DELETE',
              headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
              },
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data?.status) {
                console.log(data);
                refetch();
                navigate('/deliveryTime');
              }
            });
        } else {
          toast.error('Sorry something went wrong');
        }
      });
  };

  let totalPrice;
  if (cartItemsInfo) {
    const priceArray = cartItemsInfo.map((p) => p.price);
    totalPrice = priceArray.reduce(
      (accumulator, currentValue) =>
        parseInt(accumulator) + parseInt(currentValue),
      0
    );
  }

  // .reduce(function(accumulator, currentValue) {
  //   return accumulator + currentValue;
  // }, 0);
  return (
    <div className="w-full">
      <div className="flex flex-col max-w-3xl mx-auto p-6 space-y-4 sm:p-10  text-gray-900">
        <h2 className="text-xl font-semibold">Your cart</h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cartItemsInfo &&
            cartItemsInfo.map((info) => (
              <CartProductInfo
                key={info?._id}
                info={info}
                handleDelete={handleDelete}
              />
            ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold"> {totalPrice} €</span>
          </p>
          <p className="text-sm dark:dark:text-gray-400">
            Payment Method : Cash On Delivery
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button type="button" className="btn btn-primary btn-outline">
            Back
            <span className="sr-only sm:not-sr-only">to shop</span>
          </button>
          <Link
            onClick={handleConfirmOrder}
            type="button"
            className="btn btn-primary "
          >
            <span className="sr-only sm:not-sr-only">Confirm Order</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
