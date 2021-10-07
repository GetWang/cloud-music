import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const playListSlice = createSlice({
  name: "playList",
  initialState,
  reducers: {
    setPlayList(state, action) {
      console.log("action.payload", action.payload);
      return action.payload;
    },
  },
});

export const { setPlayList } = playListSlice.actions;

export default playListSlice.reducer;
