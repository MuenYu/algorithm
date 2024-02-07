// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
// greedy algorithm

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; ++i) { 
        const tmp = prices[i]-prices[i-1];
        profit = tmp > 0? profit+tmp:profit;
    }
    return profit;
};