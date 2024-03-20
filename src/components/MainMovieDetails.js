import React from "react";

const MainMovieDetails = ({ title, details }) => {
  return (
    <div className="h-[150%] flex flex-col justify-start gap-2 sm:pt-44 md:pt-44 lg:pt-72 lg:px-16 sm:px-6 absolute  text-white bg-gradient-to-r from-black  ">
      <h1 className="lg:text-4xl md:text-2xl sm:text-xl font-bold ">{title}</h1>
      <p className="w-[45%] sm:hidden lg:inline-block md:text-xs lg:text-base">
        {details.slice(0, 250) + "..."}
      </p>
      <div>
        <button className="lg:px-9 md:px-6 sm:px-4 lg:py-2 md:py-2 sm:py-1 text-black bg-slate-100 hover:bg-slate-200 opacity-95 rounded-sm mr-2 lg:text-lg md:text-sm sm:text-xs font-semibold ">
          ▷ Play
        </button>
        <button className="lg:px-6 md:px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded-sm text-white lg:text-lg md:text-sm sm:text-xs font-semibold  opacity-95 sm:hidden md:inline-block lg:inline-block">
          ⓘ More info
        </button>
      </div>
    </div>
  );
};

export default MainMovieDetails;
