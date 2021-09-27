export class Song {
  constructor({ id = 0, name = "", coverUrl = "", authorList = [] }) {
    this.id = id;
    this.name = name;
    this.coverUrl = coverUrl;
    this.authorList = authorList;
  }
}

export function createSongs(list = []) {
  return list.map((item) => {
    let aList = item.artists.map((artist) => {
      return {
        id: artist.id || 0,
        name: artist.name || "",
      };
    });
    return new Song({
      id: item.id,
      name: item.name,
      coverUrl: item.album.picUrl,
      authorList: aList,
    });
  });
}
