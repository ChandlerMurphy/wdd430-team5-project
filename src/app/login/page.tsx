import React from "react";
import LoginForm from "../ui/login/loginForm";

const LoginPage = () => {
  return (
    <div className="w-full mb-10">
      <div className="w-[95%] h-auto border border-gray-300 outline-0 m-auto rounded">
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
