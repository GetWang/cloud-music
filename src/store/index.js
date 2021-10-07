import { configureStore } from "@reduxjs/toolkit";

import {
  playingReducer,
  playListReducer,
  currIndexReducer,
  volumeReducer,
  isFmOnReducer,
} from "./slices";

const store = configureStore({
  reducer: {
    playing: playingReducer,
    playList: playListReducer,
    currIndex: currIndexReducer,
    volume: volumeReducer,
    isFmOn: isFmOnReducer,
  },
});

export default store;
