import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const playingSlice = createSlice({
  name: "playing",
  initialState,
  reducers: {
    changePlaying(state, action) {
      return action.payload;
    },
  },
});

export const { changePlaying } = playingSlice.actions;

export default playingSlice.reducer;
