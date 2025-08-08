"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { useUser } from "../../context/userContext"; // Adjust path as needed

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
  const router = useRouter();
  const { user, setUser } = useUser();

  console.log("User from context in HamburgerLinks:", user);

  // Logout handler: clears user and redirects to login page
  const handleLogout = () => {
    setUser(null);           // clears user state & localStorage
    router.push("/login");   // redirect to login page
  };

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
          <Link
            style={{ backgroundColor: "#960005" }}
            className="w-40 text-center block p-2 rounded text-white"
            href={"/register"}
          >
            Open an account
          </Link>
        </li>

        {/* Conditional Login/Logout button */}
        <li>
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-white w-40 text-center block text-black p-2 rounded cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <Link
              className="bg-white w-40 text-center block text-black p-2 rounded"
              href={"/login"}
            >
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default HamburgerLinks;
