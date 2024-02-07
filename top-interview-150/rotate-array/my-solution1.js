// https://leetcode.com/problems/rotate-array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const length = nums.length;
    k = k % nums.length;
    nums.push(...nums);
    const start = nums.length-length-k;
    nums.splice(0,start);
    nums.splice(length);
};

arr = [1,2,3];
rotate(arr,2);
console.log(arr);