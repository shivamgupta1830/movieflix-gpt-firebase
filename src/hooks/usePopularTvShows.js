import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularTvShows } from "../utils/tvShowsSlice";

const usePopularTvShows = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getPopularTvShows();
  }, []);

  const getPopularTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_OPTIONS
    );
    const response = await data.json();

    dispatch(addPopularTvShows(response.results));
  };
};

export default usePopularTvShows;
