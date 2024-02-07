// https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let count1 = 0, count2 = 0, flag = true;
    for (let i = 0; i < s.length; ++i) {
        if (flag) {
            s[i] === '0' ? ++count1 : ++count2;
        } else {
            s[i] === '0' ? ++count2 : ++count1;
        }
        flag = !flag;
    }
    return count1 > count2 ? count2 : count1;
};

console.log(minOperations("0100"));