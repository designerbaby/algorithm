function onlyOne (s) {
  const map = {}
  for(let i = 0; i < s.length; i += 1) { // 将字符串中的每个值都存在map中，并且数量+1
    map[s[i]] = (map[s[i]] || 0) + 1
  }
  for(let j = 0; j < s.length; j += 1) {
    if(map[s[j]] === 1) return s[j]
  }
  return -1 
}

const s = 'abaccdeff'
console.log(onlyOne(s))