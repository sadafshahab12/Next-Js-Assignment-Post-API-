"use client";
import { signIn } from "next-auth/react"; //client side
import { useState } from "react";
export default function SignInPage() {
  const [message, setMessage] = useState("");

  const handleSignIn = async () => {
    try {
      await signIn("github");
      setMessage("Signing in with Github....");
    } catch (error) {
      console.error("Sign in error:", error);
      setMessage("Error signing in. Please try again.");
    }
  };
  return (
    <>
      <div>
        <button
          className="bg-black text-white md:py-3 py-2 px-8 rounded-lg cursor-pointer xs:text-[1rem] text-[0.8rem] my-4"
          onClick={handleSignIn}
        >
          Signin with GitHub
        </button>
        {message && <p className="text-black text-sm">{message}</p>}
      </div>
    </>
  );
}
