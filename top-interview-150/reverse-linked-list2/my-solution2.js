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
    let last = null;
    let leftNode = null;
    let rightNode = null;
    for (let i = 1; i <= right; ++i) {
        const tmp = cur.next;
        if (i > left) {
            cur.next = last;
        } else if (i === left) {
            leftNode = cur;
            pre = last;
        }
        last = cur;
        cur = tmp;
    }
    rightNode = last;
    suf = cur;
    leftNode.next = suf;
    
    if (pre !== null) pre.next = rightNode;
    else head = rightNode;
    return head;
};

const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
let cur = reverseBetween(node1, 2, 4);
while (cur!==null) {
    console.log(cur);
    cur = cur.next;
}