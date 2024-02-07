// https://leetcode.com/problems/jump-game
// DP

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    const n = nums.length;
    if (n===1) return true;
    const dp = new Array(n).fill(0);
    let reachable = 0;
    for (let i = 0; i < n - 1 && i <= reachable; ++i) {
        dp[i] = i + nums[i];
        reachable = reachable > dp[i] ? reachable : dp[i];
        if (dp[i] + 1 >= n) return true;
    }
    return false;
};

const testCases = [
    [2, 3, 1, 1, 4],
    [3, 2, 1, 0, 4],
    [2, 0, 6, 9, 8, 4, 5, 0, 8, 9, 1, 2, 9, 6, 8, 8, 0, 6, 3, 1, 2, 2, 1, 2, 6, 5, 3, 1, 2, 2, 6, 4, 2, 4, 3, 0, 0, 0, 3, 8, 2, 4, 0, 1, 2, 0, 1, 4, 6, 5, 8, 0, 7, 9, 3, 4, 6, 6, 5, 8, 9, 3, 4, 3, 7, 0, 4, 9, 0, 9, 8, 4, 3, 0, 7, 7, 1, 9, 1, 9, 4, 9, 0, 1, 9, 5, 7, 7, 1, 5, 8, 2, 8, 2, 6, 8, 2, 2, 7, 5, 1, 7, 9, 6],
];

for (arr of testCases) {
    console.log(canJump(arr));
}
