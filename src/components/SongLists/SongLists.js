import React from "react";

import "./SongLists.scss";
import SvgIcon from "../SvgIcon/SvgIcon";

export default class SongLists extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleMore = this.handleMore.bind(this);
  }

  getListEls() {
    return this.props.list.map((item, index) => {
      let countDesc = this.formatCount(item.playCount);
      let id = item.id;
      let href = `/songListDetail/${id}`;
      return (
        <li className="list-item" key={`${index}_${id}`}>
          <a className="cover-wrapper" href={href}>
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
          </a>
          <p className="list-name">{item.name}</p>
        </li>
      );
    });
  }
  formatCount(count) {
    return count >= 10000 ? (count / 10000).toFixed(1) + "万" : count;
  }
  handlePlay(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log("handlePlay");
  }
  handleMore(e) {
    console.log("load more");
    this.props.onMore();
  }

  render() {
    let listEls = this.getListEls();
    let isMore = this.props.list.length < this.props.total;
    let cls = isMore ? "load-more show" : "load-more";
    return (
      <div className="song-lists-wrapper">
        <ul className="song-lists">{listEls}</ul>
        <div className={cls} onClick={this.handleMore}>
          加载更多
        </div>
      </div>
    );
  }
}
