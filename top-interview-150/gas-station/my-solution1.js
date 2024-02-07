// https://leetcode.com/problems/gas-station/description
// slow but ac

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let tank = 0;
    l: for (let i = 0; i < gas.length; ++i) {
        tank = gas[i];
        let pos = i;
        for (let j = 0; j <= gas.length; ++j) {
            pos = (i + j) % gas.length;
            tank -= cost[pos];
            if (tank < 0 || tank == 0 && j < gas.length - 1) {
                continue l;
            }
            tank += gas[(pos + 1) % gas.length];
        }
        return i;
    }
    return -1;
};

// case 1
// const gas = [1, 2, 3, 4, 5];
// const cost = [3, 4, 5, 1, 2];

// case 3
const gas = [4, 5, 3, 1, 4];
const cost = [5, 4, 3, 4, 2];
console.log(canCompleteCircuit(gas, cost));