import React from "react";

import { useSelector } from "react-redux";
import useGetTrailerVideoID from "../hooks/useGetTrailerVideoID";

const MainMovieVideo = ({ movieID }) => {
  useGetTrailerVideoID(movieID);

  const trailerID = useSelector((store) => store.movies?.moviesTrailerID);
  if (trailerID === null) return;

  return (
    <div className="sm:bg-black md:bg-transparent lg:bg-transparent sm:pt-24 md:pt-0">
      <iframe
        className="w-full aspect-video "
        src={`https://www.youtube.com/embed/${trailerID}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MainMovieVideo;
