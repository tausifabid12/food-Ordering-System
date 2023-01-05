import React from 'react';

const OrderStateTable = ({ header, body, handleAction, loading }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>{header && header.map((name, i) => <th key={i}>{name}</th>)}</tr>
        </thead>
        <tbody>
          {body &&
            body.map((data) => (
              <tr key={data._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={data?.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {data?.ProductName}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="font-semibold text-gray-900">
                    {data?.price}
                  </span>
                </td>
                <td>
                  <span className="font-semibold text-gray-900">
                    {data?.UserEmail}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => handleAction(data?.productId)}
                    className={`btn btn-xs ${
                      data?.approved
                        ? 'btn-disabled'
                        : `${loading ? 'btn-loading' : 'btn-primary'}`
                    } `}
                  >
                    {data?.approved ? 'Cooking Started' : 'Start Cooking'}
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderStateTable;
