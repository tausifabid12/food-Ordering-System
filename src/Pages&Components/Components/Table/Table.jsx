import React from "react";

const Table = ({ header, body, handleAction, handleDelete, loading }) => {
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
                          src={data?.coverImg}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{data?.restaurantName}</div>
                      <div className="text-sm opacity-50">{data?.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {data?.userName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {data?.email}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => handleAction(data?._id)}
                    className={`btn btn-xs ${
                      data?.approved
                        ? "btn-disabled"
                        : `${loading ? "btn-loading" : "btn-success"}`
                    } `}
                  >
                    {data?.approved ? "Approved" : "Approve"}
                  </button>
                </td>
                <th>
                  <button
                    onClick={() => {
                      handleDelete(data?._id);
                    }}
                    className={`btn btn-xs ${
                      loading ? "btn-loading" : "btn-error"
                    }  `}
                  >
                    delete
                  </button>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
