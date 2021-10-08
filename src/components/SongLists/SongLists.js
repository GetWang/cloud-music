import React from "react";
import { useDispatch } from "react-redux";

import "./SongLists.scss";
import SvgIcon from "../SvgIcon/SvgIcon";
import { getSongListDetail } from "../../api/songList";
import { getSongDetail } from "../../api/song";
import { OK_CODE } from "../../api/common";
import { createSongs } from "../../common/js/song";
import { simplifyList } from "../../common/js/util";
import {
  changeFmOn,
  changePlaying,
  setPlayList,
  setCurrIndex,
} from "../../store/slices";

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
  let idList = data.trackIds.slice(0, 30).map((item) => {
    return item.id;
  });
  console.log("idList", idList);
  return idList.join(",");
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
  let songs = createSongs(list);
  console.log("songs", songs);
  return songs;
}

function formatCount(count) {
  return count >= 10000 ? (count / 10000).toFixed(1) + "万" : count;
}

export default function SongLists(props) {
  const dispatch = useDispatch();
  let getListEls = function () {
    return props.list.map((item, index) => {
      let countDesc = formatCount(item.playCount);
      let id = item.id;
      let href = `/songListDetail/${id}`;
      return (
        <li className="list-item" key={`${index}_${id}`}>
          <a className="cover-wrapper" href={href}>
            <img className="cover" src={item.coverUrl} alt=""></img>
            <div className="play-counts">
              <div className="icon" title="播放">
                <SvgIcon iconName="play"></SvgIcon>
              </div>
              <span className="counts">{countDesc}</span>
            </div>
            <div
              className="play-btn"
              onClick={(e) => handlePlay(e, id)}
              title="播放"
            >
              <SvgIcon iconName="play"></SvgIcon>
            </div>
          </a>
          <p className="list-name">{item.name}</p>
        </li>
      );
    });
  };
  let handlePlay = function (e, id) {
    e.stopPropagation();
    e.preventDefault();
    console.log("handlePlay");
    getSListDetail({ id })
      .then((ids) => {
        return getSDetail({ ids });
      })
      .then((list) => {
        dispatch(changeFmOn(false));
        dispatch(setPlayList(simplifyList(list)));
        dispatch(setCurrIndex(0));
        dispatch(changePlaying(true));
      });
  };
  let handleMore = function () {
    console.log("load more");
    props.onMore();
  };

  let listEls = getListEls();
  let isMore = props.list.length < props.total;
  let cls = isMore ? "load-more show" : "load-more";
  return (
    <div className="song-lists-wrapper">
      <ul className="song-lists">{listEls}</ul>
      <div className={cls} onClick={handleMore}>
        加载更多
      </div>
    </div>
  );
}
