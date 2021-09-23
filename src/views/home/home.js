import React from "react";
import axios from "axios";

import "./home.scss";
import DailyRecommend from "../../components/DailyRecommend/DailyRecommend";
import PersonalFM from "../../components/PersonalFM/PersonalFM";
import SongLists from "../../components/SongLists/SongLists";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   axios
  //     .get("http://localhost:4000/personalized")
  //     .then((res) => {
  //       console.log("res", res.data);
  //     })
  //     .catch((e) => {
  //       console.log("e", e);
  //     });
  // }

  render() {
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
            <a className="view-more" href="/songList">
              查看更多
            </a>
          </div>
          <SongLists></SongLists>
        </section>
      </main>
    );
  }
}
