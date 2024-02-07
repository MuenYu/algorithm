// https://leetcode.com/problems/binary-tree-level-order-traversal

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    const result = [];
    let layer = [root];
    while (layer.length > 0) {
        const tmp = [];
        for (let i = 0; i < layer.length; ++i) {
            if (layer[i].left) tmp.push(layer[i].left);
            if (layer[i].right) tmp.push(layer[i].right);
        }
        result.push(layer.map((x) => x.val));
        layer = tmp;
    }
    return result;
};