import React from "react";
import LoginForm from "../ui/login/loginForm";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center py-50 flex-col rounded-2xl w-full m-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
