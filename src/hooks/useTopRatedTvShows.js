import { useEffect } from "react";
import { useDispatch } from "react-redux";
import API_OPTIONS from "../utils/constants";
import { addTopRatedTvShows } from "../utils/tvShowsSlice";

const useTopRatedTvShows = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTopRatedTvShows();
  }, []);

  const getTopRatedTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_OPTIONS
    );
    const response = await data.json();

    dispatch(addTopRatedTvShows(response.results));
  };
};

export default useTopRatedTvShows;
