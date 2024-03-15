import React from "react";
import MovieCard from "./MovieCard";

const MovieLists = ({ title, movies }) => {
  return (
    <div>
      <h1 className=" mt-4  mx-2 font-semibold text-white text-2xl">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className=" px-3 py-6 flex">
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
