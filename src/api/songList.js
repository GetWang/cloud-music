import axios from "axios";

import { API_HOST } from "./common";

import SongListCategoryRes from "../mock/SongListCategoryRes.json";
import SongListsRes1 from "../mock/SongListsRes1.json";
import SongListsRes2 from "../mock/SongListsRes2.json";
import SongListDetRes_388692880 from "../mock/SongListDetRes_388692880.json";
import SongListDetRes_5066717274 from "../mock/SongListDetRes_5066717274.json";

export let listId = 0;

const listMap = {
  1: SongListsRes1,
  2: SongListsRes2,
};
const detMap = {
  1: {
    id: "388692880",
    det: SongListDetRes_388692880,
  },
  2: {
    id: "388692880",
    det: SongListDetRes_5066717274,
  },
};

export function getSongListCategorys() {
  const url = API_HOST + "/playlist/catlist";
  return axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return SongListCategoryRes;
    });
}

export function getSongListsByCategory(params = {}) {
  const url = API_HOST + "/top/playlist";
  return axios
    .get(url, {
      params,
    })
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      const num = Math.floor(Math.random() * 2 + 1);
      return listMap[num];
    });
}
export function getSongListDetail(params = {}) {
  const url = API_HOST + "/playlist/detail";
  return axios
    .get(url, {
      params,
    })
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      const num = Math.floor(Math.random() * 2 + 1);
      listId = detMap[num].id;
      return detMap[num].det;
    });
}
