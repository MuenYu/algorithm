// https://leetcode.com/problems/longest-common-prefix
// sort then compare

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0];
    strs.sort();
    const first = strs[0];
    const last = strs[strs.length-1];
    let index = 0;
    for (;index<first.length;++index) {
        if (last[index] !== first[index]) {
            break;
        }
    }
    return first.substring(0,index);
};

const strs = [
    "aaa",
    "aa",
    "aaa",
];

// const strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));