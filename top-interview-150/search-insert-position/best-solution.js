// https://leetcode.com/problems/search-insert-position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) high = mid - 1;
        else low = mid + 1;
    }
    return low;
};

const nums = [1, 3, 5, 6];
const target = 2;
console.log(searchInsert(nums, target));