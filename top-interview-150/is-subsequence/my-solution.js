// https://leetcode.com/problems/is-subsequence

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0, j = 0;
    while (j < t.length) {
        console.log(`i:${i} j:${j}`);
        if (i == s.length) {
            return true;
        }
        if (s[i] === t[j]) {
            ++i;
        }
        ++j;
    }
    return i == s.length ? true : false;
};

const s = 'abc';
const t = 'ahbgdc';
console.log(isSubsequence(s, t));