import React from "react";

import "./PersonalFM.scss";
import SvgIcon from "../SvgIcon/SvgIcon";
import { getPersonalizedFmSongs } from "../../api/personal";
import { OK_CODE } from "../../api/common";
import { createSongs } from "../../common/js/song";

export default class PersonalFM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      currentSong: null,
      playing: false,
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handleNextSong = this.handleNextSong.bind(this);
    this.handlePrevSong = this.handlePrevSong.bind(this);
  }

  componentDidMount() {
    this.getSongs();
  }

  getPlayIconName() {
    return this.state.playing ? "pause" : "play";
  }

  getSongs() {
    getPersonalizedFmSongs()
      .then((res) => {
        console.log("api-getPersonalizedFmSongs res", res);
        if (res.code === OK_CODE) {
          this.handleSongs(res.data);
        }
      })
      .catch((e) => {
        console.log("api-getPersonalizedFmSongs error", e);
      });
  }
  handleSongs(data) {
    let list = Array.isArray(data) ? data : [];
    let songs = createSongs(list);
    let song = songs.length > 0 ? songs[0] : null;
    console.log("songs", songs);
    this.setState({
      songs,
      currentSong: song,
    });
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

  render() {
    let playIconName = this.getPlayIconName();
    let song = this.state.currentSong;
    let name = "";
    let coverUrl = "";
    let authorNames = "";
    if (song) {
      name = song.name;
      coverUrl = song.coverUrl;
      authorNames = song.authorNames;
    }
    return (
      <div className="personal-fm">
        <img className="cover" src={coverUrl} alt=""></img>
        <div className="desc-control">
          <h2 className="song-name">{name}</h2>
          <p className="singer-name">{authorNames}</p>
          <div className="control">
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
            <div className="fm-mark">
              <div className="icon">
                <SvgIcon iconName="fm"></SvgIcon>
              </div>
              <p className="text">私人FM</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
