import React from "react";

const GptSearchBar = () => {
  return (
    <div className="mx-auto w-[60%] pt-[6%]">
      <form
        className="bg-black p-4 flex gap-2 rounded-md"
        onClick={(e) => e.preventDefault()}
      >
        <input
          className="w-3/4  py-2 px-2 text-semibold text-lg text-white bg-slate-800 rounded-l-md"
          type="text"
          placeholder="What would you like to watch today?"
        />
        <button className="bg-red-700 hover:bg-red-600 w-1/4  py-2 px-2 text-white text-semibold text-lg rounded-r-md">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
