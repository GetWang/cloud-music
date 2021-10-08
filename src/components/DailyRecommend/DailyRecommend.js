import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./DailyRecommend.scss";
import SvgIcon from "../SvgIcon/SvgIcon";
import { getDailyRecommendSongs } from "../../api/personal";
import { OK_CODE } from "../../api/common";
import { createSongs } from "../../common/js/song";
import { simplifyList } from "../../common/js/util";
import {
  changePlaying,
  setPlayList,
  setCurrIndex,
  setCurrTime,
} from "../../store/slices";

let getSongs = function () {
  return getDailyRecommendSongs()
    .then((res) => {
      console.log("api-getDailyRecommendSongs res", res);
      if (res.code === OK_CODE) {
        return handleSongs(res.result);
      }
    })
    .catch((e) => {
      console.log("api-getDailyRecommendSongs error", e);
      return {
        error: true,
      };
    });
};
let handleSongs = function (data) {
  let list = Array.isArray(data)
    ? data.map((item) => {
        return item.song;
      })
    : [];
  let songs = createSongs(list);
  let coverUrl = "";
  console.log("songs", songs);
  for (let i = 0, len = songs.length; i < len; i++) {
    let url = songs[i].coverUrl;
    if (url) {
      coverUrl = url;
      break;
    }
  }
  return {
    songs,
    recommendCover: coverUrl,
  };
};

export default function DailyRecommend(props) {
  const dispatch = useDispatch();
  let [songs, setSongs] = useState([]);
  let [recommendCover, setRecommendCover] = useState("");

  useEffect(() => {
    getSongs().then((data) => {
      if (data.error) {
        return;
      }
      setSongs(data.songs);
      setRecommendCover(data.recommendCover);
    });
  }, []);

  let handleClick = function (e) {
    console.log("play");
    dispatch(setPlayList(simplifyList(songs)));
    dispatch(setCurrIndex(0));
    dispatch(setCurrTime(0));
    dispatch(changePlaying(true));
  };

  return (
    <div className="daily-recommend">
      <img className="recommend-cover" src={recommendCover} alt=""></img>
      <h2 className="left-title">每日推荐</h2>
      <div className="play-btn" onClick={handleClick}>
        <SvgIcon iconName="play"></SvgIcon>
      </div>
    </div>
  );
}
