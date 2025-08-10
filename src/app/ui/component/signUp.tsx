"use client";
import { UserType } from "lib/definition";
import Link from "next/link";
import { SignUpState, addUser } from "lib/actions";
import React, { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "../loading/Spinner";

const SignupPage = () => {
  const router = useRouter();
  const initialState: SignUpState = { message: null, errors: {} };
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };
  const [state, formAction, isLoading] = useActionState(addUser, initialState);

  useEffect(() => {
    if (state.message?.includes("Redirecting")) {
      const timer = setTimeout(() => {
        router.push("/products");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.message, router]);

  return (
    <div className="min-h-screen text-black flex items-center justify-center bg-[var(--background)] px-4 py-30 md:py-30 lg:py-25">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-accent mb-6">
          Sign Up
        </h2>
        {state.message && <p className="text-green-600">{state.message}</p>}
        {state.errors.email &&
          state.errors.email.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        <p className="text-center my-5">
          Create an account to shop or display your artisans{" "}
        </p>
        <form action={formAction} className="space-y-6">
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border rounded px-3 py-2"
              required
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded px-3 py-2"
              required
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Password</label>
            <div className="relative">
              <input
                name="password"
                className="w-full border rounded px-3 py-2"
                required
                placeholder="Your password"
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-xs text-gray-500"
                tabIndex={-1}
              ></button>
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1">User Type</label>
            <select
              name="user_type"
              className="w-full border rounded px-3 py-2"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Please choose client type
              </option>
              <option value={UserType.Artisan}>Artisan</option>
              <option value={UserType.Customer}>Customer</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Profile Picture</label>
            <input
              type="file"
              name="profile_picture"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-white"
              required
            />
            {preview && (
              <div>
                <label
                  htmlFor="image"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Product Image
                </label>
                <img
                  src={preview}
                  alt="Your Product Image"
                  className="w-full h-48 object-cover"
                />
              </div>
            )}
          </div>
          <div>
            <label className="block font-semibold mb-1">Bio</label>
            <textarea
              name="bio"
              className="w-full border rounded px-3 py-2"
              rows={3}
              required
              placeholder="Tell us about yourself"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-accent text-white font-bold py-2 rounded hover:opacity-100 opacity-90 transition-opacity cursor-pointer"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-secondary font-semibold hover:underline"
          >
            Log in
          </Link>
        </div>
      </div>
      {isLoading && (
        <Spinner message={"Please wait whiles we add you to our users"} />
      )}
    </div>
  );
};

export default SignupPage;
