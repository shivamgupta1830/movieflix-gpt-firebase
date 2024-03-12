import useGetTrailerVideoID from "../hooks/useGetTrailerVideoID";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularTvShows from "../hooks/usePopularTvShows";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTopRatedTvShows from "../hooks/useTopRatedTvShows";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularTvShows();
  useTopRatedTvShows();

  return (
    <div>
      <Header />
      <MainContainer />
      {/* <SecondaryContainer /> */}
    </div>
  );
};

export default Browse;
