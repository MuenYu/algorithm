// https://leetcode.com/problems/best-time-to-buy-and-sell-stock
// timeout

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    for (let i = 0; i < prices.length; ++i) {
        for (let j = i + 1; j < prices.length; ++j) {
            if (prices[j]>prices[i]){
                const tmp = prices[j] - prices[i];
                profit = tmp > profit? tmp:profit;
            }
        }
    }
    return profit;
};

let arr = [1, 4, 2];
console.log(maxProfit(arr));