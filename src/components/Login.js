import React, { useState } from "react";
import Header from "./Header";
import background from "../assets/netflix-background.jpg";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const signInHandle = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="relative">
        <img src={background} alt="background"></img>
      </div>
      <form className=" w-[28%] text-center bg-black bg-opacity-90 absolute top-20 mx-auto right-0 left-0 px-12 py-16  flex flex-col justify-start items-start rounded-sm text-white">
        <h2 className="text-white font-bold text-3xl my-3">
          {isSignIn ? "Sign in" : "Log in"}
        </h2>

        {isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-3 w-full bg-slate-800 rounded-sm"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-3 w-full bg-slate-800 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-3 bg-slate-800 w-full rounded-sm"
        />
        <button className="bg-red-700 w-full py-2 px-3 my-3 rounded-sm hover:bg-red-600 font-medium">
          {isSignIn ? "Sign in" : "Log in"}
        </button>
        <p className="text-white p-2 my-3 ">
          {isSignIn ? "Already registered? " : "Not registerd? "}

          <span
            className="cursor-pointer hover:underline"
            onClick={signInHandle}
          >
            {isSignIn ? "Log in" : "Sign in Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
