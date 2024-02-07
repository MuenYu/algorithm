// https://leetcode.com/problems/search-insert-position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let i = 0, j = nums.length - 1;
    if (nums[i] >= target) return 0;
    if (nums[j] < target) return nums.length;
    if (nums[j] === target) return j;
    let mid;
    while (i < j) {
        mid = Math.floor((i + j) / 2);
        if (target === nums[mid]) return mid;
        else if (target > nums[mid]) i = mid + 1;
        else if (target > nums[mid-1]) return mid;
        else j = mid - 1;
    }
    return j;
};

const nums = [1, 3, 5, 6];
const target = 7;
console.log(searchInsert(nums, target));