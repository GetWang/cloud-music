import { createSlice } from "@reduxjs/toolkit";

const initialState = -1;

const currIndexSlice = createSlice({
  name: "currIndex",
  initialState,
  reducers: {
    goPrevIndex(state) {
      console.log("goPrevIndex", state - 1);
      return state - 1;
    },
    goNextIndex(state) {
      console.log("goNextIndex", state + 1);
      return state + 1;
    },
    setCurrIndex(state, action) {
      console.log("setCurrIndex", action.payload);
      return action.payload;
    },
  },
});

export const { goPrevIndex, goNextIndex, setCurrIndex } =
  currIndexSlice.actions;

export default currIndexSlice.reducer;
