import React from "react";
import { useSelector } from "react-redux";
import MovieLists from "./MovieLists";

const GptSearchSuggestions = () => {
  const { gptSearchResults, tmdbSearchResults } = useSelector(
    (store) => store?.gptSearchMovies
  );
  if (!gptSearchResults || !tmdbSearchResults) return;

  return (
    <div className=" max-w-[90%] mx-auto  bg-black p-4  gap-2 rounded-md bg-opacity-95">
      {gptSearchResults.map((movie, index) => (
        <MovieLists
          key={movie}
          title={movie}
          movies={tmdbSearchResults[index]}
        />
      ))}
    </div>
  );
};

export default GptSearchSuggestions;
