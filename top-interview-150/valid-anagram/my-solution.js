// https://leetcode.com/problems/valid-anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const map1 = new Map();
    const map2 = new Map();
    for (let i = 0; i < s.length; ++i) {
        map1.set(s[i], map1.get(s[i]) + 1 || 1);
        map2.set(t[i], map2.get(t[i]) + 1 || 1);
    }
    for (const [k,v] of map1){
        if (v !== map2.get(k)) return false;
    }
    return true;
};

const s = "anagramm";
const t = "nagarama";
console.log(isAnagram(s, t));