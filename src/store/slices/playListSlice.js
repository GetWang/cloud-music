import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const playListSlice = createSlice({
  name: "playList",
  initialState,
  reducers: {
    setPlayList(state, action) {
      return action.payload;
    },
  },
});

export const { setPlayList } = playListSlice.actions;

export default playListSlice.reducer;
