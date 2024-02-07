// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
// DP

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const length = prices.length;
    if (length < 2) return 0;
    const dp = new Array(length).fill(0);
    for (let i = 1; i < length; ++i) {
        const profit = prices[i] - prices[i - 1];
        dp[i] = Math.max(dp[i - 1] + profit, dp[i - 1]);
    }
    return dp[length - 1];
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // 输出: 7