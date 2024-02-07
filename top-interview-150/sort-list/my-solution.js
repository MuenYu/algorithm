// https://leetcode.com/problems/sort-list

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
var sortList = function (head) {
    const nums = [];
    let node = head;
    while (node) {
        nums.push(node.val);
        node = node.next;
    }
    nums.sort((a,b) => a-b);
    node = head;
    for (const num of nums) {
        node.val = num;
        node = node.next;
    }
    return head;
};