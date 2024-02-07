// https://leetcode.com/problems/copy-list-with-random-pointer

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};


/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;
    const oldToNew = new Map();
    let curr = head;
    while (curr) {
        oldToNew.set(curr, new Node(curr.val));
        curr = curr.next;
    }
    curr = head;
    while (curr) {
        oldToNew.get(curr).next = oldToNew.get(curr.next) || null;
        oldToNew.get(curr).random = oldToNew.get(curr.random) || null;
        curr = curr.next;
    }
    return oldToNew.get(head);
};


const node1 = new Node(1, null, null);
const node2 = new Node(2, null, null);
node1.next = node2;
node1.random = node2;
node2.random = node2;
console.log(node1);
console.log(copyRandomList(node1));
