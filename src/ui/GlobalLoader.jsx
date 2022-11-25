import React from "react";
import { MagnifyingGlass, RotatingSquare } from "react-loader-spinner";

const GlobalLoader = ({ root }) => {
  return (
    <div className="fixed top-[50%] left-[50%] transform -translate-y-[50%] -translate-x-[50%] flex items-center justify-center">
      {root ? (
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperclassName="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      ) : (
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
      )}
    </div>
  );
};

export default GlobalLoader;
