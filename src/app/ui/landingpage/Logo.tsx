import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <h1>Handcrafated Haven</h1>
      <span>
        <Image src={"/logo.png"} width={20} height={20} alt="Site Logo" />
      </span>
    </div>
  );
};

export default Logo;
