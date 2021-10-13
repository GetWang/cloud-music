import axios from "axios";

import { API_HOST } from "./common";

import { listId } from "./songList";

import SongsDetRes_388692880 from "../mock/SongsDetRes_388692880.json";
import SongsDetRes_5066717274 from "../mock/SongsDetRes_5066717274.json";
import lyricRes_1302090321 from "../mock/lyricRes_1302090321.json";
import lyricRes_1333192765 from "../mock/lyricRes_1333192765.json";
import lyricRes_1426649237 from "../mock/lyricRes_1426649237.json";
import lyricRes_1820328446 from "../mock/lyricRes_1820328446.json";

const listIdMap = {
  388692880: SongsDetRes_388692880,
  5066717274: SongsDetRes_5066717274,
};

const songIdMap = {
  1302090321: lyricRes_1302090321,
  1333192765: lyricRes_1333192765,
  1426649237: lyricRes_1426649237,
  1820328446: lyricRes_1820328446,
};

export function getSongDetail(params = {}) {
  const url = API_HOST + "/song/detail";
  return axios
    .get(url, {
      params,
    })
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return listIdMap[listId];
    });
}

export function getSongUrl(params = {}) {
  const url = API_HOST + "/song/url";
  return axios
    .get(url, {
      params,
    })
    .then((res) => {
      return res.data;
    });
}

export function getSongLyric(params = {}) {
  const url = API_HOST + "/lyric";
  return axios
    .get(url, {
      params,
    })
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return songIdMap[params.id] || {};
    });
}
