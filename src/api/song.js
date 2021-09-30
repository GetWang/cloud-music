import axios from "axios";

import { API_HOST } from "./common";

export function getSongDetail(params = {}) {
  const url = API_HOST + "/song/detail";
  return axios
    .get(url, {
      params,
    })
    .then((res) => {
      return res.data;
    });
}