import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import openai from "../utils/openAI";
import React, { useRef } from "react";
import {
  addGptSearchResults,
  addTmdbSearchResults,
} from "../utils/gptMoviesslice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const tmdbMovieSearch = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const response = await data.json();

    return response.results;
  };

  const handleSearchClick = async () => {
    const query =
      "Act as amovie recommendation system and suggest some movies for query :" +
      searchText.current.value +
      ". only give me names of 6 movies, comma seperated like example result given ahead. Example result: Sholay, Golmaal, Swadesh, Animal, Don, Laila majnoo ";

    const gptSearchResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    // if(!gptSearchResults.choices) {TRY ERORR HAndelling}
    const gptResultArray =
      gptSearchResults.choices[0].message.content.split(",");

    dispatch(addGptSearchResults(gptResultArray));

    const tmdbPromiseArray = gptResultArray.map((movie) =>
      tmdbMovieSearch(movie)
    );

    const tmdbResults = await Promise.all(tmdbPromiseArray);
    dispatch(addTmdbSearchResults(tmdbResults));
  };

  return (
    <div className="mx-auto w-[45%] pt-[6%]">
      <form
        className="bg-black p-4 flex gap-2 rounded-md bg-opacity-90 mb-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="w-[80%] p-2 text-semibold  text-white bg-slate-800 rounded-l-md"
          type="text"
          placeholder="What would you like to watch today?"
          ref={searchText}
        />
        <button
          className="bg-red-700 hover:bg-red-600 w-[20%]  p-2 text-white text-semibold rounded-r-md"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
