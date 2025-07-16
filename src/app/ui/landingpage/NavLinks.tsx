import React from "react";
import Link from "next/link";

const NavLinks = () => {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <Link href={"/ratings"}>Ratings</Link>
      <Link href={"/about"}>About Us</Link>
      <Link href={"/profile"}>Profile</Link>
    </div>
  );
};

export default NavLinks;
