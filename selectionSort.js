// 选择排序
const arr = [2, 88, 6, 3, 0, 34, 72]
const sort = {}
sort.selectionSort = function(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let min = arr[i] // 假定比较范围内第一个值为最小的
    let index = i    // 记录最小值的下标
    for (let j = i + 1; j < arr.length; j += 1) {
      // 找到后面范围内第一个值为最小的记录下来
      if (arr[j] < min) {
        min = arr[j]
        index = j
      }
    }
    // 把范围内最小的值交换到范围内第一个
    if (index != i) {
      const temp = arr[i]
      arr[i] = arr[index]
      arr[index] = temp
    }
    console.log(`${arr}\n`)
  }
}

sort.selectionSort(arr)
console.log(arr)