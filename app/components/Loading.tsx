import React from "react";

const Loading = () => {
  return (
    <>
      <div className="bg-gray-200 p-5 space-y-3 rounded-lg animate-pulse">
        <div className="h-6 bg-gray-400 rounded w-3/4"></div>{" "}
        <div className="h-4 bg-gray-400 rounded w-5/6"></div>{" "}
        <div className="h-20 bg-gray-400 rounded w-full"></div>{" "}
      </div>
    </>
  );
};

export default Loading;
