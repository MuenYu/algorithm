// https://leetcode.com/problems/reverse-bits

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    n = n.toString(2);
    n = '0'.repeat(32 - n.length) + n;
    let bit = 1;
    let result = 0;
    for (const s of n) {
        if (s === '1') result += bit
        bit *= 2;
    }
    return result;
};

console.log(reverseBits(4294967293));