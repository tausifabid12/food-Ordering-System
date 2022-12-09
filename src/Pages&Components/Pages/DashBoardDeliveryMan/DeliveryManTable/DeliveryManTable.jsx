import React from "react";

const DeliveryManTable = ({ header, body }) => {
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
                    <div>
                      <div className="font-bold">{data?.userName}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {data?.phoneNumber}
                  <br />
                  {/* <span className="badge badge-ghost badge-sm">
                    {data?.email}
                  </span> */}
                </td>
                <td>{data?.deliveryManType}</td>
                <th>
                  <button className="btn btn-error btn-xs">delete</button>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryManTable;
