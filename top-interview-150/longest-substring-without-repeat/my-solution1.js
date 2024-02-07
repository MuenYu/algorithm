// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// timeout

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    for (let i = s.length; i > 1; --i) {
        let start = 0;
        let end = start + i - 1;
        while (end < s.length) {
            if (checkRepeat(s.substring(start, end + 1))) {
                return end - start + 1;
            }
            ++start;
            ++end;
        }
    }
    return s.length == 0 ? 0 : 1;
};

function checkRepeat(s) {
    const set = new Set([...s]);
    return set.size === s.length; // true: no repeat
}

const s = "pwwkew";
console.log(lengthOfLongestSubstring(s));