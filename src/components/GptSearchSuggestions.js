import React from "react";
import { useSelector } from "react-redux";
import MovieLists from "./MovieLists";
import background from "../assets/netflix-background.jpg";

const GptSearchSuggestions = () => {
  const { gptSearchResults, tmdbSearchResults } = useSelector(
    (store) => store?.gptSearchMovies
  );
  if (!gptSearchResults || !tmdbSearchResults) return;

  return (
    <div>
      {/* {tmdbSearchResults && (
        <div>
          <div className="-z-50 absolute top-[118%]">
            <img src={background} alt="background"></img>
          </div>
          <div className="-z-50 absolute top-[236%]">
            <img src={background} alt="background"></img>
          </div>
        </div>
      )} */}

      <div className=" max-w-[90%] mx-auto  bg-black p-4  gap-2 rounded-md bg-opacity-90 my-6">
        {gptSearchResults.map((movie, index) => (
          <MovieLists
            key={movie}
            title={movie}
            movies={tmdbSearchResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSearchSuggestions;
