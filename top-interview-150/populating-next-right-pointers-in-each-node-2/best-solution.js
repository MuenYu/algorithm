// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (root === null) {
        return null;
    }
    let queue = [root];
    while (queue.length > 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();

            if (i < size - 1) {
                node.next = queue[0];
            }

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    }
    return root;
};

const node4 = new Node(4);
const node5 = new Node(5);
const node7 = new Node(7);
const node2 = new Node(2, node4, node5);
const node3 = new Node(3, null, node7);
const node1 = new Node(1, node2, node3);
console.log(connect(node1));
