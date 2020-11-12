// 给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算其所有整数的移动平均值。

/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.list = []  // 用于存放这些数,便于控制总量
  this.size = size// 用于控制总共有多少个数
  this.sum = 0    // 用于存储计算的总数
};

/** 
* @param {number} val
* @return {number}
*/
MovingAverage.prototype.next = function(val) {
  this.list.push(val)
  this.sum += val
  if (this.list.length > this.size) { // 如果当前的数组的长度大于当前的控制整个数据流的个数
      const v = this.list.shift() // 队列是先进先出
      this.sum -= v   // 将队列中的首个元素在总和中去掉
  }
  return this.sum / this.list.length
};

/**
* Your MovingAverage object will be instantiated and called as such:
* var obj = new MovingAverage(size)
* var param_1 = obj.next(val)
*/