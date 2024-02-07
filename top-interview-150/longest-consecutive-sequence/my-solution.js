// https://leetcode.com/problems/longest-consecutive-sequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length < 2) return nums.length;
    const set = new Set(nums);
    nums = Array.from(set);
    nums.sort((a, b) => a - b);
    let count = 1, maxCount = 1;
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] === nums[i - 1] + 1) {
            ++count;
        } else {
            count = 1;
        }
        maxCount = maxCount > count ? maxCount : count;
    }
    return maxCount;
};

const nums = [1,2,0,1];
console.log(longestConsecutive(nums));