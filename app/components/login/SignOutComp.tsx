"use client";
import { signOut } from "next-auth/react";

export default function SignOutPage() {
  return (
    <section className="bg-[url('/images/bg5.jpg')]  bg-cover bg-center bg-no-repeat  ">
      <button
        onClick={() => signOut()}
        className="lg:py-2 py-1  lg:px-5 px-3 border border-black  text-black text-[0.8rem] lg:text-[0.9rem] font-semibold lg:rounded-lg rounded-md cursor-pointer"
      >
        Sign Out
      </button>
    </section>
  );
}
