import { UserType } from "../../../lib/definition";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="min-h-screen text-black flex items-center justify-center bg-[var(--background)] px-4 py-30 md:py-30 lg:py-25">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-accent mb-6">
          Sign Up
        </h2>
        <p className="text-center my-5">
          Create an account to shop or display your artisans{" "}
        </p>
        <form className="space-y-6">
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
              required
            >
              <option value={UserType.Artisan}>Artisan</option>
              <option value={UserType.Customer}>Customer</option>
              <option value={UserType.Admin}>Admin</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Profile Picture</label>
            <input
              type="file"
              name="profile_picture"
              accept="image/*"
              className="w-full border rounded px-3 py-2"
              required
            />
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
    </div>
  );
};

export default SignupPage;
