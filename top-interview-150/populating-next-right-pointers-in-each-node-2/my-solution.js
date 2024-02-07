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
    if (!root) return root;
    let level = [root];
    while (level.length !== 0) {
        const tmp = [];
        for (let i = 0; i < level.length; ++i) {
            if (level[i].left) {
                tmp.push(level[i].left);
            }
            if (level[i].right) {
                tmp.push(level[i].right);
            }
        }
        for (let i = 0; i < tmp.length - 1; ++i) {
            tmp[i].next = tmp[i+1];
        }
        level = tmp;
    }
    return root;
};

const node4 = new Node(4);
const node5 = new Node(5);
const node7 = new Node(7);
const node2 = new Node(2,node4,node5);
const node3 = new Node(3,null,node7);
const node1 = new Node(1,node2,node3);
console.log(connect(node1));
