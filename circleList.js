// 环形链表
function hasCircle (head) {
  if (!head || !head.next) { // 没有1个或2个节点
    return false
  }

  let slow = head  // 慢指针走1步
  let fast = head.next // 快指针走2步

  // 快指针一直没追上慢指针
  while(slow !== fast) {
    if (!fast || !fast.next) { // 快指针到终点了，就停止了，说明没有环
      return false
    }

    slow = slow.next
    fast = fast.next.next
  }

  return true // 走完，那么说明快指针追上了慢指针，那就是有环
}