import axios from "axios";

import { API_HOST } from "./common";

export function getSongListCategorys() {
  const url = API_HOST + "/playlist/catlist";
  return axios.get(url).then((res) => {
    return res.data;
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
    });
}
