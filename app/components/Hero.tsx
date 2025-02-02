import React from "react";
import { auth } from "@/auth";
import SignInPage from "./login/LoginComp";

export const Hero = async () => {
    const session = await auth();
    const isAuthentication = !!session?.user;
  return (
    <>
      <div className="bg-[url('/images/bg.jpg')]  bg-cover bg-no-repeat bg-center p-4 sm:p-7 md:p-14 flex flex-col items-center justify-center h-screen">
        <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-bold text-center pb-5">
          Discover the Latest Insights: Stay Updated with Our Posts
        </h1>
        <p className="text-[0.9rem] sm:text-[1rem] md:text-lg text-slate-600 text-center">
          Dive into an array of topics, from current events to insightful
          analysis. Stay informed and inspired with our posts.
        </p>
        {isAuthentication ? "" : <SignInPage />}
      </div>
    </>
  );
};

export default Hero;
