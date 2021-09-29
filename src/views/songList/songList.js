import React from "react";

import "./songList.scss";
import SongListCategory, {
  ALL_CATEGORY,
  RECOM_CATEGORY,
} from "../../components/SongListCategory/SongListCategory";
import SongLists from "../../components/SongLists/SongLists";
import { getRecommendSongLists } from "../../api/personal";
import { getSongListsByCategory } from "../../api/songList";
import { OK_CODE } from "../../api/common";
import { createSongLists } from "../../common/js/songList";

export default class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songLists: [],
      total: 0,
    };
    this.currCateName = ALL_CATEGORY;
    this.page = 1;
    this.pageSize = 30;
    this.getSongLists = this.getSongLists.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.getSongListsByCate();
  }

  getSongLists(name) {
    console.log("name", name);
    this.currCateName = name;
    this.page = 1;
    if (name === RECOM_CATEGORY) {
      this.getRecomSongLists();
    } else {
      this.getSongListsByCate();
    }
  }
  loadMore() {
    this.page++;
    this.getSongListsByCate();
  }
  getSongListsByCate(params = {}) {
    console.log("page", this.page);
    let limit = this.pageSize;
    let _params = {
      cat: this.currCateName,
      // hot/new
      order: params.order || "hot",
      limit,
      offset: (this.page - 1) * limit,
    };
    getSongListsByCategory(_params)
      .then((res) => {
        console.log("api-getSongListsByCategory res", res);
        if (res.code === OK_CODE) {
          this.handleSongLists(res.playlists, res.total);
        }
      })
      .catch((e) => {
        console.log("api-getSongListsByCategory error", e);
      });
  }
  getRecomSongLists(params = {}) {
    console.log("page", this.page);
    let _params = {
      limit: params.limit || 30,
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
  handleSongLists(data, total) {
    let list = Array.isArray(data) ? data : [];
    let songLists = createSongLists(list);
    console.log("songLists", songLists);
    total = total || songLists.length;
    console.log("total", total);
    this.setState((state) => {
      let arr = this.page === 1 ? songLists : state.songLists.concat(songLists);
      return {
        songLists: arr,
        total,
      };
    });
  }

  render() {
    return (
      <main id="song-list-page">
        <div className="category-wrapper">
          <SongListCategory onChoosed={this.getSongLists}></SongListCategory>
        </div>
        <SongLists
          list={this.state.songLists}
          total={this.state.total}
          onMore={this.loadMore}
        ></SongLists>
      </main>
    );
  }
}
