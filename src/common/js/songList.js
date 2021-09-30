import { padNum } from "./util";

export class SongList {
  constructor({
    id = 0,
    name = "",
    coverUrl = "",
    description = "",
    songCount = 0,
    playCount = 0,
    creator = {
      userId: 0,
      nickname: "云音乐私人雷达",
    },
    updateTime = Date.now(),
  }) {
    this.id = id;
    this.name = name;
    this.coverUrl = coverUrl;
    this.description = description;
    this.songCount = songCount;
    this.playCount = playCount;
    this.creator = creator;
    this.updateTime = updateTime;
  }

  get updateTimeFormat() {
    let date = new Date(this.updateTime);
    let y = date.getFullYear();
    let m = date.getMonth();
    let d = date.getDate();
    m = padNum(m);
    d = padNum(d);
    return `${y}年${m}月${d}日`;
  }
}

export function createSongLists(list = []) {
  return list.map((item) => {
    let obj;
    let cTor = item.creator;
    if (cTor) {
      obj = {
        userId: cTor.userId,
        nickname: cTor.nickname,
      };
    }
    return new SongList({
      id: item.id,
      name: item.name,
      coverUrl: item.picUrl || item.coverImgUrl,
      description: item.description,
      songCount: item.trackCount,
      playCount: item.playCount,
      creator: obj,
      updateTime: item.updateTime || item.trackNumberUpdateTime,
    });
  });
}
