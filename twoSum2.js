// 两数之和第二个版本，通过Map进行处理。用空间换时间

const twoSum = function (nums, target) {
  let numMap = {}
  for (let i = 0; i < nums.length; i += 1 ) {
    const curNum = nums[i]
    const targetNum = target - curNum // 拿到目标数值
    const targetNumIndex = numMap[targetNum] // 拿到目标数值的下标
    if (targetNumIndex !== undefined) { // 在对象中有这个下标，那就返回
      return [targetNumIndex, i]
    } else { // 没有就把当前的值，并且映射的下标放在map里面
      numMap[curNum] = i
    }
  }
}

// 测试
console.log(twoSum([2,7,11,13], 9))