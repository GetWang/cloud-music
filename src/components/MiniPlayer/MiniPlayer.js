import React from "react";

import "./MiniPlayer.scss";
import SvgIcon from "../SvgIcon/SvgIcon";

export default class MiniPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handleNextSong = this.handleNextSong.bind(this);
    this.handlePrevSong = this.handlePrevSong.bind(this);
    this.togglePlayList = this.togglePlayList.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.expandLargePlayer = this.expandLargePlayer.bind(this);
  }

  getPlayIconName() {
    return this.state.playing ? "pause" : "play";
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
  togglePlayList() {}
  handleMute() {}
  expandLargePlayer() {
    this.props.onExpand();
  }

  render() {
    let playIconName = this.getPlayIconName();
    return (
      <div className="mini-music-player">
        <div className="progress-bar">
          <div className="line-bar">
            <div className="circle"></div>
          </div>
        </div>
        <div className="info-controls">
          <div className="left-song-info">
            <img className="cover" src="" alt=""></img>
            <div className="desc">
              <p className="song-name">
                盛夏的果实盛夏的果实盛夏的果实盛夏的果实
              </p>
              <p className="author-name">莫文蔚</p>
            </div>
          </div>
          <div className="center-controls">
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
          <div className="right-controls">
            <div
              className="btn list"
              onClick={this.togglePlayList}
              title="播放列表"
            >
              <SvgIcon iconName="play-list"></SvgIcon>
            </div>
            <div className="btn mute" onClick={this.handleMute} title="">
              <SvgIcon iconName="volume"></SvgIcon>
            </div>
            <div className="volume-bar">
              <div className="line-bar">
                <div className="circle"></div>
              </div>
            </div>
            <div
              className="btn expand"
              onClick={this.expandLargePlayer}
              title="歌词"
            >
              <SvgIcon iconName="arrow-up"></SvgIcon>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
