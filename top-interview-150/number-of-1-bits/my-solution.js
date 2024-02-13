// https://leetcode.com/problems/number-of-1-bits

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const binary = n.toString(2);
    let count = 0;
    for (const bit of binary) {
        if (bit==='1') ++count;
    }
    return count;
};

console.log(hammingWeight(11));