// https://leetcode.com/problems/minimum-absolute-difference-in-bst

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
 * @return {number}
 */
var getMinimumDifference = function (root) {
    const arr = [];
    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        arr.push(root.val);
        dfs(root.right);
    }
    dfs(root);
    let min = Infinity;
    for (let i = 1; i < arr.length; ++i) {
        min = Math.min(min,arr[i]-arr[i-1]);
    }
    return min;
};

const node1 = new TreeNode(1);
const node3 = new TreeNode(3);
const node2 = new TreeNode(2, node1, node3);
const node6 = new TreeNode(6);
const node4 = new TreeNode(4, node2, node6);
console.log(getMinimumDifference(node4));