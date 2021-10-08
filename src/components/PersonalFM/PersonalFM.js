import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./PersonalFM.scss";
import SvgIcon from "../SvgIcon/SvgIcon";
import { getPersonalizedFmSongs } from "../../api/personal";
import { OK_CODE } from "../../api/common";
import { createSongs } from "../../common/js/song";
import { simplifyList } from "../../common/js/util";
import {
  changeFmOn,
  changePlaying,
  setPlayList,
  setCurrIndex,
} from "../../store/slices";
import {
  selectIsFmOn,
  selectPlaying,
  selectCurrIndex,
  selectCurrSong,
} from "../../store/selectors";

let getSongs = function () {
  return getPersonalizedFmSongs()
    .then((res) => {
      console.log("api-getPersonalizedFmSongs res", res);
      if (res.code === OK_CODE) {
        return handleSongs(res.data);
      }
    })
    .catch((e) => {
      console.log("api-getPersonalizedFmSongs error", e);
    });
};
let handleSongs = function (data) {
  let list = Array.isArray(data) ? data : [];
  let songs = createSongs(list);
  console.log("songs", songs);
  return {
    songs,
  };
};

export default function PersonalFM(props) {
  const dispatch = useDispatch();
  const [songs, setSongs] = useState([]);
  const playing = useSelector(selectPlaying);
  const currIndex = useSelector(selectCurrIndex);
  const currSong = useSelector(selectCurrSong);
  const isFmOn = useSelector(selectIsFmOn);

  const innerPlaying = isFmOn && playing;
  const innerCurrIndex = isFmOn ? currIndex : 0;
  const innerCurrSong = isFmOn ? currSong : songs[0] || null;
  const prevDisabled = innerCurrIndex === 0;
  const nextDisabled = innerCurrIndex === songs.length - 1;
  const songsSimplified = simplifyList(songs);

  useEffect(() => {
    getSongs().then((data) => {
      setSongs(data.songs);
    });
  }, []);

  let handlePlay = function () {
    if (!isFmOn) {
      dispatch(changeFmOn(true));
      dispatch(setPlayList(songsSimplified));
      dispatch(setCurrIndex(0));
    }
    dispatch(changePlaying(!innerPlaying));
  };
  let handlePrevSong = function () {
    if (prevDisabled) {
      return;
    }
    if (isFmOn) {
      const index = Math.max(0, innerCurrIndex - 1);
      dispatch(setCurrIndex(index));
      dispatch(changePlaying(true));
    }
  };
  let handleNextSong = function () {
    if (nextDisabled) {
      return;
    }
    if (!isFmOn) {
      dispatch(changeFmOn(true));
      dispatch(setPlayList(songsSimplified));
    }
    const index = Math.min(innerCurrIndex + 1, songs.length - 1);
    dispatch(setCurrIndex(index));
    dispatch(changePlaying(true));
  };

  const playIconName = innerPlaying ? "pause" : "play";
  const playBtnTitle = innerPlaying ? "暂停" : "播放";
  const prevBtnCls = prevDisabled ? "btn prev disabled" : "btn prev";
  const nextBtnCls = nextDisabled ? "btn next disabled" : "btn next";
  const song = innerCurrSong;
  let name = "";
  let coverUrl = "";
  let authorNames = "";
  if (song) {
    name = song.name;
    coverUrl = song.coverUrl;
    authorNames = song.authorNames;
  }
  return (
    <div className="personal-fm">
      <img className="cover" src={coverUrl} alt=""></img>
      <div className="desc-control">
        <h2 className="song-name">{name}</h2>
        <p className="singer-name">{authorNames}</p>
        <div className="control">
          <div className="btns">
            <div className={prevBtnCls} onClick={handlePrevSong} title="上一首">
              <SvgIcon iconName="prev"></SvgIcon>
            </div>
            <div className="btn play" onClick={handlePlay} title={playBtnTitle}>
              <SvgIcon iconName={playIconName}></SvgIcon>
            </div>
            <div className={nextBtnCls} onClick={handleNextSong} title="下一首">
              <SvgIcon iconName="next"></SvgIcon>
            </div>
          </div>
          <div className="fm-mark">
            <div className="icon">
              <SvgIcon iconName="fm"></SvgIcon>
            </div>
            <p className="text">私人FM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
