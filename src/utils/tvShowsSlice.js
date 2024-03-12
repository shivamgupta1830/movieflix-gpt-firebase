import { createSlice } from "@reduxjs/toolkit";

const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState: {
    popularTvShows: null,
    topRatedTvShows: null,
  },
  reducers: {
    addPopularTvShows: (state, action) => {
      state.popularTvShows = action.payload;
    },
    addTopRatedTvShows: (state, action) => {
      state.topRatedTvShows = action.payload;
    },
  },
});

export const { addPopularTvShows, addTopRatedTvShows } = tvShowsSlice.actions;

export default tvShowsSlice.reducer;
