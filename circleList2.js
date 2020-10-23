// 环形链表暴力解法

function hasCircle (head) {
  while (head) { // 如果有链表
    if (head.val === 'janna') { // 最后检测到有已经为janna的值，那就为环形链表
      return true
    } else { // 每走一步，将链表的值设置为janna
      head.val = 'janna'
    }
    head = head.next
  }

  return false
}