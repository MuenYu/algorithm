// https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let count1 = 0, count2 = 0, idx = 0;
    const flag = [
        ['0', '1'],
        ['1', '0']
    ];
    for (let i = 0; i < s.length; ++i) {
        if (s[i]!==flag[idx][0]) {
            ++count1;
        }
        if (s[i]!==flag[idx][1]) {
            ++count2;
        }
        idx = idx == 1? 0:1;
    }
    return count1 > count2 ? count2 : count1;
};

console.log(minOperations("0100"));