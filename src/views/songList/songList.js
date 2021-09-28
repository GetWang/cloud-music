import React from "react";

import "./songList.scss";
import SongListCategory from "../../components/SongListCategory/SongListCategory";
import SongLists from "../../components/SongLists/SongLists";

export default class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songLists: [],
    };
  }

  getSongLists(name) {
    console.log("name", name);
  }

  render() {
    return (
      <main id="song-list-page">
        <div className="category-wrapper">
          <SongListCategory
            onChoosed={(name) => {
              this.getSongLists(name);
            }}
          ></SongListCategory>
        </div>
        <SongLists list={this.state.songLists}></SongLists>
      </main>
    );
  }
}
