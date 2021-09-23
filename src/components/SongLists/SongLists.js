import React from "react";

import "./SongLists.scss";

export default class SongLists extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="song-lists">
        <div className="list-item">
          <div className="cover-wrapper">
            <img className="cover" src=""></img>
            <div className="play-counts">
              <i className="icon"></i>
              <span className="counts">245.3万</span>
            </div>
            <div className="play-btn"></div>
          </div>
          <p className="list-name">
            很chill的RB歌单 节奏布鲁斯 欧美 很chill的RB歌单
          </p>
        </div>
      </div>
    );
  }
}
