"use client";

import { useUser } from "../context/userContext";

const UserProfile = () => {
  const { user } = useUser();

  if (!user) {
    return <p>No user data available. Please log in.</p>;
  }

  return (
    <section className="mb-8 flex items-center space-x-6">
      {/* Profile image placeholder */}
      <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-2xl font-bold">
        {user.name.charAt(0)}
      </div>

      {/* User Info */}
      <div>
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-700">{user.email}</p>
        <p className="text-sm text-gray-500">Member Since: {user.joined}</p>
      </div>
    </section>
  );
};

export default UserProfile;
