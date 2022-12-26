/**
 * 数组打平
 * 思路：
 * 如果是数组就递归进行继续打平，不是数组就直接push到数组中去
 */


const arr = [1,2,3,[4,5,[6,7,[8,9]],10,11],12]

// 数组打平的第一种方法：递归
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

// console.log(arr.flat())

// 数组打平的第二种方法：flat
// console.log('flat:', arr.flat(Infinity))

// 3、使用replace+split
console.log('replace:', arr.toString().replace(/(\[|\])/g, '').split(','))

// 4、使用reduce函数迭代
function flatten (arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur): cur)
  }, [])
}

console.log('flatten:', flatten(arr))

// 5、扩展运算符
while(arr.some(Array.isArray)) {
  arr = [].concat(...arr)
  console.log('arr:', arr)
}





