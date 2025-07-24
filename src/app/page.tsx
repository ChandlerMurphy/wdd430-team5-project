import React from "react";
import Header from "./ui/landingpage/Header";
import Sitename from "./ui/component/Sitename";
import Hero from "./ui/landingpage/Hero";

const page = () => {
  return (
    <div className="w-full mb-10">
      <Sitename />
      <div className="w-[95%] h-auto border border-gray-300 outline-0 m-auto rounded">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default page;
