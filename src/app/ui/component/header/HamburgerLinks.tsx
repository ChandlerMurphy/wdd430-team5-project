"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
// import { GoRepoLocked } from "react-icons/go";

const hamburgerLinks = [
  { label: "H-Haven", href: "/" },
  { label: "About", href: "/about" },
  { label: "Categories", href: "/categories" },
  { label: "Sell", href: "/sell" },
  { label: "featured", href: "/featured/designs" },
  { label: "Cart", href: "/cart" },
];

const HamburgerLinks = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="bg-black/90 flex z-50 flex-col gap-4 p-4 rounded-lg shadow-lg">
        {hamburgerLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={clsx(
                "transition-colors duration-200 text-base sm:text-base px-4 py-2 rounded",
                pathname === link.href
                  ? "bg-[var(--primary-violet)]/80 text-white font-bold shadow"
                  : "hover:bg-white/10 text-white"
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          {" "}
          <Link
            style={{ backgroundColor: "#960005" }}
            className="w-40 text-center block p-2 rounded text-white"
            href={"/register"}
          >
            Open an account
          </Link>
        </li>
        <li>
          <Link
            className="bg-white w-40 text-center block text-black p-2 rounded"
            href={"/login"}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HamburgerLinks;
