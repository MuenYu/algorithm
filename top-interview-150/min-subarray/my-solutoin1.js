// https://leetcode.com/problems/minimum-size-subarray-sum
// timeout

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    for (let i = 1; i <= nums.length; ++i) {
        let start = 0;
        let end = start + i - 1;
        let sum = nums.slice(0, i).reduce((sum, cur) => sum + cur);
        while (end < nums.length) {
            sum = start > 0? sum + nums[end] - nums[start-1]:sum;
            if (sum >= target) {
                return end - start + 1;
            }
            ++start;
            ++end;
        }
    }
    return 0;
};

const arr = [1, 2, 3];
console.log(arr.reduce((sum, cur) => sum + cur));