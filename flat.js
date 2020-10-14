/**
 * 数组打平
 * 思路：
 * 如果是数组就递归进行继续打平，不是数组就直接push到数组中去
 */


const arr = [1,2,3,[4,5,[6,7,[8,9]],10,11],12]

Array.prototype.flat = function () {
  let arr = []
  this.forEach(item => {
    if (Array.isArray(item)) {
      console.log('item:', item)
      arr = arr.concat(item.flat())
    } else {
      arr.push(item)
    }
  })
  return arr
}

console.log(arr.flat())
