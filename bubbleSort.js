/**
 * 冒泡排序
 * 双层循环，时间复杂度 O^2
 */


function bubbleSort (arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < arr[i]) {
        [ arr[i], arr[j] ] = [ arr[j], arr[i] ]
      }
    }
  }
  return arr
}


// 测试代码
const arr = [3,5,6,1,7,9]
const result = bubbleSort(arr)
console.log(result)