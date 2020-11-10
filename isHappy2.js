var isHappy2 = function (n) {
  while (n = String(n).split('').reduce((p, v) => p + v * v, 0)) {
    console.log('n:', n)
    if (n === 1) return true
    else return false
  }
}

isHappy2(19)