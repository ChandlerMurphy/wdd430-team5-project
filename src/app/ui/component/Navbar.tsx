"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { label: "H-Haven", href: "/" },
  { label: "Browse", href: "/browse" },
  { label: "Categories", href: "/categories" },
  { label: "Sell", href: "/sell" },
  { label: "Login", href: "/login" },
  { label: "Cart", href: "/cart" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-primary shadow-md w-full">
      <ul className="flex items-center justify-between w-full p-5">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={clsx(
                "transition-colors duration-200 text-2xl p-2",
                pathname === link.href && ""
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
