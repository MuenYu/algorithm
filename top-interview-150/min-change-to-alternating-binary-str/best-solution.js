// https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let count = 0, flag = '0';
    for (let i = 0; i < s.length; ++i) {
        if (s[i] !== flag) {
            ++count;
        }
        flag = flag === '0'? '1':'0';
    }
    return Math.min(count, s.length-count);
};

console.log(minOperations("0100"));