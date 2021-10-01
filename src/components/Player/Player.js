import React from "react";

import "./Player.scss";
import MiniPlayer from "../MiniPlayer/MiniPlayer";
import LargePlayer from "../LargePlayer/LargePlayer";

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: false,
    };
    this.handleExpand = this.handleExpand.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
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
    return (
      <div className="music-player">
        <MiniPlayer onExpand={this.handleExpand}></MiniPlayer>
        <LargePlayer
          isExpand={this.state.isExpand}
          onCollapse={this.handleCollapse}
        ></LargePlayer>
      </div>
    );
  }
}
