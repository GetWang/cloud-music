import { padNum } from "./util";

export class Song {
  constructor({
    id = 0,
    name = "",
    coverUrl = "",
    authorList = [],
    duration = 0,
  }) {
    this.id = id;
    this.name = name;
    this.coverUrl = coverUrl;
    this.authorList = authorList;
    this.duration = duration;
  }

  get authorNames() {
    return this.authorList
      .map((author) => {
        return author.name;
      })
      .join(" / ");
  }
  get durationFormat() {
    let s = Math.floor(this.duration / 1000);
    let mins = Math.floor(s / 60);
    let secs = Math.floor(s % 60);
    secs = padNum(secs);
    return `${mins}:${secs}`;
  }
}

export function createSongs(list = []) {
  return list.map((item) => {
    let artists = item.artists || item.ar;
    let album = item.album || item.al;
    let duration = item.duration || item.dt;
    let aList = artists.map((artist) => {
      return {
        id: artist.id || 0,
        name: artist.name || "",
      };
    });
    return new Song({
      id: item.id,
      name: item.name,
      coverUrl: album.picUrl,
      authorList: aList,
      duration,
    });
  });
}
