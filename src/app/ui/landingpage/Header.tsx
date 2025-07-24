import React from "react";
import Sitename from "../component/Sitename";
import Navbar from "../component/Navbar";
import PageName from "../component/PageName";

const Header = () => {
  return (
    <div className="w-full">
      <PageName
        pageName="Handcrafted Homepage"
        bgColor="bg-[var(--primary-violet-2)]"
      />
      <Navbar />
      <hr className="text-gray-300 flex justify-between text-accent" />
    </div>
  );
};

export default Header;
