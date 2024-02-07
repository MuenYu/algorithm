// https://leetcode.com/problems/search-in-rotated-sorted-array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let low = 0, high = nums.length - 1;
    let idx = -1;
    function helper(low, high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            idx = mid;
            return;
        }
        if (low <= high) {
            helper(low, mid - 1);
            helper(mid + 1, high);
        }
    }
    helper(low,high);
    return idx;
};

const nums = [4,5,6,7,0,1,2];
const target = 0;
console.log(search(nums, target));