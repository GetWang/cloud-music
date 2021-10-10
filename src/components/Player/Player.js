import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Player.scss";
import MiniPlayer from "../MiniPlayer/MiniPlayer";
import LargePlayer from "../LargePlayer/LargePlayer";
import PlayList from "../PlayList/PlayList";
import {
  changePlaying,
  goPrevIndex,
  goNextIndex,
  setCurrTime,
  setVolume,
} from "../../store/slices";
import {
  selectPlaying,
  selectPlayList,
  selectCurrIndex,
  selectCurrSong,
  selectCurrTime,
  selectVolume,
} from "../../store/selectors";

export default function Player(props) {
  const dispatch = useDispatch();
  const [prevVolume, setPrevVolume] = useState(0);
  const [isAudioReady, setAudioReady] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [isListExpand, setIsListExpand] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  const playList = useSelector(selectPlayList);
  const playing = useSelector(selectPlaying);
  const currIndex = useSelector(selectCurrIndex);
  const currSong = useSelector(selectCurrSong);
  const currTime = useSelector(selectCurrTime);
  const volume = useSelector(selectVolume);
  const audioRef = React.createRef();

  const songUrl = currSong ? currSong.url : "";
  const rate = currSong
    ? parseFloat(currTime / currSong.duration).toFixed(3)
    : 0;
  const volumeRate = parseFloat((volume / 100).toFixed(2));
  const len = playList.length;
  const isEmpty = len === 0;
  const playDisabled = isEmpty;
  const prevDisabled = isEmpty || currIndex === 0;
  const nextDisabled = isEmpty || currIndex === len - 1;

  useEffect(() => {
    audioRef.current.volume = volumeRate;
    setPrevVolume(volume);
  }, []);
  useEffect(() => {
    if (isAudioReady && playing) {
      audioRef.current.play();
    }
    if (isAudioReady && !playing) {
      audioRef.current.pause();
    }
  }, [isAudioReady, playing]);

  function handleAudioReady() {
    setAudioReady(true);
  }
  function updateCurrTime() {
    const ms = Math.floor(audioRef.current.currentTime * 1000);
    dispatch(setCurrTime(ms));
  }
  function handleAudioEnded() {
    if (nextDisabled) {
      dispatch(setCurrTime(0));
      dispatch(changePlaying(false));
      return;
    }
    goNextSong();
  }
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
    setAudioReady(false);
    dispatch(goPrevIndex());
    dispatch(setCurrTime(0));
    dispatch(changePlaying(true));
  }
  function goNextSong() {
    if (nextDisabled) {
      return;
    }
    setAudioReady(false);
    dispatch(goNextIndex());
    dispatch(setCurrTime(0));
    dispatch(changePlaying(true));
  }
  function handleRateChange(rate) {
    const s = Math.floor(rate * currSong.duration) / 1000;
    audioRef.current.currentTime = s;
    dispatch(changePlaying(true));
  }
  function handleVolRateChange(rate) {
    const vol = Math.floor(rate * 100);
    audioRef.current.volume = parseFloat(rate.toFixed(2));
    dispatch(setVolume(vol));
    setPrevVolume(vol);
    vol === 0 && setIsMute(false);
  }
  function handleMute() {
    let vol;
    if (isMute) {
      vol = prevVolume;
    } else {
      vol = 0;
    }
    audioRef.current.volume = parseFloat((vol / 100).toFixed(2));
    dispatch(setVolume(vol));
    setIsMute((flag) => {
      return !flag;
    });
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
        time={currTime}
        rate={rate}
        volume={volume}
        volumeRate={volumeRate}
        isMute={isMute}
        isListExpand={isListExpand}
        playDisabled={playDisabled}
        prevDisabled={prevDisabled}
        nextDisabled={nextDisabled}
        onPrev={goPrevSong}
        onNext={goNextSong}
        onPlay={playSong}
        onRateChange={handleRateChange}
        onVolRateChange={handleVolRateChange}
        onMute={handleMute}
        onListExpand={handleListExpand}
        onExpand={handleExpand}
      ></MiniPlayer>
      <LargePlayer
        playing={playing}
        song={currSong}
        time={currTime}
        rate={rate}
        isExpand={isExpand}
        playDisabled={playDisabled}
        prevDisabled={prevDisabled}
        nextDisabled={nextDisabled}
        onPrev={goPrevSong}
        onNext={goNextSong}
        onPlay={playSong}
        onRateChange={handleRateChange}
        onCollapse={handleCollapse}
      ></LargePlayer>
      <section className={playListCls}>
        <PlayList list={playList}></PlayList>
      </section>
      <audio
        className="song-audio"
        ref={audioRef}
        src={songUrl}
        onCanPlay={handleAudioReady}
        onTimeUpdate={updateCurrTime}
        onEnded={handleAudioEnded}
      ></audio>
    </div>
  );
}
