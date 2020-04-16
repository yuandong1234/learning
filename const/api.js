const isRelease = false;
let host = '';
if (isRelease) {
  host = 'https://v.juhe.cn/';
} else {
  host = 'https://v.juhe.cn/';
}
let INDEX_DATA = host + 'toutiao/index';

module.exports = {
  INDEX_DATA: INDEX_DATA
}