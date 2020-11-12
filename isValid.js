function isValid (s) {
  const n = s.length
  if (n % 2 === 1) { // 字符串长度不为偶数，肯定不对称
    return false
  }

  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])  // 定义一个括号的映射
  const stk = []  // 定义一个栈，进行处理。
  s.split('').forEach(ch => {
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) { // 栈里面没有数据或者栈里面的数据等于对应的数据
        return false
      }
      stk.pop() // 匹配到之后就把当前的字符给pop出去
    } else {
      stk.push(ch)
    }
  })
  return !stk.length
}

console.log(isValid('({})'))