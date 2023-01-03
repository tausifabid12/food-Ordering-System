import React from 'react';

const ProductsTable = ({
  header,
  body,
  handleAction,
  handleDelete,
  loading,
}) => {
  return (
    <div className="overflow-x-auto w-full h-full">
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
                          src={data?.imgUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{data?.productName}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {data?.price}
                  <br />
                </td>
                <td>{data?.category}</td>
                <th>
                  <button
                    onClick={() => {
                      handleDelete(data?._id);
                    }}
                    className={`btn btn-xs ${
                      loading ? 'btn-loading' : 'btn-error'
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

export default ProductsTable;
