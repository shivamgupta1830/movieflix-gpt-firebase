import React from "react";
import background from "../assets/netflix-background.jpg";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";

const GptSearchComponent = () => {
  return (
    <div>
      <div className="-z-50 absolute">
        <img src={background} alt="background"></img>
      </div>

      <GptSearchBar />
      <GptSearchSuggestions />
    </div>
  );
};

export default GptSearchComponent;
