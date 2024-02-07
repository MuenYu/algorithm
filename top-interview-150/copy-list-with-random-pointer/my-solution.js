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
var copyRandomList = function (head) {
    let node = new Node(0, null, null);
    let p = node;
    const map = new Map();
    while (head !== null) {
        p.next = new Node(head.val, null, null);
        map.set(head, p.next);
        head = head.next;
        p = p.next;
    }
    for (const [key, val] of map) {
        if (key.random !== null)
            val.random = map.get(key.random);
    }
    return node.next;
};

const node1 = new Node(1, null, null);
const node2 = new Node(2, null, null);
node1.next = node2;
node1.random = node2;
node2.random = node2;
console.log(node1);
console.log(copyRandomList(node1));

const map = new Map();
console.log(map.get('sdf'));