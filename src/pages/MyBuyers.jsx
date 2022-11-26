import React from "react";
import TableRow from "../components/myBuyers/TableRow";

const MyBuyers = () => {
  return (
    <div className="overflow-x-auto w-full p-5 self-start">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr className="text-center">
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Product Bought</th>
          </tr>
        </thead>
        <tbody>
          {/* {data?.products?.map((product, index) => ( */}
          <TableRow />
          {/* ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default MyBuyers;
