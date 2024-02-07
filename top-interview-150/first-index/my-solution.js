// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let i = 0, j = 0;
    while (i < haystack.length) {
        if (j == needle.length) {
            return i;
        } else if (haystack[i + j] == needle[j]) {
            ++j;
        }
        else {
            ++i;
            j = 0;
        }
    }
    return -1;
};

const haystack = "mississippi";
const needle = "issi";
console.log(strStr(haystack, needle));