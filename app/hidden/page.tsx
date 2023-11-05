"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { useDisconnect } from "wagmi";

const HiddenPage = () => {
  const { disconnectAsync } = useDisconnect();
  const handleSignout = async () => {
    disconnectAsync();
    signOut({callbackUrl:"/"});
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {" "}
      <h1 className="text-5xl tracking-tight font-extrabold text-gray-300">
        WELCOME TO TAGZ
      </h1>
      <h2 className="text-3xl text-gray-500">
        You are now <span className="font-bold">Connected</span>.
      </h2>
      <p className="text-gray-500">
        Update your profile and start creating{" "}
        <span className="font-semibold text-green-400 text-xl">
          PHYGITALS
        </span>
        !
      </p>
      <button
        className="rounded-lg py-2 px-4 mt-6 bg-red-700 hover:border hover:border-red-700 hover:bg-transparent"
        onClick={handleSignout}
      >
        Sign Out
      </button>
    </div>
  );
};

export default HiddenPage;
