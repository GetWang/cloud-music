export function padNum(num) {
  let prefix = num >= 10 ? "" : "0";
  return prefix + num;
}

export function judgeNumInRegion(num, min, max) {
  return Math.min(max, Math.max(min, num));
}

export function formatSongTime(ms) {
  let s = Math.floor(ms / 1000);
  let mins = Math.floor(s / 60);
  let secs = Math.floor(s % 60);
  secs = padNum(secs);
  return `${mins}:${secs}`;
}

export function simplifyList(list) {
  return list.map((item) => {
    return { ...item };
  });
}
