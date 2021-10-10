export { default as playingReducer, changePlaying } from "./playingSlice";

export {
  default as playListReducer,
  setPlayList,
  replaceSongInPlayList,
} from "./playListSlice";

export {
  default as currIndexReducer,
  goPrevIndex,
  goNextIndex,
  setCurrIndex,
} from "./currIndexSlice";

export { default as currTimeReducer, setCurrTime } from "./currTimeSlice";

export { default as volumeReducer, setVolume } from "./volumeSlice";

export { default as isFmOnReducer, changeFmOn } from "./isFmOnSlice";
