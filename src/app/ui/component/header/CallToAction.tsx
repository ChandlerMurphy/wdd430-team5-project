import Link from "next/link";
import React from "react";
import { GoRepoLocked } from "react-icons/go";

const CallToAction = () => {
  return (
    <div className="justify-between gap-2 hidden lg:flex xl:flex">
      
      <Link
      className="p-2 rounded text-white"
      style={{ backgroundColor: "#7c309cff" }}
      href={"/register"}>
        Open an account
      </Link>
      <Link
        className="flex justify-between gap-3 items-center bg-white text-black p-2 rounded"
        href={"/login"}
      >
        <GoRepoLocked className="text-black" />
        Login
      </Link>
    </div>
  );
};

export default CallToAction;
