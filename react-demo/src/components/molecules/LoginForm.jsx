import React from "react";
import LabeledInput from "./LabeledInput";

const LoginForm = () => {
  return (
    <form className="w-[300px] flex flex-col gap-3 p-7 border rounded-md bg-white shadow-md">
      <h2 className="font-bold text-xl">Login</h2>
      <LabeledInput label="email" />
      <LabeledInput label="password" type="password" />
      <button className="hover:bg-blue-700 px-5 py-1 bg-blue-500 text-white">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
