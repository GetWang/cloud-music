import React from "react";

import "./PlayList.scss";

export default class PlayList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="play-list-wrapper">
        <ul className="play-list">
          <li className="play-item">
            <span className="num">1</span>
            <div className="song-cover">
              <img className="cover" src=""></img>
              <i className="play-btn"></i>
            </div>
            <p className="song-name">把孤独当做晚餐 (原名：想死却又不敢) </p>
            <p className="author">G.E.M.邓紫棋</p>
            <span className="duration">4:08</span>
          </li>
          <li className="play-item">
            <span className="num">1</span>
            <div className="song-cover">
              <img className="cover" src=""></img>
              <i className="play-btn"></i>
            </div>
            <p className="song-name">把孤独当做晚餐 (原名：想死却又不敢) </p>
            <p className="author">G.E.M.邓紫棋</p>
            <span className="duration">4:08</span>
          </li>
        </ul>
        <div className="load-more">加载更多</div>
      </div>
    );
  }
}
