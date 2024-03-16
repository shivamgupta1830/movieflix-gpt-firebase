// import useGetTrailerVideoID from "../hooks/useGetTrailerVideoID";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularTvShows from "../hooks/usePopularTvShows";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTopRatedTvShows from "../hooks/useTopRatedTvShows";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchComponent from "./GptSearchComponent";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector(
    (store) => store.gptSearchFunction.showGptSearch
  );

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularTvShows();
  useTopRatedTvShows();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearchComponent />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
