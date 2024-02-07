// https://leetcode.com/problems/rotate-list

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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (k === 0) return head;
    if (head === null || head.next === null) return head;
    let length = 1,
        cur = head;
    while (cur.next !== null) {
        cur = cur.next;
        ++length;
    }
    k = k % length;
    if (k === 0) {
        return head;
    }
    cur.next = head;
    cur = head;
    k = length - k;
    for (; k > 1; --k) {
        cur = cur.next;
    }
    const tmp = cur.next;
    cur.next = null;
    return tmp;
};

const node3 = new ListNode(2);
const node2 = new ListNode(1, node3);
const node1 = new ListNode(0, node2);
console.log(rotateRight(node1, 4));