import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./Player.scss";
import MiniPlayer from "../MiniPlayer/MiniPlayer";
import LargePlayer from "../LargePlayer/LargePlayer";
import PlayList from "../PlayList/PlayList";
import { selectPlayList } from "../../store/selectors";

export default function Player(props) {
  const [isListExpand, setIsListExpand] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  const playList = useSelector(selectPlayList);

  function handleListExpand(flag) {
    setIsListExpand(flag);
  }
  function handleExpand() {
    setIsExpand(true);
  }
  function handleCollapse() {
    setIsExpand(false);
  }

  let playListCls = isListExpand
    ? "player-play-list expand"
    : "player-play-list";

  return (
    <div className="music-player">
      <MiniPlayer
        onExpand={handleExpand}
        onListExpand={handleListExpand}
      ></MiniPlayer>
      <LargePlayer
        isExpand={isExpand}
        onCollapse={handleCollapse}
      ></LargePlayer>
      <section className={playListCls}>
        <PlayList list={playList}></PlayList>
      </section>
    </div>
  );
}
