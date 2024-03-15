import React, { useEffect, useState } from "react";
import logo from "../assets/netflix-logo.png";
import avatar from "../assets/Netflix-avatar.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const [blackBg, setBlackBg] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) setBlackBg(true);
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
      className={`w-full fixed top-0  z-50 flex justify-between items-center py-1 transition-all bg-gradient-to-b from-black ${
        blackBg && "bg-black"
      }`}
    >
      <img src={logo} alt="logo" className="w-[12%] px-4 pt-2 "></img>

      {user && (
        <div className="flex justify-between gap-2 items-center px-6">
          <p className=" py-1 px-2 rounded-md text-white text-sm font-semibold">
            {user.email}
          </p>
          <img src={avatar} alt="avatar" className="size-9 rounded-sm"></img>
          <button
            onClick={handleSignout}
            className=" border border-white py-1 px-2 mx-2 rounded-md hover:bg-red-700 hover:border-red-700 text-white text-sm font-semibold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
