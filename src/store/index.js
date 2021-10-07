import { configureStore } from "@reduxjs/toolkit";

import {
  playingReducer,
  playListReducer,
  currIndexReducer,
  volumeReducer,
} from "./slices";

const store = configureStore({
  reducer: {
    playing: playingReducer,
    playList: playListReducer,
    currIndex: currIndexReducer,
    volume: volumeReducer,
  },
});

export default store;
