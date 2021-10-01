import React from "react";

import "./LargePlayer.scss";
import SvgIcon from "../SvgIcon/SvgIcon";

export default class LargePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handleNextSong = this.handleNextSong.bind(this);
    this.handlePrevSong = this.handlePrevSong.bind(this);
    this.collapsePlayer = this.collapsePlayer.bind(this);
  }

  getPlayIconName() {
    return this.state.playing ? "pause" : "play";
  }
  getExpandCls() {
    return this.props.isExpand ? "expand" : "";
  }

  handlePlay(e) {
    this.setState((state) => {
      return {
        playing: !state.playing,
      };
    });
  }
  handleNextSong() {}
  handlePrevSong() {}
  collapsePlayer() {
    this.props.onCollapse();
  }

  render() {
    let playIconName = this.getPlayIconName();
    let expandCls = this.getExpandCls();
    let playerCls = `large-music-player${expandCls ? " " : ""}${expandCls}`;
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
          <img className="cover" src="" alt=""></img>
          <div className="desc-controls">
            <p className="song-name">
              盛夏的果实盛夏的果实盛夏的果实盛夏的果实
            </p>
            <p className="author-name">
              莫文蔚莫文蔚莫文蔚莫文蔚莫文蔚莫文蔚莫文蔚
            </p>
            <div className="progress-info">
              <span className="curr-time">1:30</span>
              <div className="progress-bar">
                <div className="line-bar">
                  <div className="circle"></div>
                </div>
              </div>
              <span className="duration">4:07</span>
            </div>
            <div className="btns">
              <div
                className="btn prev"
                onClick={this.handlePrevSong}
                title="上一首"
              >
                <SvgIcon iconName="prev"></SvgIcon>
              </div>
              <div className="btn play" onClick={this.handlePlay}>
                <SvgIcon iconName={playIconName}></SvgIcon>
              </div>
              <div
                className="btn next"
                onClick={this.handleNextSong}
                title="下一首"
              >
                <SvgIcon iconName="next"></SvgIcon>
              </div>
            </div>
          </div>
        </div>
        <div className="right-lyric">
          <ul className="lyric-list">{list}</ul>
        </div>
        <div className="collapse-btn" onClick={this.collapsePlayer}>
          <SvgIcon iconName="arrow-down"></SvgIcon>
        </div>
      </div>
    );
  }
}
