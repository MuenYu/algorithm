// https://leetcode.com/problems/flatten-binary-tree-to-linked-list

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    let pre = null;
    dfs(root);

    function dfs(root) {
        if (!root) {
            return;
        }
        dfs(root.right);
        dfs(root.left);
        // building the tree from bottom to top
        root.right = pre;
        root.left = null;
        pre = root;
    }
};

const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node6 = new TreeNode(6);
const node2 = new TreeNode(2, node3, node4);
const node5 = new TreeNode(5, null, node6);
const node1 = new TreeNode(1, node2, node5);
flatten(node1);
console.log(node1);
