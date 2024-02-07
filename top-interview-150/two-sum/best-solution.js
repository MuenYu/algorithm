// https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; ++i) {
        const tmp = target - nums[i];
        if (map.has(tmp)) return [i, map.get(tmp)];
        else map.set(nums[i], i);
    }
    return [];
};

const nums = [3, 2, 4];
const target = 6;
console.log(twoSum(nums, target));