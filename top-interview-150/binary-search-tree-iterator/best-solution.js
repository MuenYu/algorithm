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
    this.visit = root;
    this.stack = [];
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    while(this.visit) {
        this.stack.push(this.visit);
        this.visit = this.visit.left;
    }
    const next = this.stack.pop();
    this.visit = next.right;
    return next.val;
};

/**
 * @return {boolean}
*/
BSTIterator.prototype.hasNext = function () {
    return this.visit != null || this.stack.length!==0;
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