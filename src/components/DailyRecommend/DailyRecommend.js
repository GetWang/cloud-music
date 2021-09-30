import React from "react";

import "./DailyRecommend.scss";
import SvgIcon from "../SvgIcon/SvgIcon";
import { getDailyRecommendSongs } from "../../api/personal";
import { OK_CODE } from "../../api/common";
import { createSongs } from "../../common/js/song";

export default class DailyRecommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      recommendCover: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getSongs();
  }

  getSongs() {
    getDailyRecommendSongs()
      .then((res) => {
        console.log("api-getDailyRecommendSongs res", res);
        if (res.code === OK_CODE) {
          this.handleSongs(res.result);
        }
      })
      .catch((e) => {
        console.log("api-getDailyRecommendSongs error", e);
      });
  }
  handleSongs(data) {
    let list = Array.isArray(data)
      ? data.map((item) => {
          return item.song;
        })
      : [];
    let songs = createSongs(list);
    let coverUrl = "";
    console.log("songs", songs);
    for (let i = 0, len = songs.length; i < len; i++) {
      let url = songs[i].coverUrl;
      if (url) {
        coverUrl = url;
        break;
      }
    }
    this.setState({
      songs,
      recommendCover: coverUrl,
    });
  }
  handleClick(e) {
    console.log("play");
  }

  render() {
    return (
      <div className="daily-recommend">
        <img
          className="recommend-cover"
          src={this.state.recommendCover}
          alt=""
        ></img>
        <h2 className="left-title">每日推荐</h2>
        <div className="play-btn" onClick={this.handleClick}>
          <SvgIcon iconName="play"></SvgIcon>
        </div>
      </div>
    );
  }
}
