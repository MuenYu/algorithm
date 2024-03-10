// https://leetcode.com/problems/bitwise-and-of-numbers-range/

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
    if (left===right) return left;
    left = left.toString(2), right = right.toString(2);
    left = '0'.repeat(32 - left.length) + left;
    right = '0'.repeat(32 - right.length) + right;
    let result = 0, i = 0;
    for (; i < 32 && left[i] === right[i]; ++i) {
        if (left[i] === '1') result += 1;
        result *= 2;
    }
    return result << (31-i);
};

console.log(rangeBitwiseAnd(1, 1));