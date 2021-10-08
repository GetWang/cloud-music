import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Player.scss";
import MiniPlayer from "../MiniPlayer/MiniPlayer";
import LargePlayer from "../LargePlayer/LargePlayer";
import PlayList from "../PlayList/PlayList";
import {
  changePlaying,
  goPrevIndex,
  goNextIndex,
  setCurrIndex,
} from "../../store/slices";
import {
  selectPlaying,
  selectPlayList,
  selectCurrIndex,
  selectCurrSong,
} from "../../store/selectors";

export default function Player(props) {
  const dispatch = useDispatch();
  const [isListExpand, setIsListExpand] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  const playList = useSelector(selectPlayList);
  const playing = useSelector(selectPlaying);
  const currIndex = useSelector(selectCurrIndex);
  const currSong = useSelector(selectCurrSong);

  const len = playList.length;
  const isEmpty = len === 0;
  const playDisabled = isEmpty;
  const prevDisabled = isEmpty || currIndex === 0;
  const nextDisabled = isEmpty || currIndex === len - 1;

  function playSong() {
    if (playDisabled) {
      return;
    }
    dispatch(changePlaying(!playing));
  }
  function goPrevSong() {
    if (prevDisabled) {
      return;
    }
    dispatch(goPrevIndex());
    dispatch(changePlaying(true));
  }
  function goNextSong() {
    if (nextDisabled) {
      return;
    }
    dispatch(goNextIndex());
    dispatch(changePlaying(true));
  }
  function handleListExpand() {
    setIsListExpand((flag) => {
      return !flag;
    });
  }
  function handleExpand() {
    setIsExpand(true);
  }
  function handleCollapse() {
    setIsExpand(false);
  }

  const playerCls = currSong ? "music-player show" : "music-player";
  const playListCls = isListExpand
    ? "player-play-list expand"
    : "player-play-list";

  return (
    <div className={playerCls}>
      <MiniPlayer
        playing={playing}
        song={currSong}
        isListExpand={isListExpand}
        playDisabled={playDisabled}
        prevDisabled={prevDisabled}
        nextDisabled={nextDisabled}
        onPrev={goPrevSong}
        onNext={goNextSong}
        onPlay={playSong}
        onListExpand={handleListExpand}
        onExpand={handleExpand}
      ></MiniPlayer>
      <LargePlayer
        isExpand={isExpand}
        onCollapse={handleCollapse}
      ></LargePlayer>
      <section className={playListCls}>
        <PlayList list={playList}></PlayList>
      </section>
    </div>
  );
}
