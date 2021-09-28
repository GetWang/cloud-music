import React from "react";

import "./SongLists.scss";
import SvgIcon from "../SvgIcon/SvgIcon";

export default class SongLists extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  getListEls() {
    return this.props.list.map((item) => {
      let countDesc = this.formatCount(item.playCount);
      return (
        <div className="list-item" key={item.id}>
          <div className="cover-wrapper" onClick={this.handleEnter}>
            <img className="cover" src={item.coverUrl} alt=""></img>
            <div className="play-counts">
              <div className="icon">
                <SvgIcon iconName="play"></SvgIcon>
              </div>
              <span className="counts">{countDesc}</span>
            </div>
            <div className="play-btn" onClick={this.handlePlay} title="播放">
              <SvgIcon iconName="play"></SvgIcon>
            </div>
          </div>
          <p className="list-name">{item.name}</p>
        </div>
      );
    });
  }
  formatCount(count) {
    return count >= 10000 ? (count / 10000).toFixed(1) + "万" : count;
  }
  handlePlay(e) {
    e.stopPropagation();
    console.log("handlePlay");
  }
  handleEnter(e) {
    console.log("handleEnter");
  }

  render() {
    let listEls = this.getListEls();
    return <div className="song-lists">{listEls}</div>;
  }
}
