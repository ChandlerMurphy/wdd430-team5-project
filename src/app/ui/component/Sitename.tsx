import React from "react";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  siteName?: string;
}

const Header = ({ siteName = "Handcrafted Haven" }: HeaderProps) => {
  return (
    <Link href={"/"}>
      <div className="rounded m-auto flex items-center justify-center">
        <Image src={"/favicon.png"} width={40} height={20} alt="favicon" />
        <h1 className="text-accent py-5 text-4xl text-center">{siteName}</h1>
      </div>
    </Link>
  );
};

export default Header;
