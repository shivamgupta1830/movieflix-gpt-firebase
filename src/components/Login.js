import React from "react";
import Header from "./Header";
import background from "../assets/netflix-background.jpg";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="relative">
        <img src={background} alt="background"></img>
      </div>
      <form className=" w-[30%] h-auto text-center bg-black opacity-95 absolute top-28 mx-auto right-0 left-0 px-12 py-20 flex flex-col justify-start items-start rounded-sm">
        <h2 className="text-white font-medium text-lg my-2">Sign In</h2>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-11/12 bg-slate-800 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 bg-slate-800 w-11/12 rounded-sm"
        />
        <button className="bg-red-700 py-2 px-3 my-2 rounded-sm hover:bg-red-600 font-medium">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
