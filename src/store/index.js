import { configureStore } from "@reduxjs/toolkit";

import {
  playingReducer,
  playListReducer,
  currIndexReducer,
  currTimeReducer,
  volumeReducer,
  isFmOnReducer,
} from "./slices";

const store = configureStore({
  reducer: {
    playing: playingReducer,
    playList: playListReducer,
    currIndex: currIndexReducer,
    currTime: currTimeReducer,
    volume: volumeReducer,
    isFmOn: isFmOnReducer,
  },
});

export default store;
