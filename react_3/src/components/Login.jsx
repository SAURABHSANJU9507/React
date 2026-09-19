import React from "react";

const Login = ({ setToggle }) => {
  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col gap-4  ">
      <h1 className="flex justify-center text-xl font-medium items-center">
        Login
      </h1>
      <form className="flex flex-col gap-4" action="">
        <input
          required
          className="p-2 border border-grey-400 rounded"
          type="text"
          placeholder="Email"
        />

        <input
          required
          className="p-2 border border-grey-400 rounded"
          type="password"
          placeholder="Password"
        />
        <button className="bg-blue-800 text-white cursor-pointer rounded p-2">
          Login
        </button>
      </form>
      <p>
        Did't have an Account?{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          className="text-blue-600 cursor-pointer"
        >
          Register here
        </span>
      </p>
    </div>
  );
};

export default Login;
