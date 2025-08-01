"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex items-center justify-center px-4">
      <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Sign in to your account
        </h2>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-accent text-white font-medium py-2 rounded hover:bg-accent-dark transition-colors duration-200"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <div className="text-center text-sm text-gray-500 mt-4">
          Not a member yet?{" "}
          <Link
            href="/register"
            className="text-secondary font-semibold hover:underline"
          >
            Sign up
          </Link>
        </div>

        <div className="text-center text-sm text-gray-500">
          Forgot your password?{" "}
          <Link
            href="/reset-password"
            className="text-secondary font-semibold hover:underline"
          >
            Click here to reset
          </Link>
        </div>
      </form>
    </div>
  );
}
