// https://leetcode.com/problems/best-time-to-buy-and-sell-stock
// timeout

var maxProfit = function (prices) {
    let profit = 0;
    for (let i = 0; i < prices.length - 1; ++i) {
        if (prices[i] > prices[i + 1]) {
            continue;
        }
        for (let j = prices.length - 1; j > i; --j) {
            if (prices[j] < prices[j - 1]) {
                continue;
            }
            if (prices[j] > prices[i]) {
                const tmp = prices[j] - prices[i];
                profit = tmp > profit ? tmp : profit;
            }
        }
    }
    return profit;
};

// let arr = [7,1,5,3,6,4];
let arr = [2, 1, 2, 0, 1];
console.log(maxProfit(arr));