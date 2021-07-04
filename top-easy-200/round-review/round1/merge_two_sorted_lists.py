# Definition for singly-linked list.
from typing import List


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if l1 == None:
            return l2
        if l2 == None:
            return l1
        anchor = ListNode()
        head = anchor
        while l1 and l2:
            if l1.val < l2.val:
                head.next = l1
                l1 = l1.next
            else:
                head.next = l2
                l2 = l2.next
            head = head.next
        if l1 == None:
            head.next = l2
        else:
            head.next = l1
        return anchor.next

s = Solution()
l1 = ListNode(
    val=1,
    next=ListNode(
        val=2,
        next=ListNode(
            val=3
        )
    ))
l2 = ListNode(
    val=1,
    next=ListNode(
        val=3,
        next=ListNode(
            val=4
        )
    ))
l = s.mergeTwoLists(l1,l2)
while l:
    print(l.val)
    l = l.next