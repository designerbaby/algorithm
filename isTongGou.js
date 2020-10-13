/*
* 同构：一个单词对应另一个单词。
* 比如：egg 和 tee // true
*      kick 和 tick // false
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

  for (const i = 0; i < firstWord.length; i += 1) {
    const letterA = firstWord[i]
    const letterB = secondWord[i]
  }

  
}
 