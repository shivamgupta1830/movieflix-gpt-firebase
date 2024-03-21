import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { toggleGptSearch } from "../utils/gptSearchSlice";

const Header = () => {
  const [blackBg, setBlackBg] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //For get user and its details from store
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector(
    (store) => store.gptSearchFunction?.showGptSearch
  );

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // removig user from store is happening atumatically from  onAuthStateChanged() finction of firebase in body component
        // Sign-out successful.

        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 75) setBlackBg(true);
      else setBlackBg(false);
    });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in

        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div
      className={`w-screen  fixed top-0  z-50  lg:py-2 md:py-2 sm:pb-3 lg:flex lg:flex-row lg:justify-between   md:flex  md:flex-row md:justify-between sm:flex sm:flex-col sm:justify-between sm:items-center sm:gap-1 transition-all bg-gradient-to-b from-black ${
        blackBg && "bg-black"
      }`}
    >
      <img
        src={logo}
        alt="logo"
        className="sm:w-[136px]  md:w-[148px] lg:w-[172px] px-4 pt-2"
      ></img>

      {user && (
        <div className="flex justify-between gap-2 items-center px-6 sm:justify-center">
          <button
            onClick={handleGptSearch}
            className="py-1 px-2 mx-2 rounded-md bg-violet-700 border border-violet-700 hover:bg-violet-600 text-white text-sm sm:text-xs  lg:text-base font-semibold"
          >
            {gptSearch ? "Home Page" : "GPT Search"}
          </button>
          <p className=" py-1 px-2 rounded-md text-white text-sm lg:text-base font-semibold md:hidden sm:hidden lg:inline-block">
            {user.email}
          </p>
          <img
            src={avatar}
            alt="avatar"
            className=" lg:size-9 md:size-7  rounded-sm md:inline-block sm:hidden lg:inline-block"
          ></img>
          <button
            onClick={handleSignout}
            className=" border border-white py-1 px-2 mx-2 rounded-md hover:bg-red-700 hover:border-red-700 text-white text-sm sm:text-xs lg:text-base  font-semibold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
