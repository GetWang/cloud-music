import React, { useState } from "react";

import "./MiniPlayer.scss";
import SvgIcon from "../SvgIcon/SvgIcon";
import ProgressBar from "../ProgressBar/ProgressBar";
import { formatSongTime } from "../../common/js/util";

export default function MiniPlayer(props) {
  const [isMute, setIsMute] = useState(false);

  function handlePlay() {
    props.onPlay();
  }
  function handlePrevSong() {
    props.onPrev();
  }
  function handleNextSong() {
    props.onNext();
  }
  function handleRateChange(rate) {
    props.onRateChange(rate);
  }
  function togglePlayList() {
    props.onListExpand();
  }
  function handleMute() {
    setIsMute((flag) => {
      return !flag;
    });
  }
  function expandLargePlayer() {
    props.onExpand();
  }

  const playIconName = props.playing ? "pause" : "play";
  const playBtnTitle = props.playing ? "暂停" : "播放";
  const playBtnCls = props.playDisabled ? "btn play disabled" : "btn play";
  const prevBtnCls = props.prevDisabled ? "btn prev disabled" : "btn prev";
  const nextBtnCls = props.nextDisabled ? "btn next disabled" : "btn next";
  const playListCls = props.isListExpand ? "btn list expand" : "btn list";
  const muteIconName = isMute ? "volume-mute" : "volume";

  const song = props.song;
  const songName = song ? song.name : "";
  const authorNames = song ? song.authorNames : "";
  const coverUrl = song ? song.coverUrl : "";
  const timeFormat = formatSongTime(props.time);

  return (
    <div className="mini-music-player">
      <ProgressBar
        rate={props.rate}
        height="2"
        barColor="#335eea"
        progressInfo={timeFormat}
        onRateChange={handleRateChange}
      ></ProgressBar>
      {/* <div className="progress-bar">
        <div className="line-bar">
          <div className="circle" title={timeFormat}></div>
        </div>
      </div> */}
      <div className="info-controls">
        <div className="left-song-info">
          <img
            className="cover"
            src={coverUrl}
            alt=""
            onClick={expandLargePlayer}
          ></img>
          <div className="desc">
            <p className="song-name" onClick={expandLargePlayer}>
              {songName}
            </p>
            <p className="author-name">{authorNames}</p>
          </div>
        </div>
        <div className="center-controls">
          <div className={prevBtnCls} onClick={handlePrevSong} title="上一首">
            <SvgIcon iconName="prev"></SvgIcon>
          </div>
          <div className={playBtnCls} onClick={handlePlay} title={playBtnTitle}>
            <SvgIcon iconName={playIconName}></SvgIcon>
          </div>
          <div className={nextBtnCls} onClick={handleNextSong} title="下一首">
            <SvgIcon iconName="next"></SvgIcon>
          </div>
        </div>
        <div className="right-controls">
          <div
            className={playListCls}
            onClick={togglePlayList}
            title="播放列表"
          >
            <SvgIcon iconName="play-list"></SvgIcon>
          </div>
          <div className="btn mute" onClick={handleMute} title="">
            <SvgIcon iconName={muteIconName}></SvgIcon>
          </div>
          <div className="volume-bar">
            <div className="line-bar">
              <div className="circle"></div>
            </div>
          </div>
          <div className="btn expand" onClick={expandLargePlayer} title="歌词">
            <SvgIcon iconName="arrow-up"></SvgIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
