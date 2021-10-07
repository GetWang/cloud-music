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
  let [songs, setSongs] = useState([]);
  const playing = useSelector(selectPlaying);
  const currSong = useSelector(selectCurrSong);
  const isFmOn = useSelector(selectIsFmOn);
  let innerPlaying = isFmOn && playing;
  let innerCurrSong = isFmOn ? currSong : songs[0] || null;

  useEffect(() => {
    getSongs().then((data) => {
      setSongs(data.songs);
    });
  }, []);

  let handlePlay = function (e) {
    dispatch(changeFmOn(true));
    dispatch(setPlayList(simplifyList(songs)));
    dispatch(setCurrIndex(0));
    dispatch(changePlaying(!playing));
  };
  let handleNextSong = function () {};
  let handlePrevSong = function () {};

  let playIconName = innerPlaying ? "pause" : "play";
  let song = innerCurrSong;
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
            <div className="btn prev" onClick={handlePrevSong} title="上一首">
              <SvgIcon iconName="prev"></SvgIcon>
            </div>
            <div className="btn play" onClick={handlePlay}>
              <SvgIcon iconName={playIconName}></SvgIcon>
            </div>
            <div className="btn next" onClick={handleNextSong} title="下一首">
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
