import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const playListSlice = createSlice({
  name: "playList",
  initialState,
  reducers: {
    setPlayList(state, action) {
      console.log("setPlayList", action.payload);
      return action.payload;
    },
    replaceSongInPlayList(state, action) {
      const payload = action.payload;
      console.log("replaceSongInPlayList", payload);
      state.splice(payload.index, 1, payload.song);
    },
  },
});

export const { setPlayList, replaceSongInPlayList } = playListSlice.actions;

export default playListSlice.reducer;
