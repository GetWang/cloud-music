import axios from "axios";

import { API_HOST } from "./common";

export function getDailyRecommendSongs() {
  const url = API_HOST + "/personalized/newsong";
  return axios.get(url).then((res) => {
    return res.data;
  });
}

export function getPersonalizedFmSongs() {
  const url = API_HOST + "/personal_fm";
  return axios.get(url).then((res) => {
    return res.data;
  });
}

export function getRecommendSongLists(params = {}) {
  const url = API_HOST + "/personalized";
  return axios
    .get(url, {
      params,
    })
    .then((res) => {
      return res.data;
    });
}
