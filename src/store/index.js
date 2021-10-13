import { configureStore } from "@reduxjs/toolkit";

import {
  themeReducer,
  playingReducer,
  playListReducer,
  currIndexReducer,
  currTimeReducer,
  volumeReducer,
  isFmOnReducer,
} from "./slices";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    playing: playingReducer,
    playList: playListReducer,
    currIndex: currIndexReducer,
    currTime: currTimeReducer,
    volume: volumeReducer,
    isFmOn: isFmOnReducer,
  },
});

export default store;
