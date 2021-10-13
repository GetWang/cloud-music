import React from "react";

import "./home.scss";
import DailyRecommend from "../../components/DailyRecommend/DailyRecommend";
import PersonalFM from "../../components/PersonalFM/PersonalFM";
import SongLists from "../../components/SongLists/SongLists";
import { getRecommendSongLists } from "../../api/personal";
import { OK_CODE } from "../../api/common";
import { createSongLists } from "../../common/js/songList";

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songLists: [],
    };
  }

  componentDidMount() {
    this.getSongLists();
  }

  getSongLists(params = {}) {
    let _params = {
      limit: params.limit || 10,
    };
    getRecommendSongLists(_params)
      .then((res) => {
        console.log("api-getRecommendSongLists res", res);
        if (res.code === OK_CODE) {
          this.handleSongLists(res.result);
        }
      })
      .catch((e) => {
        console.log("api-getRecommendSongLists error", e);
      });
  }
  handleSongLists(data) {
    let list = Array.isArray(data) ? data : [];
    let songLists = createSongLists(list);
    console.log("songLists", songLists);
    this.setState({
      songLists,
    });
  }

  render() {
    let songLists = this.state.songLists;
    return (
      <main id="home-page">
        <section className="for-you-music">
          <h1 className="title">For You</h1>
          <div className="content">
            <DailyRecommend></DailyRecommend>
            <PersonalFM></PersonalFM>
          </div>
        </section>
        <section className="recommend-song-list">
          <div className="title-wrapper">
            <h1 className="title">推荐歌单</h1>
            <a className="view-more" href="#/songList?category=推荐歌单">
              查看更多
            </a>
          </div>
          <SongLists list={songLists} total={songLists.length}></SongLists>
        </section>
      </main>
    );
  }
}
