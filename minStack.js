// 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
// 1、暴力法
var MinStack = function () {
  this.stack = []
}

MinStack.prototype.push = function (x) {
  this.stack.push(x)
}

MinStack.prototype.pop = function () {
  this.stack.pop()
}

MinStack.prototype.top = function () { // 拿到栈的最顶层元素
  const length = this.stack.length
  if (length > 0) {
    return this.stack[length - 1]
  } else {
    return null
  }
}

MinStack.prototype.min = function () {
  const length = this.stack.length
  if (!length) return null
  return Math.min(...this.stack)
}

// 2、辅助栈
/**
 * 辅助栈的规则，有两个栈，1个是原栈，存储着所有元素，另一个是辅助栈，存储着原栈中最小的元素。这样拿最小的时候就直接拿辅助栈的数据。
 * 放入辅助栈的规则：
 * （1）、当插入元素的时候，辅助栈为空或者元素值<=辅助栈的栈顶元素。就将栈顶元素push进去。
 * （2）、当pop操作时，元素等于辅助栈的栈顶元素，辅助栈也弹出元素。
 */

var MinStack = function () {
  this.dataStack = [] // 原数据栈
  this.minStack = []  // 辅助栈
}

MinStack.prototype.push = function (x) {
  const minLength = this.minStack.length
  if (!minLength) {
    this.minStack.push(x);
  } else if (x <= this.minStack[minLength - 1]) {
      this.minStack.push(x);
  }
  this.dataStack.push(x)
}

MinStack.prototype.pop = function () {
  const minStack = this.minStack
  const dataStack = this.dataStack
  
  if (minStack[minStack.length - 1] === dataStack[dataStack.length - 1]) {
    minStack.pop()
  }
  dataStack.pop()
}

MinStack.prototype.top = function () {
  const length = this.dataStack.length
  if (length) {
    return this.dataStack[length - 1]
  } else {
    return null
  }
}

MinStack.prototype.min = function () {
  const length = this.minStack.length
  if (!length) {
    return null
  }
  return this.minStack[length - 1]
}


// 测试
MinStack ;minStack = new MinStack()
minStack.push(-2)
console.log('minStack1:', minStack)
minStack.push(0)
console.log('minStack2:', minStack)
minStack.push(-3)
console.log('minStack3:', minStack)
minStack.min()
console.log('minStack4:', minStack.min())
minStack.pop()
console.log('minStack5:', minStack)
minStack.top()
console.log('minStack6:', minStack.top())
minStack.min()
console.log('minStack7:', minStack.min())