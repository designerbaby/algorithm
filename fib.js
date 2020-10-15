/**
 * 
 * 斐波那契数列
 * F(n) = F(n-1) + F(n-2) n > 1
 * F(0) = 0, F(1) = 1
 */

// 第一个版本，暴力递归
let cishu = 0
function fib(n) {
  cishu += 1
  console.log('cishu:', cishu)
  if (n === 1 || n === 2) {
    return 1
  }
  return fib(n - 1) + fib(n - 2)
}

console.log(fib(5))

// 第二个版本，缓存版递归
function fib1(n) {
  let cache = []
  return helper(cache, n)
}

function helper(cache, n) {
  if (n === 1 || n === 2) {
    return 1
  }
  if (cache[n]) return cache[n]
  cache[n] = helper(cache, n-1) + helper(cache, n-2)
  return cache[n]
}

console.log('fib1:', fib1(4))

// 自底向上
function fib2(n) {
  let dp = []
  dp[1] = dp[2] = 1
  for(let i = 3; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
}

console.log('fib2:', fib2(4))