import React from "react";
import background from "../assets/background.jpg";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";

const GptSearchComponent = () => {
  return (
    <div>
      <div className="-z-50 fixed">
        <img
          src={background}
          className="h-screen w-screen object-cover"
          alt="background"
        ></img>
      </div>

      <GptSearchBar />
      <GptSearchSuggestions />
    </div>
  );
};

export default GptSearchComponent;
