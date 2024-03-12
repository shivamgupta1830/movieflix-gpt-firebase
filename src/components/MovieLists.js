import React from "react";
import MovieCard from "./MovieCard";

const MovieLists = ({ title, movies }) => {
  return (
    <div>
      <h1 className="mt-12 mb-6 font-semibold text-white text-3xl">{title}</h1>
      <div className="">
        <div className=" w-[225%] flex gap-3 ">
          {movies &&
            movies.map((movie) => (
              <MovieCard image_path={movie.poster_path} key={movie.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieLists;
