// 判断是否是回文字符串

function longestPalindrome (s) {
  let result = s[0] || ''
  for (let i = 0; i < s.length; i++) {
    for (let j = 1; j <= 2; j++) {
      let left = i, right = i + j
      while (left >=0 && right < s.length && s[left] === s[right]) {
        left--
        right++
      }
      let length = right - left - 1
      if (length > result.length) {
        result = s.substr(left + 1, right)
      }
    }
  }
  return result
}

console.log('sdsaass', longestPalindrome('sdsaass'))