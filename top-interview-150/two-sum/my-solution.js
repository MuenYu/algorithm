// https://leetcode.com/problems/two-sum
// brute force, AC, but not recommended

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; ++i) {
        const tmp = target - nums[i];
        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[j] === tmp) {
                return [i, j];
            }
        }
    }
};

const nums = [3, 2, 4];
const target = 6;
console.log(twoSum(nums, target));