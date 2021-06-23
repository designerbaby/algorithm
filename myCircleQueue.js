/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.queue = Array(k) // 创建个数组
  this.front = 0 // 保存头部指针 
  this.real = 0  // 保存尾部指针
  this.max = k   // 保存最大的数
};

/**
* Insert an element into the circular queue. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if (!this.isFull()) {
      this.queue[this.real] = value
      this.real = (this.real + 1) % this.max
      return true
  } else {
      return false
  }
};

/**
* Delete an element from the circular queue. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if (!this.isEmpty()) {
      this.queue[this.front] = '' // 先讲头部指针设置为空
      this.front = (this.front + 1) % this.max // 然后将头部指针指向循环指针中的下一个。
      return true
  } else {
      return false
  }
};

/**
* Get the front item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) {
      return -1
  }
  return this.queue[this.front]
};

/**
* Get the last item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) {
      return -1
  }
  let val = this.real - 1 >= 0 ?  this.real - 1 : this.max - 1
  return this.queue[val]
};

/**
* Checks whether the circular queue is empty or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  if (this.real === this.front && !this.queue[this.front]) { // 首尾指针指向同个位置，并且第一个指针为空
      return true
  } else {
      return false
  }
};

/**
* Checks whether the circular queue is full or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  if (this.real === this.front && !!this.queue[this.front]) { // 首尾指针指向同一个位置，并且
      return true
  } else {
      return false
  }
};

/**
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/