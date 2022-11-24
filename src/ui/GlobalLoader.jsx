import React from "react";
import { RotatingSquare } from "react-loader-spinner";

const GlobalLoader = () => {
  return (
    <div className="fixed top-[50%] left-[50%] transform -translate-y-[50%] -translate-x-[50%] flex items-center justify-center">
      <RotatingSquare
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default GlobalLoader;
