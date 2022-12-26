var str = 'abc';
var res = str.repeat(4);
console.log(res);

function myRepeat(target, n) {
  return (new Array(n + 1)).join(target);
}

console.log(myRepeat(str, 5));
// 数组的repeat方法
String.prototype.myRepeat = function (count) {
  if (this === null) {
    throw new TypeError(`can't convert ${this} to object`);
  }
  var str = '' + this;
  if (str.length === 0 || count === 0) {
    return '';
  }
  var res = '';
  while(count > 0) {
    // 奇数
    if((count & 1) === 1) {
      res += str;
    }
    str += str;

    count = count >>> 1;
    if (count === 0) {
      break;
    }
  }
  return res;
}

console.log(str.myRepeat(5));