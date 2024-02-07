// https://leetcode.com/problems/flatten-binary-tree-to-linked-list

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root) return;
    const stack = [root]; // First in, last out
    while (stack.length > 0) {
        const cur = stack.pop();
        if (cur.right) // push right first, because we need to retrieve left first
            stack.push(cur.right);
        if (cur.left)
            stack.push(cur.left);
        if (stack.length > 0)
            cur.right = stack[stack.length - 1];
        cur.left = null;
    }
};

const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node6 = new TreeNode(6);
const node2 = new TreeNode(2, node3, node4);
const node5 = new TreeNode(5, null, node6);
const node1 = new TreeNode(1, node2, node5);
flatten(node1);
console.log(node1);
