import { createSlice } from "@reduxjs/toolkit";

const initialState = 30;

const volumeSlice = createSlice({
  name: "volume",
  initialState,
  reducers: {
    setVolume(state, action) {
      console.log("setVolume", action.payload);
      return action.payload;
    },
  },
});

export const { setVolume } = volumeSlice.actions;

export default volumeSlice.reducer;
