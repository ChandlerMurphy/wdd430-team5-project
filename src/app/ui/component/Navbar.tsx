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
    <nav className="bg-primary py-3 px-6 shadow-md w-full">
      <ul className="flex items-center justify-between w-full">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={clsx(
                "transition-colors duration-200 px-3 py-1 rounded-md font-semibold text-accent hover:bg-accent/10 hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent-foreground",
                pathname === link.href &&
                  "bg-accent/20 text-accent-foreground shadow"
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
