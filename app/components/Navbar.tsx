"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import SignOutPage from "./login/SignOutComp";
const Navbar = () => {
  const [left, setLeft] = useState("-100%");

  const handleClick = () => {
    setLeft((prevLeft) => (prevLeft === "-100%" ? "0%" : "-100%"));
  };
  const { data: session } = useSession(); //get session data
  return (
    <>
      {session ? (
        <header>
          <nav className="bg-[#7ECCCB] flex items-center justify-between pr-5 md:pr-5 relative">
            <div className="logo w-[13rem] md:w-[20rem]">
              <Image
                src="/images/logo.PNG"
                alt="logo"
                width={500}
                height={300}
              />
            </div>
            <ul className="md:flex items-center gap-10 hidden">
              <Link href="/" className="cursor-pointer hover:text-slate-600">
                Home
              </Link>
              <Link href="/" className="cursor-pointer hover:text-slate-600">
                About
              </Link>
              <Link href="/" className="cursor-pointer hover:text-slate-600">
                Join us
              </Link>
              <Link href="/" className="cursor-pointer hover:text-slate-600">
                Explore
              </Link>
              <div className="md:block hidden">
            <SignOutPage/>
              </div>
            </ul>
            <FontAwesomeIcon
              className="cursor-pointer md:hidden block"
              icon={faBars}
              width={25}
              height={25}
              onClick={handleClick}
            />
            <ul
              className={`md:hidden block absolute top-[2.5rem]  transition-all duration-500 ease-in-out space-y-7  w-full bg-gradient-to-r from-[#6FC5C5] to-[#7ECCCB] px-12 py-5 h-[100vh] `}
              style={{ left }}
            >
              <Link
                href="/"
                className="cursor-pointer hover:text-slate-600 block"
              >
                Home
              </Link>
              <Link
                href="/"
                className="cursor-pointer hover:text-slate-600 block"
              >
                About
              </Link>
              <Link
                href="/"
                className="cursor-pointer hover:text-slate-600 block"
              >
                Join us
              </Link>
              <Link
                href="/"
                className="cursor-pointer hover:text-slate-600 block"
              >
                Explore
              </Link>
              <div className="md:hidden block">
              <SignOutPage/>
              </div>
            </ul>
          </nav>
        </header>
      ) : (
        <nav className="bg-[#7ECCCB] flex items-center justify-between pr-5 md:pr-5 relative">
          <div className="logo w-[13rem] md:w-[20rem]">
            <Image src="/images/logo.PNG" alt="logo" width={500} height={300} />
          </div>
          <div>
            <button
              onClick={() => signIn("github")}
              className="lg:py-2 py-1  lg:px-5 px-3 border border-black  text-black text-[0.8rem] lg:text-[0.9rem] font-semibold lg:rounded-lg rounded-md cursor-pointer"
              >
              Sign In
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
