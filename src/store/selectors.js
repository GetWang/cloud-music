export const selectPlaying = (state) => state.playing;

export const selectPlayList = (state) => state.playList;

export const selectCurrIndex = (state) => state.currIndex;

export const selectCurrSong = (state) => {
  return state.playList[state.currIndex] || null;
};

export const selectVolume = (state) => state.volume;

export const selectIsFmOn = (state) => state.isFmOn;
