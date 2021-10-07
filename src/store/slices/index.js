export { default as playingReducer, changePlaying } from "./playingSlice";

export { default as playListReducer, setPlayList } from "./playListSlice";

export {
  default as currIndexReducer,
  goPrevIndex,
  goNextIndex,
  setCurrIndex,
} from "./currIndexSlice";

export { default as volumeReducer, setVolume } from "./volumeSlice";
