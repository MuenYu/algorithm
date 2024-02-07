// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii

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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head === null) return head;
    const set = new Set();
    let dummy = new ListNode(Infinity, head);
    let cur = dummy;
    while (cur.next !== null) {
        if (cur.val === cur.next.val) set.add(cur.val);
        cur = cur.next;
    }
    let p1 = dummy, p2 = dummy.next;
    while (p2!==null) {
        if (set.has(p2.val)) {
            p1.next = p2.next;
        }else {
            p1 = p1.next;
        }
        p2 = p2.next;
    }
    return dummy.next;
};

const node5 = new ListNode(3, null);
const node4 = new ListNode(2, node5);
const node3 = new ListNode(1, node4);
const node2 = new ListNode(1, node3);
const node1 = new ListNode(1, node2);

console.log(deleteDuplicates(node1));