import React from "react";
import NavLinks from "./NavLinks";
import SiteName from "./SiteName";
import CallToAction from "./CallToAction";
import Hamburger from "./Hamburger";
import HamburgerLinks from "./HamburgerLinks";

const Header = () => {
  return (
    <div className="w-full fixed shadow z-50">
      <div className="bg-black text-white flex items-center justify-between p-5">
        <SiteName />
        <NavLinks />
        <CallToAction />
        <Hamburger />
      </div>
    </div>
  );
};

export default Header;
