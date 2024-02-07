// https://leetcode.com/problems/average-of-levels-in-binary-tree/

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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    const result = [];
    let layer = [root];
    let sum = 0;
    while (layer.length > 0) {
        const tmp = [];
        sum = 0;
        for (let i = 0; i < layer.length; ++i) {
            if (layer[i].left) {
                tmp.push(layer[i].left);
            }
            if (layer[i].right) {
                tmp.push(layer[i].right);
            }
            sum += layer[i].val;
        }
        result.push(sum/layer.length);
        layer = tmp;
    }
    return result;
};