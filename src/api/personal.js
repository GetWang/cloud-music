import axios from "axios";

import { API_HOST } from "./common";

import DailyRecomRes from "../mock/DailyRecomRes.json";
import PersonalFMRes from "../mock/PersonalFMRes.json";
import RecomSongListsRes from "../mock/RecomSongListsRes.json";

export function getDailyRecommendSongs() {
  const url = API_HOST + "/personalized/newsong";
  return axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return DailyRecomRes;
    });
}

export function getPersonalizedFmSongs() {
  const url = API_HOST + "/personal_fm";
  return axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return PersonalFMRes;
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
    })
    .catch(() => {
      return RecomSongListsRes;
    });
}
