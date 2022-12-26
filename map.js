// 数组的map方法

Array.prototype.newMap = function (fn) {
  var res = [];
  console.log(this);
  for (var i = 0; i < this.length; i++) {
    res.push(fn(this[i], i, this))
  }
  return res;
}

var arr = ["a", "b", "c", "d", "e"];

arr.newMap(function (currentValue, index, arr) {
  console.log("newMap当前元素" + currentValue);
  console.log("newMap当前索引" + index);
  console.log("newMap数组对象" + arr);
})