import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./PlayList.scss";
import SvgIcon from "../SvgIcon/SvgIcon";
import { simplifyList } from "../../common/js/util";
import {
  changeFmOn,
  changePlaying,
  setPlayList,
  setCurrIndex,
  setCurrTime,
} from "../../store/slices";
import { selectPlaying, selectCurrSong } from "../../store/selectors";

export default function PlayList(props) {
  const dispatch = useDispatch();
  const playing = useSelector(selectPlaying);
  const currSong = useSelector(selectCurrSong);
  const currSongId = currSong ? currSong.id : 0;

  function getPlayItemEls() {
    return props.list.map((item, index) => {
      const id = item.id;
      const flag1 = id === currSongId;
      const flag2 = flag1 && playing;
      const cls = flag1 ? "play-item current" : "play-item";
      const playIconName = flag2 ? "pause" : "play";
      const playBtnTitle = flag2 ? "暂停" : "播放";
      return (
        <li className={cls} key={`${index}_${id}`}>
          <span className="num">{index + 1}</span>
          <div className="song-cover">
            <img className="cover" src={item.coverUrl} alt=""></img>
            <div
              className="play-btn"
              onClick={() => playSingle(item)}
              title={playBtnTitle}
            >
              <SvgIcon iconName={playIconName}></SvgIcon>
            </div>
          </div>
          <p className="song-name">{item.name}</p>
          <p className="author">{item.authorNames}</p>
          <span className="duration">{item.durationFormat}</span>
        </li>
      );
    });
  }

  function playSingle(song) {
    console.log("playSingle", song);
    if (song.id === currSongId) {
      dispatch(changePlaying(!playing));
    } else {
      dispatch(changeFmOn(false));
      dispatch(setPlayList(simplifyList([song])));
      dispatch(setCurrIndex(0));
      dispatch(setCurrTime(0));
      dispatch(changePlaying(true));
    }
  }

  let playItemEls = getPlayItemEls();

  return (
    <div className="play-list-wrapper">
      <ul className="play-list">{playItemEls}</ul>
      {/* <div className="load-more">加载更多</div> */}
    </div>
  );
}
