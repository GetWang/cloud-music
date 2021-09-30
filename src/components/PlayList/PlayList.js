import React from "react";

import "./PlayList.scss";
import SvgIcon from "../SvgIcon/SvgIcon";

export default class PlayList extends React.Component {
  constructor(props) {
    super(props);
  }

  playSingle(song) {
    console.log("playSingle", song);
  }

  getPlayItemEls() {
    return this.props.list.map((item, index) => {
      return (
        <li className="play-item" key={`${index}_${item.id}`}>
          <span className="num">{index + 1}</span>
          <div className="song-cover">
            <img className="cover" src={item.coverUrl} alt=""></img>
            <div className="play-btn" onClick={(e) => this.playSingle(item)}>
              <SvgIcon iconName="play"></SvgIcon>
            </div>
          </div>
          <p className="song-name">{item.name}</p>
          <p className="author">{item.authorNames}</p>
          <span className="duration">{item.durationFormat}</span>
        </li>
      );
    });
  }

  render() {
    let playItemEls = this.getPlayItemEls();
    return (
      <div className="play-list-wrapper">
        <ul className="play-list">{playItemEls}</ul>
        <div className="load-more">加载更多</div>
      </div>
    );
  }
}
