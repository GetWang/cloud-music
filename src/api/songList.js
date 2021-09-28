import axios from "axios";

import { API_HOST } from "./common";

export function getSongListCategorys() {
  const url = API_HOST + "/playlist/catlist";
  return axios.get(url).then((res) => {
    return res.data;
  });
}
