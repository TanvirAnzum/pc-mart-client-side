import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import { getProductsByCategory } from "../APIs/productsAPI";
import ProductItem from "../components/products/ProductItem";
import GlobalLoader from "../ui/GlobalLoader";

const Products = () => {
  const { categoryId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["categoryProducts", categoryId],
    queryFn: () => getProductsByCategory(categoryId),
  });

  return (
    <>
      {isLoading && <GlobalLoader />}
      <div className="mx-auto w-[90%] min-h-[70vh] flex flex-col items-center justify-center gap-10 p-5">
        {data?.products?.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
