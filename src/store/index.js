import { configureStore } from "@reduxjs/toolkit";

import { playingReducer } from "./slices";

const store = configureStore({
  reducer: {
    playing: playingReducer,
  },
});

export default store;
