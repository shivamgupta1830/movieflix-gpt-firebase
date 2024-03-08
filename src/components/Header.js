import React from "react";
import logo from "../assets/netflix-logo.png";

const Header = () => {
  return (
    <div className=" w-full absolute bg-gradient-to-b from-black z-20">
      <img src={logo} alt="logo" className="w-[16%] px-4 pt-2"></img>
    </div>
  );
};

export default Header;
