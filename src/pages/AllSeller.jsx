import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUser } from "../APIs/usersAPI";
import SellerTable from "../components/allSeller/SellerTable";
import GlobalLoader from "../ui/GlobalLoader";

const AllSeller = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["allSeller"],
    queryFn: () => getUser({ seller: true }),
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
              <th>Delete</th>
              <th>Verify</th>
            </tr>
          </thead>
          <tbody>
            {data?.users?.map((user, index) => (
              <SellerTable seller={user} index={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllSeller;
