// https://leetcode.com/problems/sum-root-to-leaf-numbers

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
var sumNumbers = function (root) {
    let sum = 0;
    dfs(root, "");
    function dfs(root, str) {
        if (!root) return;
        else if (!root.left && !root.right) {
            str += root.val;
            sum += parseInt(str);
        }
        else {
            dfs(root.left, str + root.val);
            dfs(root.right, str + root.val);
        }
    }
    return sum;
};
