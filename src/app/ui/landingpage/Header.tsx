import React from "react";
import Sitename from "../component/Sitename";
import Navbar from "../component/Navbar";
import PageName from "../component/PageName";

const Header = () => {
  return (
    <div className="w-full">
        {/* header */}
      <PageName pageName="Handcrafted Homepage" bgColor="bg-accent" />
      <Navbar />
      <hr className="bg-accent flex justify-between text-accent" />
    </div>
  );
};

export default Header;
