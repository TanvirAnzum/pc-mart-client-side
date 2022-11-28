import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProducts } from "../APIs/productsAPI";
import ReportedTable from "../components/reportedItems/ReportedTable";
import GlobalLoader from "../ui/GlobalLoader";

const ReportedItem = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["reportedItems"],
    queryFn: () => getProducts({ isReported: true }),
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
              <th>Title</th>
              <th>Price</th>
              <th>Seller Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.products?.map((product, index) => (
              <ReportedTable product={product} index={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ReportedItem;
