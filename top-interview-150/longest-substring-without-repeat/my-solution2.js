// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// timeout

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const set = new Set([...s]);
    if (s.length === set.size) {
        return s.length;
    }
    const left = lengthOfLongestSubstring(s.substring(0,s.length-1));
    const right = lengthOfLongestSubstring(s.substring(1,s.length));
    return Math.max(left,right);
};

const s = "pwwkew";
console.log(lengthOfLongestSubstring(s));