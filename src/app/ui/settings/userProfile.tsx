// const UserProfile = () => {
//   // Replace with real user data later
//   const user = {
//     name: "Jane Doe",
//     email: "janedoe@example.com",
//     joined: "January 2024",
//   };

//   return (
//     <section className="mb-8">
//       <h2 className="text-xl font-semibold mb-4">User Info</h2>
//       <ul className="space-y-2">
//         <li><strong>Name:</strong> {user.name}</li>
//         <li><strong>Email:</strong> {user.email}</li>
//         <li><strong>Member Since:</strong> {user.joined}</li>
//       </ul>
//     </section>
//   );
// };

// export default UserProfile;


// ---------

const UserProfile = () => {
  const user = {
    name: "Jane Doe",
    email: "janedoe@example.com",
    joined: "January 2024",
  };

  return (
    <section className="mb-8 flex items-center space-x-6">
      {/* Placeholder profile image */}
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
