// 早餐组合问题
// staple：数组， drinks：数组， x：值
function breakFastNumber (staple, drinks, x) {
  let sum = 0  // 结果有多少个
  let obj = {} // 用对象去存储
  for (let s of staple) { // 遍历数组中的每一项
    if (s < x) obj[s] = (obj[s] || 0) + 1
  }
  for (let i = 1; i <= x; i++) {
    obj[i] = (obj[i] || 0) + (obj[i - 1] || 0)
  }
  for (let d of drinks) {
    let y = x - d
    if (y > 0) {
      sum += obj[y]
    }
  }
  return sum % 1000000007
}

// var breakfastNumber = function(staple, drinks, x) {
//   let resultNum = 0 // 总共的购买方案
//   for(let i = 0; i < staple.length; i += 1) {
//       const stapleItem = staple[i]
//       for (let j = 0; drinks.length; j += 1) {
//           const drinksItem = drinks[j]
//           const twoSum = (stapleItem + drinksItem) % (1e9 + 7)
//           if (twoSum <= x) {
//               resultNum++
//           }
//       }
//   }
//   return resultNum
// };