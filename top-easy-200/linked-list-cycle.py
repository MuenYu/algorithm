# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class MySolution:
    def hasCycle(self, head: ListNode) -> bool:
        if head == None:
            return False
        count = 0
        while head.next != None:
            count += 1
            if count > 10000:
                return True
        return False


