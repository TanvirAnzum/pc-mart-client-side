import React from "react";

const TableRow = ({ seller, index, product }) => {
  return (
    <tr className="hover text-center">
      <th>{index}</th>
      <td>{seller.displayName}</td>
      <td>{seller.email}</td>
      <td>{seller.phoneNumber ? seller.phoneNumber : "not updated"}</td>
      <td>{product}</td>
    </tr>
  );
};

export default TableRow;
