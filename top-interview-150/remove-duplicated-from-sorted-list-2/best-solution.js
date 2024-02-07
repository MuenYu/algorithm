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
    const nullHead = new ListNode(null,head);
    let prev = nullHead,
        curr = head
    while (curr) {
        while (curr.next && curr.val === curr.next.val) {
            curr = curr.next
        }
        if (prev.next === curr) {
            prev = curr
        } else {
            prev.next = curr.next
        }
        curr = curr.next
    }
    return nullHead.next
}

const node7 = new ListNode(5, null);
const node6 = new ListNode(4, node7);
const node5 = new ListNode(4, node6);
const node4 = new ListNode(3, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

console.log(deleteDuplicates(node1));