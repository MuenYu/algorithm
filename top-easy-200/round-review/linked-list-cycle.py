from typing import List

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        if head == None:
            return False
        i,j = head,head.next
        while i and j:
            i = i.next
            if j.next:
                j = j.next.next
            else:
                return False
            if i == j:
                return True
        return False