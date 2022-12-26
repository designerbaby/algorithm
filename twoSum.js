// 两数之和

const twoSum = function (nums, target) {
  let i = nums.length
  while (i > 1) {
    let last = nums.pop() // 拿到最后一项
    if (nums.indexOf(target - last) > -1) { // 通过indexOf索引去查看nums里面有没这一项。
      return [nums.indexOf(target - last), nums.length] // 有的话，通过indexOf去拿到这个差值的索引，还有这个当前数组的长度就是第二个索引
    }
    i--
  }
}

// 测试
console.log(twoSum([2,7,11,13], 9))