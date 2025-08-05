"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { label: "H-Haven", href: "/" },
  { label: "About", href: "/aboutus" },
  { label: "Categories", href: "/categories" },
  { label: "Sell", href: "/products/sell" },
  { label: "featured", href: "/featured/designs" },
  { label: "Cart", href: "/cart" },
];

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <ul className="hidden lg:flex xl:flex justify-between gap-5 items-center">
      {navLinks.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className={clsx(
              "transition-colors duration-200 text-base sm:text-base",
              pathname === link.href && "bg-white p-2 rounded text-black"
            )}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
