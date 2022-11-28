import React from "react";

const ReportedTable = ({ product, index }) => {
  return (
    <tr className="hover text-center">
      <th>{index}</th>
      <td>{product.title}</td>
      <td>{product.sellingPrice}</td>
      <td>{product.seller.email}</td>
      <td>
        <button className="btn btn-error w-[6em]">Delete</button>
      </td>
    </tr>
  );
};

export default ReportedTable;
