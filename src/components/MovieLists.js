import React from "react";
import MovieCard from "./MovieCard";

const MovieLists = ({ title, movies }) => {
  return (
    <div className="lg:ml-4 lg:mt-4 sm:mr-6 lg:mr-0">
      <h1 className=" mt-4  font-semibold text-white  sm:text-lg md:text-xl lg:text-2xl">
        {title}
      </h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className=" py-6 flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard image_path={movie?.poster_path} key={movie?.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieLists;
