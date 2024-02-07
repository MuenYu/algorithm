// https://leetcode.com/problems/maximum-subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = nums[0],sum = nums[0]

    for (let i = 1; i < nums.length; ++i) {
        sum = Math.max(nums[i], sum + nums[i]);
        max = Math.max(sum, max);
    }
    return max;
};

// const nums = [-2,1,-3,4,-1,2,1,-5,4];
const nums = [5, 4, -1, 7, 8];
console.log(maxSubArray(nums));