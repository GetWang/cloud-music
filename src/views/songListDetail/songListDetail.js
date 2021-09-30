import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./songListDetail.scss";
import PlayList from "../../components/PlayList/PlayList";
import SvgIcon from "../../components/SvgIcon/SvgIcon";
import { getSongListDetail } from "../../api/songList";
import { getSongDetail } from "../../api/song";
import { OK_CODE } from "../../api/common";
import { createSongLists } from "../../common/js/songList";
import { createSongs } from "../../common/js/song";

function getSListDetail(params = {}) {
  let _params = {
    id: params.id,
  };
  return getSongListDetail(_params)
    .then((res) => {
      console.log("api-getSongListDetail res", res);
      if (res.code === OK_CODE) {
        return handleSListDetail(res.playlist);
      }
    })
    .catch((e) => {
      console.log("api-getSongListDetail error", e);
    });
}
function handleSListDetail(data) {
  let detailIns = createSongLists([data])[0];
  let idList = data.trackIds.slice(0, 10).map((item) => {
    return item.id;
  });
  console.log("ins", detailIns);
  console.log("idList", idList);
  return {
    ins: detailIns,
    ids: idList.join(","),
  };
}

function getSDetail(params = {}) {
  let _params = {
    ids: params.ids,
  };
  return getSongDetail(_params)
    .then((res) => {
      console.log("api-getSongDetail res", res);
      if (res.code === OK_CODE) {
        return handleSDetail(res.songs);
      }
    })
    .catch((e) => {
      console.log("api-getSongDetail error", e);
    });
}
function handleSDetail(data) {
  let list = Array.isArray(data) ? data : [];
  let songs = createSongs(data);
  console.log("songs", songs);
  return songs;
}

export default function SongListDetailView(props) {
  let { id } = useParams();
  let [songLDetail, setSongLDetail] = useState(null);
  let [songs, setSongs] = useState([]);

  useEffect(() => {
    getSListDetail({ id })
      .then((res) => {
        setSongLDetail(res.ins);
        return getSDetail({ ids: res.ids });
      })
      .then((res) => {
        setSongs(res);
      });
  }, []);

  let coverUrl = songLDetail ? songLDetail.coverUrl : "";
  let name = songLDetail ? songLDetail.name : "";
  let desc = songLDetail ? songLDetail.description : "";
  let songCount = songLDetail ? songLDetail.songCount : 0;
  let timeNums = `最后更新于 2021年02月01日 · ${songCount} 首歌`;

  return (
    <main id="song-list-detail-page">
      <div className="song-list-info">
        <div className="cover-wrapper">
          <img className="cover" src={coverUrl} alt=""></img>
          <div className="play-btn">
            <SvgIcon iconName="play"></SvgIcon>
          </div>
        </div>
        <div className="desc">
          <h1 className="list-name">{name}</h1>
          <p className="author">歌单 by 云音乐私人雷达</p>
          <p className="time-nums">{timeNums}</p>
          <p className="intro">{desc}</p>
          <div className="play-btn">
            <div className="icon">
              <SvgIcon iconName="play"></SvgIcon>
            </div>
            <span className="text">播放</span>
          </div>
        </div>
      </div>
      <PlayList list={songs}></PlayList>
    </main>
  );
}
