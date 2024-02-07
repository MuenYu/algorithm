// https://leetcode.com/problems/binary-tree-maximum-path-sum/

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
var maxPathSum = function (root) {
    let sum = -Infinity;
    function getMaxSubSum(root) {
        if (!root) return 0;
        const subLeft = Math.max(getMaxSubSum(root.left), 0);
        const subRight = Math.max(getMaxSubSum(root.right), 0);
        const curPathMax = root.val + subLeft + subRight;
        sum = Math.max(sum, curPathMax);
        return root.val + Math.max(subLeft,subRight);
    }
    getMaxSubSum(root);
    return sum;
};

const node1 = new TreeNode(-1);
const node2 = new TreeNode(1, node1);
const node3 = new TreeNode(3);
const node4 = new TreeNode(-2);
const node5 = new TreeNode(-2, node2, node3);
const node6 = new TreeNode(-3, node4);
const node7 = new TreeNode(1, node5, node6);
console.log(maxPathSum(node7));