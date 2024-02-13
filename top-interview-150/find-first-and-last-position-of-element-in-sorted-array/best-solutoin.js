// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const findFirst = (nums, target) => {
        let low = 0, high = nums.length - 1, result = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (nums[mid] >= target) {
                high = mid - 1;
                if (nums[mid] === target) {
                    result = mid;
                }
            } else {
                low = mid + 1;
            }
        }
        return result;
    };
    
    const findLast = (nums, target) => {
        let low = 0, high = nums.length - 1, result = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (nums[mid] <= target) {
                low = mid + 1;
                if (nums[mid] === target) {
                    result = mid;
                }
            } else {
                high = mid - 1;
            }
        }
        return result;
    };
    
    const first = findFirst(nums, target);
    const last = findLast(nums, target);
    return [first, last];
};