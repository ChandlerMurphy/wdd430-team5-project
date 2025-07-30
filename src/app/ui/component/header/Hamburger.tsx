"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import HamburgerLinks from "./HamburgerLinks";
import { FaTimes } from "react-icons/fa";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnclick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <button
        className="flex lg:hidden md text-4xl"
        onClick={handleOnclick}
        aria-label="Open menu"
      >
        <RxHamburgerMenu />
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col backdrop-blur-md p-6 animate-fade-in">
          <button
            className="self-end text-3xl mb-4"
            onClick={handleOnclick}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          <HamburgerLinks />
        </div>
      )}
    </>
  );
};

export default Hamburger;
