// https://leetcode.com/problems/validate-binary-search-tree

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
 * @return {boolean}
 */
var isValidBST = function (root) {
    let prev = null;
    let flag = true;
    dfs(root);
    function dfs(root) {
        if (!root || !flag) return;
        dfs(root.left);
        if (prev && root.val <= prev.val) {
            flag = false;
        }
        prev = root;
        dfs(root.right);
    }
    return flag;
};