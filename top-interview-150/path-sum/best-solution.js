// https://leetcode.com/problems/path-sum

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) return false;
    if (!root.left && !root.right) { // check leaf
        return sum === root.val;
    } else { // continue DFS
        const flag1 = hasPathSum(root.left, sum - root.val)
        const flag2 = hasPathSum(root.right, sum - root.val)

        return flag1 || flag2;
    }
};