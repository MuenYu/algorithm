// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array
// wrong

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        const mid = (l + r) >> 1;
        if (nums[mid]>nums[r]) l = mid+1;
        else r = mid;
    }
    return nums[l];
};

const nums = [5,1,2,3,4];
console.log(findMin(nums));