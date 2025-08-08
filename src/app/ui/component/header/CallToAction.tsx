"use client"; // must be client component because of hooks

import Link from "next/link";
import React from "react";
import { GoRepoLocked } from "react-icons/go";
import { useUser } from "../../context/userContext"; // Adjust path if needed
import { useRouter } from "next/navigation";

const CallToAction = () => {
  const { user, setUser } = useUser();
  const router = useRouter();

  // Logout handler
  const handleLogout = () => {
    setUser(null);       // Clear user state and localStorage
    router.push("/login"); // Redirect to login page
  };

  return (
    <div className="justify-between gap-2 hidden lg:flex xl:flex">
      <Link
        className="p-2 rounded text-white"
        style={{ backgroundColor: "#7c309cff" }}
        href={"/register"}
      >
        Open an account
      </Link>

      {user ? (
        // Show Logout button when logged in
        <button
          onClick={handleLogout}
          className="flex justify-between gap-3 items-center bg-white text-black p-2 rounded"
        >
          <GoRepoLocked className="text-black" />
          Logout
        </button>
      ) : (
        // Show Login link when NOT logged in
        <Link
          className="flex justify-between gap-3 items-center bg-white text-black p-2 rounded"
          href={"/login"}
        >
          <GoRepoLocked className="text-black" />
          Login
        </Link>
      )}
    </div>
  );
};

export default CallToAction;
