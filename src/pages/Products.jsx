import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import { getProductsByCategory } from "../APIs/productsAPI";
import ProductItem from "../components/products/ProductItem";

const Products = () => {
  const { categoryId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["categoryProducts", categoryId],
    queryFn: () => getProductsByCategory(categoryId),
  });

  console.log(data);

  return (
    <div className="mx-auto w-[90%] min-h-[70vh] flex flex-col items-center justify-center gap-10 p-5">
      {data?.products?.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
