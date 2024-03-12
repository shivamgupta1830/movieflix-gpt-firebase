import { useEffect } from "react";
import { useDispatch } from "react-redux";
import API_OPTIONS from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const response = await data.json();

    dispatch(addTopRatedMovies(response.results));
  };
};

export default useTopRatedMovies;
