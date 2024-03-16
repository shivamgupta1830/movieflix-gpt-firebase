import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearchFunction",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGptSearch } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
