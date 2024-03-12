import { useEffect } from "react";
import { useDispatch } from "react-redux";
import API_OPTIONS from "../utils/constants";
import { addMoviesTrailerID } from "../utils/moviesSlice";

const useGetTrailerVideoID = (movieID) => {
  const dispatch = useDispatch();

  const getTrailerVideoID = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
      API_OPTIONS
    );
    const response = await data.json();

    const filterTrailerResults = response.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailerID = filterTrailerResults.length
      ? filterTrailerResults[0].key
      : filterTrailerResults[1].key;

    dispatch(addMoviesTrailerID(trailerID));
  };

  useEffect(() => {
    getTrailerVideoID();
  }, []);
};
export default useGetTrailerVideoID;
