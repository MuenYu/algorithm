// https://leetcode.com/problems/partition-list

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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    if (!head || !head.next) return head;

    let less = new ListNode(),
        more = new ListNode(),
        lessP = less,
        moreP = more,
        cur = head;

    while (cur) {
        const tmp = cur.next;
        cur.next = null;
        if (cur.val < x) {
            lessP.next = cur;
            lessP = lessP.next;
        } else {
            moreP.next = cur;
            moreP = moreP.next;
        }
        cur = tmp;
    }
    lessP.next = more.next;
    return less.next;
};