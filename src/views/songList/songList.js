import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./songList.scss";
import SongListCategory, {
  ALL_CATEGORY,
  RECOM_CATEGORY,
} from "../../components/SongListCategory/SongListCategory";
import SongLists from "../../components/SongLists/SongLists";
import { getRecommendSongLists } from "../../api/personal";
import { getSongListsByCategory } from "../../api/songList";
import { OK_CODE } from "../../api/common";
import { createSongLists } from "../../common/js/songList";
import { changePlaying } from "../../store/slices";
import { selectPlaying } from "../../store/selectors";

let getSongLists = function (name) {
  console.log("name", name);
  this.currCateName = name;
  this.page = 1;
  let promise;
  if (name === RECOM_CATEGORY) {
    promise = getRecomSongLists();
  } else {
    promise = getSongListsByCate();
  }
  return promise;
};
let loadMore = function () {
  this.page++;
  return getSongListsByCate();
};
let getSongListsByCate = function (params = {}) {
  console.log("page", this.page);
  let limit = this.pageSize;
  let _params = {
    cat: this.currCateName,
    // hot/new
    order: params.order || "hot",
    limit,
    offset: (this.page - 1) * limit,
  };
  return getSongListsByCategory(_params)
    .then((res) => {
      console.log("api-getSongListsByCategory res", res);
      if (res.code === OK_CODE) {
        return handleSongLists(res.playlists, res.total);
      }
    })
    .catch((e) => {
      console.log("api-getSongListsByCategory error", e);
    });
};
let getRecomSongLists = function (params = {}) {
  console.log("page", this.page);
  let _params = {
    limit: params.limit || 30,
  };
  return getRecommendSongLists(_params)
    .then((res) => {
      console.log("api-getRecommendSongLists res", res);
      if (res.code === OK_CODE) {
        return handleSongLists(res.result);
      }
    })
    .catch((e) => {
      console.log("api-getRecommendSongLists error", e);
    });
};
let handleSongLists = function (data, total) {
  let list = Array.isArray(data) ? data : [];
  let songLists = createSongLists(list);
  console.log("songLists", songLists);
  total = total || songLists.length;
  console.log("total", total);
  return {
    songLists,
    total,
  };
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SongListView(props) {
  const searchCate = useQuery().get("category");
  const gData = {
    currCateName: searchCate || ALL_CATEGORY,
    page: 1,
    pageSize: 30,
  };
  const playing = useSelector(selectPlaying);
  const dispatch = useDispatch();

  let [songLists, setSongLists] = useState([]);
  let [total, setTotal] = useState(0);
  getSongLists = getSongLists.bind(gData);
  loadMore = loadMore.bind(gData);
  getSongListsByCate = getSongListsByCate.bind(gData);
  getRecomSongLists = getRecomSongLists.bind(gData);
  handleSongLists = handleSongLists.bind(gData);

  useEffect(() => {
    handleReqPromise(getSongLists(gData.currCateName));
  }, []);

  function handleReqPromise(promise) {
    promise.then((res) => {
      let arr = res.songLists;
      setSongLists((pList) => {
        console.log("gData.page", gData.page);
        let list = gData.page === 1 ? arr : pList.concat(arr);
        return list;
      });
      setTotal(res.total);
    });
  }

  return (
    <main id="song-list-page">
      <div className="category-wrapper">
        <SongListCategory
          initCate={gData.currCateName}
          onChoosed={(name) => handleReqPromise(getSongLists(name))}
        ></SongListCategory>
      </div>
      <SongLists
        list={songLists}
        total={total}
        onMore={() => handleReqPromise(loadMore())}
      ></SongLists>
    </main>
  );
}
