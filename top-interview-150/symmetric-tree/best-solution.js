// https://leetcode.com/problems/symmetric-tree

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
var isSymmetric = function (root) {
    return compareSymmetricTrees(root.left, root.right);
};

var compareSymmetricTrees = function (l, r) {
    if (l == null && r == null) {
        return true;
    } else if (l == null || r == null) {
        return false;
    }

    if (l.val != r.val) {
        return false;
    }

    return compareSymmetricTrees(l.left, r.right) && compareSymmetricTrees(l.right, r.left);
}