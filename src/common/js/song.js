import { formatSongTime } from "./util";

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
    this.url = `https://music.163.com/song/media/outer/url?id=${id}`;

    this.authorNames = authorList
      .map((author) => {
        return author.name;
      })
      .join(" / ");
    this.durationFormat = formatSongTime(duration);
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
