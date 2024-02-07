// https://leetcode.com/problems/rotate-array
// the process of rotating is the same as reverse and reverse two subarray respectively

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length-1);
};

function reverse(arr, l, r) {
    while (l < r) {
        const tmp = arr[l];
        arr[l] = arr[r];
        arr[r] = tmp;
        ++l;
        --r;
    }
}

arr = [1,2,3];
rotate(arr, 2);
console.log(arr);

