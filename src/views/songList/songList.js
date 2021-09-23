import React from "react";

import "./songList.scss";
import SongListCategory from "../../components/SongListCategory/SongListCategory";
import SongLists from "../../components/SongLists/SongLists";

export default class SongList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id="song-list-page">
        <div className="category-wrapper">
          <SongListCategory></SongListCategory>
        </div>
        <SongLists></SongLists>
      </main>
    );
  }
}
