import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-[url('/images/bg.jpg')] h-[20rem] md:h-[28rem]  bg-cover bg-no-repeat bg-center p-4 sm:p-7 md:p-14 flex flex-col items-center justify-center">
        <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-bold text-center pb-5">
          Discover the Latest Insights: Stay Updated with Our Posts
        </h1>
        <p className="text-[0.9rem] sm:text-[1rem] md:text-lg text-slate-600 text-center">
          Dive into an array of topics, from current events to insightful
          analysis. Stay informed and inspired with our posts.
        </p>
      </div>
    </>
  );
};

export default Hero;
