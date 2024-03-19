import { createSlice } from "@reduxjs/toolkit";

const gptMoviesSlice = createSlice({
  name: "gptMovies",
  initialState: {
    gptSearchResults: null,
    tmdbSearchResults: null,
  },
  reducers: {
    addGptSearchResults: (state, action) => {
      state.gptSearchResults = action.payload;
    },
    addTmdbSearchResults: (state, action) => {
      state.tmdbSearchResults = action.payload;
    },
  },
});

export const { addGptSearchResults, addTmdbSearchResults } =
  gptMoviesSlice.actions;
export default gptMoviesSlice.reducer;
