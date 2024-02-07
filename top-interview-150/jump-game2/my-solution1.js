// https://leetcode.com/problems/jump-game-ii
// access but slow

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    const dp = new Array(nums.length).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i < nums.length - 1; ++i) {
        for (let j = i; j <= i + nums[i]; ++j) { 
            dp[j] = Math.min(dp[j], dp[i]+1);
        }
    }
    return dp[nums.length-1];
};

const arr = [1, 2, 3, 4, 5];
console.log(jump(arr));