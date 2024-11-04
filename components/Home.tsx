"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";

const Home: React.FC<{ session: any }> = ({ session }) => {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/api/auth/signin" });
  };

  return (
    <div>
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-[25px] font-bold text-black uppercase ">HOME</h1>
      <div className="flex items-center">
        {session ? (
          <>
            <button onClick={handleSignOut} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              Logout
            </button>
          </>
        ) : (
          <span className="mr-2 text-black">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                signIn();
              }}
            >
              Log In
            </button>
          </span>
        )}
      </div>
    </header></div>
  );
};

export default Home;
