// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
            let first = mid, last = mid;
            while (nums[first] === target) --first;
            while (nums[last] === target) ++last;
            return [first + 1, last - 1];
        }
        if (nums[mid] > target) r = mid - 1;
        else if (nums[mid] < target) l = mid + 1;
    }
    return [-1, -1];
};