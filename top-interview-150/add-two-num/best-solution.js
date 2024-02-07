// https://leetcode.com/problems/add-two-numbers

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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let list = new ListNode(0);
    let head = list;
    let carry = 0, tmp = 0, tmpNode = null;
    while (l1 !== null || l2 !== null || tmp !== 0) {
        if (l1 !== null) {
            tmp += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            tmp += l2.val;
            l2 = l2.next;
        }
        if (tmp > 9) {
            tmp -= 10;
            carry = 1;
        }
        tmpNode = new ListNode(tmp);
        head.next = tmpNode;
        head = head.next;
        tmp = carry;
        carry = 0;
    }
    return list.next;
};

const node3 = new ListNode(3);
const node2 = new ListNode(4, node3);
const node1 = new ListNode(2, node2);

const node6 = new ListNode(4);
const node5 = new ListNode(6, node6);
const node4 = new ListNode(5, node5);

console.log(addTwoNumbers(node1, node4));