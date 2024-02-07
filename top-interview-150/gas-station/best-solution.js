// https://leetcode.com/problems/gas-station

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let tank = 0,
        start = 0,
        total = 0;
    for (let i = 0; i < gas.length; ++i) {
        const gap = gas[i] - cost[i];
        total += gap;
        tank += gap;
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }
    return total < 0 ? -1 : start;
};