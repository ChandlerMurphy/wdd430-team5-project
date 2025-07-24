import React from "react";
import Header from "../ui/landingpage/Header";
import UserProfile from "../ui/settings/userProfile";
import HeroCards from "../ui/component/HeroCards";
import AddListingButton from "../ui/component/AddListingButton";

const SettingsPage = () => {
  return (
    <div className="w-[95%] h-auto border border-gray-300 outline-0 m-auto rounded">
      <Header />
      <main className="min-h-screen bg-gray-100 px-4 py-8 flex flex-col items-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl">
          <h1 className="text-3xl font-bold mb-6 text-center">Profile Settings</h1>
          <UserProfile />
          <AddListingButton />
          <HeroCards />
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
