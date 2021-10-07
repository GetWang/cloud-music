import { createSlice } from "@reduxjs/toolkit";

const initialState = -1;

const currIndexSlice = createSlice({
  name: "currIndex",
  initialState,
  reducers: {
    goPrevIndex(state) {
      return state - 1;
    },
    goNextIndex(state) {
      return state + 1;
    },
    setCurrIndex(state, action) {
      console.log("action.payload", action.payload);
      return action.payload;
    },
  },
});

export const { goPrevIndex, goNextIndex, setCurrIndex } =
  currIndexSlice.actions;

export default currIndexSlice.reducer;
