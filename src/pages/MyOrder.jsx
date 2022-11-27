import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { getBookings } from "../APIs/bookingsAPI";
import TableContent from "../components/myOrder/TableContent";
import { AuthContext } from "../context/AuthContext";
import GlobalLoader from "../ui/GlobalLoader";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useQuery({
    queryKey: ["myOrder", user.email],
    queryFn: () => getBookings({ buyer: user.email }),
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
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Seller</th>
              <th>Pay</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((booking, index) => (
              <TableContent
                key={booking._id}
                booking={booking}
                index={index + 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyOrder;
