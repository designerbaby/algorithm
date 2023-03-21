// 手写Object.create
// 将传入的对象作为原型

function create (obj) {
  function F() {}
  F.prototype = obj
  return new F()
}

