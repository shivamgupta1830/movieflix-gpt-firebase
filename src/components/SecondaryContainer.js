import React from "react";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const tvShows = useSelector((store) => store.tvShows);

  return (
    <div className="bg-black ">
      <div className="-mt-64 flex flex-col justify-center relative z-50 p-14">
        <MovieLists title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieLists title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieLists title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieLists title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieLists
          title={"Popular TV Shows"}
          movies={tvShows.popularTvShows}
        />
        <MovieLists
          title={"Top Rated TV Shows"}
          movies={tvShows.topRatedTvShows}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
