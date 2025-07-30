import { UserType } from "../../../lib/definition";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] px-4 py-20 md:py-32 lg:py-25">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          Sign Up
        </h2>
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
            className="w-full bg-red-600 text-white font-bold py-2 rounded hover:bg-red-400 transition"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-red-600 font-semibold hover:underline"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
