// https://leetcode.com/problems/word-pattern

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const words = s.split(' ');
    if (words.length !== pattern.length) return false;
    const map = new Map();
    const set = new Set();
    for (let i = 0; i < pattern.length; ++i) {
        if (map.has(pattern[i])) {
            if (map.get(pattern[i]) !== words[i]) return false;
        } else {
            if (set.has(words[i])) return false;
            map.set(pattern[i], words[i]);
            set.add(words[i]);
        }
    }
    return true;
};

const pattern = "abba";
const s = "dog cat cat dog";
console.log(wordPattern(pattern, s));