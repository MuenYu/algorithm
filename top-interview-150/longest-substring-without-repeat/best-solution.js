// https://leetcode.com/problems/longest-substring-without-repeating-characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let l = 0;
    let ans = 0;
    const set = new Set();
    for (let r = 0; r < s.length; ++r) {
        if (set.has(s[r])) {
            do {
                set.delete(s[l]);
                ++l;
            } while (set.has(s[r]));
            set.add(s[r]);
        } else {
            set.add(s[r]);
            ans = Math.max(ans, set.size);
        }
    }
    return ans;
};