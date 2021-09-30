import React from "react";

import "./Player.scss";
import MiniPlayer from "../MiniPlayer/MiniPlayer";
import LargePlayer from "../LargePlayer/LargePlayer";

export default class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="music-player">
        <MiniPlayer></MiniPlayer>
      </div>
    );
  }
}
