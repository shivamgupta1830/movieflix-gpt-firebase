import React, { useRef, useState } from "react";
import Header from "./Header";
import background from "../assets/netflix-background.jpg";
import {
  validateSignInFormData,
  validateSignUpFormData,
} from "../utils/formValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState();

  // handeling signin/signup toggle

  const signInHandle = () => {
    setIsSignUp(!isSignUp);

    // to remove input and error field data after toogle
    setErrorMsg(null);
    email.current.value = null;
    password.current.value = null;
  };

  // using ref hook for input values

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // handeling form validation before submitting

  const handleBtnClick = () => {
    //SIGN IN

    const validateSignInMsg = validateSignInFormData(
      email.current.value,
      password.current.value
    );

    if (!isSignUp) {
      setErrorMsg(validateSignInMsg);
      if (validateSignInMsg) return;

      if (validateSignInMsg === null) {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // const user = userCredential.user;
            // Signed in
          })
          .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            setErrorMsg(errorCode);
          });
      }

      return;
    }

    //SIGN UP
    const validateSignUpMsg = validateSignUpFormData(
      name.current.value,
      email.current.value,
      password.current.value
    );

    if (isSignUp) {
      setErrorMsg(validateSignUpMsg);

      if (validateSignUpMsg) return;

      if (validateSignInMsg === null) {
        //Sign up logic

        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // const user = userCredential.user;
            // Signed up

            name.current.value = null;
            email.current.value = null;
            password.current.value = null;
          })
          .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;

            setErrorMsg(errorCode);
          });
      }

      return;
    }
  };

  return (
    <div>
      <Header />
      <div className="fixed">
        <img
          src={background}
          alt="background"
          className="h-screen w-screen object-cover"
        ></img>
      </div>
      <form
        className=" sm:w-[80%] md:w-[60%] lg:w-[30%] text-center bg-black bg-opacity-90 absolute top-24 mx-auto  right-0 left-0 px-12 py-8  flex flex-col justify-start items-start rounded-md text-white"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2
          className="text-white font-bold lg:text-3xl sm:text-xl my-3"
          onSubmit={(e) => e.preventDefault()}
        >
          {isSignUp ? "Sign Up" : "Log In"}
        </h2>

        {isSignUp && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full bg-slate-800 rounded-md lg:placeholder:text-base sm:placeholder:text-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-3 w-full bg-slate-800 rounded-md lg:placeholder:text-base sm:placeholder:text-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-3 bg-slate-800 w-full rounded-md lg:placeholder:text-base sm:placeholder:text-sm"
        />
        <p className="font-semibold text-red-700 text-medium px-1 my-1">
          {errorMsg}
        </p>
        <button
          className="bg-red-700 w-full p-3 my-3 rounded-md hover:bg-red-600 font-normal text-base"
          onClick={handleBtnClick}
        >
          {isSignUp ? "Sign Up" : "Log In"}
        </button>
        <p className="text-white px-1 py-3 my-3 lg:text-base sm:text-sm ">
          {isSignUp ? "Already registered? " : "Not registerd? "}

          <span
            className="cursor-pointer hover:underline text-red-700 font-semibold"
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
