// https://leetcode.com/problems/reverse-linked-list-ii

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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (left === right) return head;
    let cur = head;
    let pre = null;
    let suf = null;
    const stack = [];
    for (let i = 1; i <= right; ++i) {
        if (i >= left) {
            stack.push(cur);
        } else if (i === left - 1) {
            pre = cur;
        }
        cur = cur.next;
    }
    suf = cur;
    stack[0].next = suf;
    cur = pre === null ? stack.pop() : pre;
    if (left === 1) head = cur;
    while (stack.length > 0) {
        cur.next = stack.pop();
        cur = cur.next;
    }
    return head;
};

const node5 = new ListNode(5);
// const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node5);
// const node2 = new ListNode(2, node3);
// const node1 = new ListNode(1, node2);
console.log(reverseBetween(node3, 1, 2));
