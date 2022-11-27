import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { getProducts } from "../../APIs/productsAPI";
import ProductItem from "../products/ProductItem";
import ProductModal from "../products/ProductModal";

const Advertise = () => {
  const { data } = useQuery({
    queryKey: ["addvertiseProduct"],
    queryFn: () => getProducts({ boost: true, status: "unsold" }),
  });

  const [openAdModal, setOpenAdModal] = useState(false);

  let content;

  if (data?.products?.length === 0) content = "";
  else
    content = (
      <>
        <div className="w-full p-5 min-h-[50vh] bg-base-100 flex flex-col items-center justify-center gap-5">
          <h1 className="text-center font-bold text-2xl text-success uppercase">
            Products you may like!
          </h1>
          <div className="w-full shadow shadow-neutral rounded">
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
            >
              {data?.products.map((product, index) => (
                <ProductItem
                  product={product}
                  ad={true}
                  index={index}
                  setOpenAdModal={setOpenAdModal}
                  key={product._id}
                />
              ))}
            </Carousel>
          </div>
        </div>
        {openAdModal && (
          <ProductModal
            product={data?.products[openAdModal - 1]}
            setModal={setOpenAdModal}
          />
        )}
      </>
    );

  return content;
};

export default Advertise;
