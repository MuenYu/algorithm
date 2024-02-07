// https://leetcode.com/problems/minimum-size-subarray-sum
// timeout

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] >= target) {
            return 1;
        }
        nums[i] = i == 0 ? nums[i] : nums[i] + nums[i - 1];
    }
    for (let length = 2; length <= nums.length; ++length) {
        for (let i = nums.length - 1; i - length > -2; --i) {
            const sum = i - length == -1 ? nums[i] : nums[i] - nums[i - length];
            if (sum >= target) {
                return length;
            }
        }
    }
    return 0;
};

const target = 15;
const nums = [1, 2, 3, 4, 5];
console.log(minSubArrayLen(target, nums));
