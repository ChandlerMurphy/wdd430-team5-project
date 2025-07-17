import React from "react";
import CallToAction from "./CallToAction";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div>
      <Logo />
      <NavLinks />
      <CallToAction />
    </div>
  );
};

export default Header;
