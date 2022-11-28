import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { getProducts } from "../APIs/productsAPI";
import TableRow from "../components/myProducts/TableRow";
import { AuthContext } from "../context/AuthContext";

const MyProducts = () => {
  const { user } = useContext(AuthContext) || {};
  const { data, isLoading } = useQuery({
    queryKey: ["myProducts"],
    queryFn: () => getProducts({ email: user.email }),
  });

  return (
    <div className="overflow-x-auto w-full p-5 self-start">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr className="text-center">
            <th></th>
            <th>Title</th>
            <th>Price</th>
            <th>Status</th>
            <th>Boost</th>
            <th>View</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.products?.map((product, index) => (
            <TableRow product={product} index={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
