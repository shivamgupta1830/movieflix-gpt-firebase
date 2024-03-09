import React, { useRef, useState } from "react";
import Header from "./Header";
import background from "../assets/netflix-background.jpg";
import {
  validateSignInFormData,
  validateSignUpFormData,
} from "../utils/formValidation";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState(null);

  // handeling signin/signup toggle

  const signInHandle = () => {
    setIsSignUp(!isSignUp);

    // to remove input and error field data after toogle
    setError(null);
    email.current.value = null;
    password.current.value = null;
  };

  // using ref hook for input values

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // handeling form validation before submitting

  const handleBtnClick = () => {
    if (isSignUp) {
      const validateSignUp = validateSignUpFormData(
        name.current.value,
        email.current.value,
        password.current.value
      );
      setError(validateSignUp);
    }
    if (!isSignUp) {
      const validationSignIn = validateSignInFormData(
        email.current.value,
        password.current.value
      );
      setError(validationSignIn);
    }
  };

  return (
    <div>
      <Header />
      <div className="relative">
        <img src={background} alt="background"></img>
      </div>
      <form
        className=" w-[28%] text-center bg-black bg-opacity-90 absolute top-20 mx-auto right-0 left-0 px-12 py-8  flex flex-col justify-start items-start rounded-md text-white"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2
          className="text-white font-bold text-3xl my-3"
          onSubmit={(e) => e.preventDefault()}
        >
          {isSignUp ? "Sign Up" : "Log In"}
        </h2>

        {isSignUp && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full bg-slate-800 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-3 w-full bg-slate-800 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-3 bg-slate-800 w-full rounded-md"
        />
        <p className="font-semibold text-red-700 text-medium px-1 my-1">
          {error}
        </p>
        <button
          className="bg-red-700 w-full p-3 my-3 rounded-md hover:bg-red-600 font-normal"
          onClick={handleBtnClick}
        >
          {isSignUp ? "Sign Up" : "Log In"}
        </button>
        <p className="text-white p-3 my-3 ">
          {isSignUp ? "Already registered? " : "Not registerd? "}

          <span
            className="cursor-pointer hover:underline"
            onClick={signInHandle}
          >
            {isSignUp ? "Log In" : "Sign Up Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
