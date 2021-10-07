import React from "react";

import "./Player.scss";
import MiniPlayer from "../MiniPlayer/MiniPlayer";
import LargePlayer from "../LargePlayer/LargePlayer";
import PlayList from "../PlayList/PlayList";

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isListExpand: false,
      isExpand: false,
    };
    this.handleListExpand = this.handleListExpand.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  handleListExpand(flag) {
    this.setState({
      isListExpand: flag,
    });
  }
  handleExpand() {
    this.setState({
      isExpand: true,
    });
  }
  handleCollapse() {
    this.setState({
      isExpand: false,
    });
  }

  render() {
    let playListCls = this.state.isListExpand
      ? "player-play-list expand"
      : "player-play-list";
    return (
      <div className="music-player">
        <MiniPlayer
          onExpand={this.handleExpand}
          onListExpand={this.handleListExpand}
        ></MiniPlayer>
        <LargePlayer
          isExpand={this.state.isExpand}
          onCollapse={this.handleCollapse}
        ></LargePlayer>
        <section className={playListCls}>
          <PlayList list={[]}></PlayList>
        </section>
      </div>
    );
  }
}
