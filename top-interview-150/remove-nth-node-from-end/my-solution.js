// https://leetcode.com/problems/remove-nth-node-from-end-of-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const dummy = new ListNode(0, head);
    let p1 = head, p2 = head, p3 = dummy;
    for (let i = 1; i < n; ++i) {
        p1 = p1.next;
    }
    while (p1.next !== null) {
        p1 = p1.next;
        p2 = p2.next;
        p3 = p3.next;
    }
    p3.next = p2.next;
    p2.next = null;
    return dummy.next;
};