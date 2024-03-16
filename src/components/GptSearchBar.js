import React from "react";

const GptSearchBar = () => {
  return (
    <div className="mx-auto w-[45%] pt-[6%]">
      <form
        className="bg-black p-4 flex gap-2 rounded-md bg-opacity-85"
        onClick={(e) => e.preventDefault()}
      >
        <input
          className="w-[80%]  p-2 text-semibold  text-white bg-slate-800 rounded-l-md"
          type="text"
          placeholder="What would you like to watch today?"
        />
        <button className="bg-red-700 hover:bg-red-600 w-[20%]  p-2 text-white text-semibold rounded-r-md">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
