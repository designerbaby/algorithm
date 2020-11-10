var isHappy = function(n) {
  const nString = n.toString() // 将这个数转成string
  console.log('nString:', nString)
  const numArray = nString.split('') // 每一位数都拆出来。
  console.log('numArray:', numArray)
  let resultBoolean
  const deepCount = (numArray) => {
      let countNum = 0 // 设置结果得到的数先初始化为0
      for(let i = 0; i < numArray.length; i += 1) {
          const item = parseInt(numArray[i], 10)
          countNum = item * item + countNum
      }
      const countNumArray = countNum.toString().split('')
      console.log('countNumArray:', countNumArray)
      if (countNumArray.length === 1) {
          console.log('countNum:', countNum)
          if (parseInt(countNum, 10) === 1) {
            return true
            // resultBoolean = true
          } else {
            return false
            // resultBoolean = false
          }
      } else {
          deepCount(countNumArray)
      }
  }
  // console.log(`deepCount(numArray):`, deepCount(numArray))
  return deepCount(numArray)
};
isHappy(19)