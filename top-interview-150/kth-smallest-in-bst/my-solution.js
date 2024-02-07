// https://leetcode.com/problems/kth-smallest-element-in-a-bst

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let val = 0;
    let count = 0;
    dfs(root);
    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        if (k !== count) {
            val = root.val;
            ++count;
        }
        dfs(root.right);
    }
    return val;
};

const node2 = new TreeNode(2);
const node4 = new TreeNode(4);
const node1 = new TreeNode(1, null, node2);
const node3 = new TreeNode(3, node1, node4);
console.log(kthSmallest(node3, 1));