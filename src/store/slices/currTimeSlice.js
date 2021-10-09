import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const currTimeSlice = createSlice({
  name: "currTime",
  initialState,
  reducers: {
    setCurrTime(state, action) {
      // console.log("setCurrTime", action.payload);
      return action.payload;
    },
  },
});

export const { setCurrTime } = currTimeSlice.actions;

export default currTimeSlice.reducer;
