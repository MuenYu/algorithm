// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    const map = new Map();
    for (let i = 0; i < inorder.length; ++i) {
        map.set(inorder[i], i);
    }
    return subTree(map, postorder, postorder.length - 1, 0, inorder.length - 1);
};

function subTree(map, postorder, pidx, il, ir) {
    const root = new TreeNode(postorder[pidx]);
    const mid = map.get(postorder[pidx]);
    if (il < mid) {
        root.left = subTree(map, postorder, pidx - ir + mid-1, il, mid - 1);
    }
    if (ir > mid) {
        root.right = subTree(map, postorder, pidx - 1, mid + 1, ir);
    }
    return root;
}

const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];
console.log(buildTree(inorder, postorder));
