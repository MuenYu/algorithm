// https://leetcode.com/problems/binary-search-tree-iterator

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
 */
var BSTIterator = function (root) {
    this.idx = 0;
    this.nodes = [];
    const init = (root) => {
        if (!root) return;
        init(root.left);
        this.nodes.push(root);
        init(root.right);
    }
    init(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    return this.hasNext() ? this.nodes[this.idx++].val : null;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.idx < this.nodes.length;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
const root = new TreeNode(1);
var obj = new BSTIterator(root)
var param_1 = obj.next()
var param_2 = obj.hasNext()