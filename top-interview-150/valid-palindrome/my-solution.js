// https://leetcode.com/problems/valid-palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let i = 0, j = s.length - 1;
    const alphanumeric  = /[a-zA-Z0-9]/
    while (i < j) {
        if (!alphanumeric.test(s[i])) {
            ++i;
            continue;
        }
        if (!alphanumeric.test(s[j])) {
            --j;
            continue;
        }
        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
        ++i;
        --j;
    }
    return true;
};
