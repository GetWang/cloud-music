import React from "react";

import "./LargePlayer.scss";
import SvgIcon from "../SvgIcon/SvgIcon";

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
  const durationFormat = song ? song.durationFormat : "";

  let list = [];
  let item;
  for (let i = 0; i < 10; i++) {
    if (i === 2) {
      item = (
        <li className="lyric-item current" key={i}>
          <p className="text">这盛夏的果实</p>
        </li>
      );
    } else {
      item = (
        <li className="lyric-item" key={i}>
          <p className="text">这盛夏的果实 回忆里寂寞的香气</p>
        </li>
      );
    }
    list.push(item);
  }

  return (
    <div className={playerCls}>
      <div className="left-info-controls">
        <img className="cover" src={coverUrl} alt=""></img>
        <div className="desc-controls">
          <p className="song-name">{songName}</p>
          <p className="author-name">{authorNames}</p>
          <div className="progress-info">
            <span className="curr-time">1:30</span>
            <div className="progress-bar">
              <div className="line-bar">
                <div className="circle"></div>
              </div>
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
      <div className="right-lyric">
        <ul className="lyric-list">{list}</ul>
      </div>
      <div className="collapse-btn" onClick={collapsePlayer}>
        <SvgIcon iconName="arrow-down"></SvgIcon>
      </div>
    </div>
  );
}
