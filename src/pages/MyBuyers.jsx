import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { getProducts } from "../APIs/productsAPI";
import TableRow from "../components/myBuyers/TableRow";
import { AuthContext } from "../context/AuthContext";
import GlobalLoader from "../ui/GlobalLoader";

const MyBuyers = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useQuery({
    queryKey: ["myBuyers"],
    queryFn: () => getProducts({ email: user.email, status: "sold" }),
  });

  return (
    <>
      {isLoading && <GlobalLoader />}
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
            {data?.products?.map((product, index) => (
              <TableRow
                seller={product.seller}
                product={product.title}
                index={index + 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyBuyers;
