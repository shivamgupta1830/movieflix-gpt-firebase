import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import tvShowsReducer from "./tvShowsSlice";
import gptSearchReducer from "./gptSearchSlice";
import gptMoviesReducer from "./gptMoviesslice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    tvShows: tvShowsReducer,
    gptSearchFunction: gptSearchReducer,
    gptSearchMovies: gptMoviesReducer,
  },
});

export default appStore;
