// https://leetcode.com/problems/find-peak-element

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.length === 1) return 0;
    const range = nums.length - 1;
    for (let i = 1; i < range; ++i) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i;
        }
    }
    if (nums[0]>nums[1]) return 0;
    if (nums[range]>nums[range-1]) return range;
};