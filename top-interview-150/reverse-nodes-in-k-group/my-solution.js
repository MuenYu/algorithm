// https://leetcode.com/problems/reverse-nodes-in-k-group

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
var reverseKGroup = function (head, k) {
    if (k === 1) return head;
    const groups = [];
    let cur = head;
    while (cur !== null) {
        const tmpGroup = [];
        for (let i = 0; i < k && cur !== null; ++i) {
            tmpGroup.push(cur);
            cur = cur.next;
        }
        if (tmpGroup.length === k) groups.push(tmpGroup);
    }
    let tail = groups[groups.length - 1][k - 1].next;
    for (let i = groups.length - 1; i > -1; --i) {
        for (let j = groups[i].length - 1; j > 0; --j) {
            groups[i][j].next = groups[i][j - 1];
        }
        groups[i][0].next = tail;
        tail = groups[i][k-1];
    }
    return groups[0][k-1];
};

const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
console.log(reverseKGroup(node1, 2));