import React from "react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div>
      <Link href={"/SignUp"}>SignUp </Link>
      <Link href={"/post"}>Make Post</Link>
    </div>
  );
};

export default CallToAction;
