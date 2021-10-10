import React from "react";

import "./LargePlayer.scss";
import SvgIcon from "../SvgIcon/SvgIcon";
import ProgressBar from "../ProgressBar/ProgressBar";
import { formatSongTime } from "../../common/js/util";

export default function LargePlayer(props) {
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
  function collapsePlayer() {
    props.onCollapse();
  }

  const playIconName = props.playing ? "pause" : "play";
  const playBtnTitle = props.playing ? "暂停" : "播放";
  const playBtnCls = props.playDisabled ? "btn play disabled" : "btn play";
  const prevBtnCls = props.prevDisabled ? "btn prev disabled" : "btn prev";
  const nextBtnCls = props.nextDisabled ? "btn next disabled" : "btn next";
  const expandCls = props.isExpand ? "expand" : "";
  const playerCls = `large-music-player${expandCls ? " " : ""}${expandCls}`;

  const song = props.song;
  const songName = song ? song.name : "";
  const authorNames = song ? song.authorNames : "";
  const coverUrl = song ? song.coverUrl : "";
  const timeFormat = formatSongTime(props.time);
  const durationFormat = song ? song.durationFormat : "";

  let lyric = song ? song.lyric : "";
  lyric = lyric.replace(/\[[^\[\]]*\] ?/g, "");
  const lyricList = lyric.split("\n");
  const lyricElList = lyricList.map((text, i) => {
    const cls = text ? "lyric-item" : "lyric-item empty";
    return (
      <li className={cls} key={i}>
        <p className="text">{text}</p>
      </li>
    );
  });
  const rightLyricEl = lyric ? (
    <div className="right-lyric">
      <ul className="lyric-list">{lyricElList}</ul>
    </div>
  ) : null;

  return (
    <div className={playerCls}>
      <div className="left-info-controls">
        <img className="cover" src={coverUrl} alt=""></img>
        <div className="desc-controls">
          <p className="song-name">{songName}</p>
          <p className="author-name">{authorNames}</p>
          <div className="progress-info">
            <span className="curr-time">{timeFormat}</span>
            <div className="progress-bar-wrapper">
              <ProgressBar
                rate={props.rate}
                height="4"
                barColor="#000"
                progressInfo={timeFormat}
                onRateChange={handleRateChange}
              ></ProgressBar>
            </div>
            <span className="duration">{durationFormat}</span>
          </div>
          <div className="btns">
            <div className={prevBtnCls} onClick={handlePrevSong} title="上一首">
              <SvgIcon iconName="prev"></SvgIcon>
            </div>
            <div
              className={playBtnCls}
              onClick={handlePlay}
              title={playBtnTitle}
            >
              <SvgIcon iconName={playIconName}></SvgIcon>
            </div>
            <div className={nextBtnCls} onClick={handleNextSong} title="下一首">
              <SvgIcon iconName="next"></SvgIcon>
            </div>
          </div>
        </div>
      </div>
      {rightLyricEl}
      <div className="collapse-btn" onClick={collapsePlayer}>
        <SvgIcon iconName="arrow-down"></SvgIcon>
      </div>
    </div>
  );
}
