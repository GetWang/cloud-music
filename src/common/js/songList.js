export class SongList {
  constructor({
    id = 0,
    name = "",
    coverUrl = "",
    description = "",
    songCount = 0,
    playCount = 0,
  }) {
    this.id = id;
    this.name = name;
    this.coverUrl = coverUrl;
    this.description = description;
    this.songCount = songCount;
    this.playCount = playCount;
  }
}

export function createSongLists(list = []) {
  return list.map((item) => {
    return new SongList({
      id: item.id,
      name: item.name,
      coverUrl: item.picUrl || item.coverImgUrl,
      description: item.description,
      songCount: item.trackCount,
      playCount: item.playCount,
    });
  });
}
