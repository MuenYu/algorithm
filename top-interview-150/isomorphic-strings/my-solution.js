// https://leetcode.com/problems/isomorphic-strings

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;
    const mapping = new Map();
    const set = new Set();
    for (let i = 0; i < s.length; ++i) {
        if (mapping.has(s[i])) {
            const c = mapping.get(s[i]);
            if (c !== t[i]) return false;
        } else {
            if (set.has(t[i])) return false;
            mapping.set(s[i],t[i]);
            set.add(t[i]);
        }
    }
    return true;
};