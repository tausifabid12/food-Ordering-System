import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import OrdersTable from './OrdersTable/OrdersTable';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import NoData from '../../Components/NoData/NoData';
import OrderStateTable from '../../Components/OrdersStateTable/OrderStateTable';

const DashBoardAllOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: allOrders = [] } = useQuery({
    queryKey: ['allOrders', user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/allOrders?email=${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      }).then((res) => res.json()),
  });

  const handleStartCooking = (id) => {
    const updateInfo = { email: user?.email, status: 'ready', id: id };
    console.log(updateInfo);

    fetch(`http://localhost:5000/updateOrder`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const header = ['Product', 'Price', 'User Email', 'Actions'];
  return (
    <div className="lg:p-4 space-y-4">
      <h1 className="text-4xl font-bold text-gray-900"> All Orders</h1>
      {allOrders?.data && allOrders?.data.length ? (
        <OrderStateTable
          header={header}
          body={allOrders?.data}
          handleAction={handleStartCooking}
        />
      ) : (
        // <OrdersTable header={header} body={allOrders?.data} />
        <NoData message={"You Don't Have Any Orders"}></NoData>
      )}
    </div>
  );
};

export default DashBoardAllOrders;
