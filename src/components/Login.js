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
      <form className=" w-[28%] text-center bg-black bg-opacity-90 absolute top-20 mx-auto right-0 left-0 px-12 py-10  flex flex-col justify-start items-start rounded-md text-white" onSubmit={(e)=>{e.preventDefault()}}>
        <h2 className="text-white font-bold text-3xl my-3">
          {isSignIn ? "Sign In" : "Log In"}
        </h2>

        {isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full bg-slate-800 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-3 w-full bg-slate-800 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-3 bg-slate-800 w-full rounded-md"
        />
        <button
          className="bg-red-700 w-full p-3 my-3 rounded-md hover:bg-red-600 font-medium"
          onClick={() => {}}
        >
          {isSignIn ? "Sign In" : "Log In"}
        </button>
        <p className="text-white p-3 my-3 ">
          {isSignIn ? "Already registered? " : "Not registerd? "}

          <span
            className="cursor-pointer hover:underline"
            onClick={signInHandle}
          >
            {isSignIn ? "Log In" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
