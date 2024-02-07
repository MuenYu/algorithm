// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const map = new Map();
    for (let i = 0; i < inorder.length; ++i) {
        map.set(inorder[i], i);
    }
    return subTree(preorder, map, 0, 0, preorder.length - 1);
};

function subTree(preorder, map, pidx, il, ir) {
    const root = new TreeNode(preorder[pidx]);
    const imid = map.get(preorder[pidx]);
    if (il < imid) {
        root.left = subTree(preorder, map, pidx + 1, il, imid - 1);
    }
    if (ir > imid) {
        root.right = subTree(preorder, map, pidx + imid - il + 1, imid + 1, ir);
    }
    return root;
}