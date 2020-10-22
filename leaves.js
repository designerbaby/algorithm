// 叶子问题
// 红色标记为0，黄色标记为1
let minimumOperations = function (leaves) {
  const len = leaves.length // 获得叶子的长度
  let dp = [leaves[0] === 'r' ? 0 : 1, Infinity, Infinity] // 判断初始的叶子是红还是黄
  for (var i = 0; i < len; i++) {
    const isRed = leaves[i] === 'r'
    dp = [
      dp[0] + (isRed ? 0 : 1),
      Math.min(dp[0], dp[1]) + (isRed ? 1 : 0),
      Math.min(dp[1], dp[2]) + (isRed ? 0 : 1),
    ]
  }
  return dp[2]
}

minimumOperations(['ryyyr'])