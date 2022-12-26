// filter的数组实现
Array.prototype.filter = function(func) {
  var arr = this;
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
};

function isBigEnough(element) {
  return element >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

console.log("filtered:", filtered);