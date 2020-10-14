/*
* 同构：一个单词对应另一个单词。
* 比如：egg 和 tee // true
*      paper 和 title // true
*      egg 和 sad // false
*      dgg 和 add // true
* 判断两个单词是否同构思路：
* 1、如果两个单词的长度不同，那一定不是同构
* 2、遍历单词的每一个，用一个对象做映射，如果健值对每个都能对应。那是同构。对不上就不是，没有这个健值对就加上。
*/


function isOmorphism (firstWord, secondWord) {
  const WordMap = {}
  // 如果两个单词的长度不同，那一定不是同构
  if (firstWord.length !== secondWord.length) {
    return false
  }

  for (let i = 0; i < firstWord.length; i += 1) {
    const letterA = firstWord[i]
    const letterB = secondWord[i]
    if (WordMap[letterA] === undefined) { // 对象中没有这个健值对
      WordMap[letterA] = letterB // 左边的相同位置字母对应右边的相同位置字母
    } else if (WordMap[letterA] !== letterB) { // 如果已经存在，并且左边的字母对应不上右边的字母，说明非同构
      return false
    }
  }
  // 循环完了都行，那说明是同构
  return true
}

// 下面是测试代码
const result = isOmorphism('egg', 'sad')
console.log(result)
 