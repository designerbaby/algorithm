// 插入排序
const arr = [2, 88, 6, 3, 0, 34, 72]
const sort = {}

sort.insertionSort = function(arr) {
  for (let i = 0; i < arr.length - 1; i += 1) {
    const insert = arr[i + 1] // 要被插入的元素
    let index = i + 1         // 要被插入的元素的下标
    for (let j = i; j >= 0; j -= 1){
      // 被插入的元素比前面j项元素，谁小就插入到谁的前面
      if (insert < arr[j]) {
        arr[j + 1] = arr[j]
        index = j
      }
    }
    arr[index] = insert
    console.log(`${arr}\n`)
  }
}
sort.insertionSort(arr)