import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const isFmOnSlice = createSlice({
  name: "isFmOn",
  initialState,
  reducers: {
    changeFmOn(state, action) {
      console.log("action.payload", action.payload);
      return action.payload;
    },
  },
});

export const { changeFmOn } = isFmOnSlice.actions;

export default isFmOnSlice.reducer;
