// https://leetcode.com/problems/best-time-to-buy-and-sell-stock
// timeout

var maxProfit = function (prices) {
    if (prices.length < 2) return 0;
    let i = 0, j = 1;
    let profit = 0;
    while (j < prices.length) {
        const tmp = prices[j] - prices[i];
        if (tmp > 0) {
            profit = tmp>profit? tmp:profit;
        }else {
            i = j;    
        }
        ++j;
    }
    return profit;
};

// let arr = [7,1,5,3,6,4];
let arr = [2, 1, 2, 0, 1];
console.log(maxProfit(arr));