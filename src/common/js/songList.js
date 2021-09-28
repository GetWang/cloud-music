export class SongList {
  constructor({ id = 0, name = "", coverUrl = "", playCount = 0 }) {
    this.id = id;
    this.name = name;
    this.coverUrl = coverUrl;
    this.playCount = playCount;
  }
}

export function createSongLists(list = []) {
  return list.map((item) => {
    return new SongList({
      id: item.id,
      name: item.name,
      coverUrl: item.picUrl,
      playCount: item.playCount,
    });
  });
}
