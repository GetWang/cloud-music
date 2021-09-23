import React from "react";

import "./SongListCategory.scss";

export default class SongListCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="song-list-category">
        <ul className="show-list">
          <li className="show-item">全部</li>
          <li className="show-item">推荐歌单</li>
          <li className="show-item">欧美</li>
          <li className="show-item">流行</li>
          <li className="show-item">说唱</li>
          <li className="show-item">ACG</li>
          <li className="show-item">摇滚</li>
          <li className="show-item">电子</li>
          <li className="show-item">···</li>
        </ul>
        <ul className="category-list">
          <li className="category-item">
            <p className="category-name">语种</p>
            <ul className="sub-list">
              <li className="sub-item">
                <span className="name">华语</span>
              </li>
              <li className="sub-item">
                <span className="name">欧美</span>
              </li>
              <li className="sub-item">
                <span className="name">日语</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
