/**
 * 快速排序
 * 使用递归
 */

// 最普遍的快速排序
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  const left = []
  const right = []
  const flag = arr.shift()
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < flag) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(flag, quickSort(right))
}

// 测试代码
const arr = [3,4,6,1,5,2]
const result = quickSort(arr)
console.log(result)

