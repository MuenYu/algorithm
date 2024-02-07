// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree

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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    function dfs(i, j) {
        const length = j - i + 1;
        if (length === 1) {
            return new TreeNode(nums[i]);
        } else if (length === 2) {
            const left = new TreeNode(nums[i]);
            const root = new TreeNode(nums[j], left);
            return root;
        } else if (length === 3) {
            const left = new TreeNode(nums[i]);
            const right = new TreeNode(nums[j]);
            const root = new TreeNode(nums[i + 1], left, right);
            return root;
        } else {
            const mid = Math.floor((i+j)/2);
            return new TreeNode(nums[mid],dfs(i,mid-1),dfs(mid+1,j));
        }
    }
    return dfs(0,nums.length-1);
};