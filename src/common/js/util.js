export function padNum(num) {
  let prefix = num >= 10 ? "" : "0";
  return prefix + num;
}
