import React from "react";

import "./songListDetail.scss";

export default class SongListDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id="song-list-detail-page">
        <div className="song-list-info">
          <div className="cover-wrapper">
            <img className="cover" src=""></img>
            <div className="play-btn"></div>
          </div>
          <div className="desc">
            <h1 className="list-name">听你爱的《官方回答》|时光雷达</h1>
            <p className="author">歌单 by 云音乐私人雷达</p>
            <p className="time-nums"> 最后更新于 2021年02月01日 · 30 首歌 </p>
            <p className="intro"> 你曾经挚爱的那些歌，现在还记得吗 </p>
            <div className="play-btn">
              <i className="icon"></i>
              <span className="text">播放</span>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
