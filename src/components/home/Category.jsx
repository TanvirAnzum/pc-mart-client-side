import React from "react";

const Category = () => {
  return (
    <div className="w-full p-5 min-h-[30vh] bg-base-200 flex flex-col gap-10 items-center justify-center">
      <h1 className="text-center font-bold upper-case text-4xl uppercase">
        What WE OFFER!
      </h1>
      <div className="w-full md:w-[80%] flex items-center justify-between">
        <div className="w-[20em] ring h-[10em]"></div>
        <div className="w-[20em] ring h-[10em]"></div>
        <div className="w-[20em] ring h-[10em]"></div>
      </div>
    </div>
  );
};

export default Category;
