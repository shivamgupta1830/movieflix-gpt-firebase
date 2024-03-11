import React from "react";
import logo from "../assets/netflix-logo.png";
import avatar from "../assets/Netflix-avatar.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  //For get user and its details from store
  const user = useSelector((store) => store.user);

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

  return (
    <div className=" w-full absolute bg-gradient-to-b from-black z-20 flex justify-between items-center">
      <img src={logo} alt="logo" className="w-[12%] px-4 pt-2"></img>

      {user && (
        <div className="flex justify-between gap-4 items-center px-6">
          <img src={avatar} alt="avatar" className="size-9"></img>
          <p className="bg-red-700 py-1 px-2 rounded-md hover:bg-red-600  text-white text-sm">
            {user.email}
          </p>
          <button
            onClick={handleSignout}
            className="bg-red-700 py-1 px-2 rounded-md hover:bg-red-600  text-white text-sm"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
