// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

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
var zigzagLevelOrder = function (root) {
    if (!root) return [];
    const result = [];
    let flag = true;
    let layer = [root];
    while (layer.length > 0) {
        const tmp = [];
        for (let i = 0; i < layer.length; ++i) {
            if (layer[i].left) tmp.push(layer[i].left);
            if (layer[i].right) tmp.push(layer[i].right);
        }
        if (flag)
            result.push(layer.map((x) => x.val));
        else
            result.push(layer.reverse().map((x) => x.val));
        layer = tmp;
        flag = !flag;
    }
    return result;
};

const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node2 = new TreeNode(2, node4);
const node3 = new TreeNode(3, null, node5);
const node1 = new TreeNode(1, node2, node3);
console.log(zigzagLevelOrder(node1));