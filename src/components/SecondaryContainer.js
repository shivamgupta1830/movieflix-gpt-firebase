import React from "react";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const tvShows = useSelector((store) => store.tvShows);

  return (
    <div className="bg-black ">
      <div className="lg:-mt-[24%] md:-mt-[24%]  sm:-mt-[30%] relative z-20 py-12 lg:pl-12 sm:pl-6 pr-1">
        <MovieLists title={"Popular Movies"} movies={movies?.popularMovies} />
        <MovieLists
          title={"Popular TV Shows"}
          movies={tvShows?.popularTvShows}
        />
        <MovieLists title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieLists title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieLists title={"Upcoming"} movies={movies?.upcomingMovies} />

        <MovieLists
          title={"Top Rated TV Shows"}
          movies={tvShows?.topRatedTvShows}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
