// https://leetcode.com/problems/linked-list-cycle

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head === null) return false;
    let slow = head;
    let fast = head.next;
    while (slow !== null && fast !== null && fast.next !== null) {
        if (slow === fast) return true;
        slow = slow.next;
        fast = fast.next.next;
    }
    return false;
};

const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;
console.log(hasCycle(node1));