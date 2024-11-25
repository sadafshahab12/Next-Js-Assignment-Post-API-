"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [left, setLeft] = useState("-100%");

  const handleClick = () => {
    setLeft((prevLeft) => (prevLeft === "-100%" ? "0%" : "-100%"));
  };
  return (
    <>
      <header>
        <nav className="bg-[#7ECCCB] flex items-center justify-between pr-5 md:pr-28 relative">
          <div className="logo w-[13rem] md:w-[20rem]">
            <Image src="/images/logo.PNG" alt="logo" width={500} height={300} />
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
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
