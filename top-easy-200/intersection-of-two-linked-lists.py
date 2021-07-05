# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class MySolution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        if not headA or not headB:
            return None
        anchor = None
        count = 0
        while not headA and not headB:
            if headA and count % 2 == 0:
                headA = headA.next
            elif headB and count % 2 == 1:
                headB = headB.next
            if headA == headB:
                anchor = headA
            else:
                anchor = None
            count += 1
        return anchor