import React from "react";

const MainMovieDetails = ({ title, details }) => {
  return (
    <div className="  aspect-video flex flex-col justify-start gap-4 pt-56 px-16 absolute  text-white bg-gradient-to-r from-black ">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="w-[30%]">{details.slice(0, 250) + "..."}</p>
      <div>
        <button className="px-9 py-2 text-black bg-slate-100 hover:bg-slate-200 opacity-95 rounded-sm mr-2 text-lg font-semibold ">
          ▷ Play
        </button>
        <button className="px-6 py-2 bg-slate-600 hover:bg-slate-500 rounded-sm text-white text-lg font-semibold  opacity-95">
          ⓘ More info
        </button>
      </div>
    </div>
  );
};

export default MainMovieDetails;
