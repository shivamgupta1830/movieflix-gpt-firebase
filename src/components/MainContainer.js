import React from "react";
import MainMovieVideo from "./MainMovieVideo";
import MainMovieDetails from "./MainMovieDetails";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  if (popularMovies === null) return;

  // to create random index for main movie
  const randomIndex = Math.floor(Math.random() * 16);

  const mainMovie = popularMovies[randomIndex];
  const { title, id, overview } = mainMovie;

  return (
    <div>
      <MainMovieDetails title={title} details={overview} />
      <MainMovieVideo movieID={id} />
    </div>
  );
};

export default MainContainer;
