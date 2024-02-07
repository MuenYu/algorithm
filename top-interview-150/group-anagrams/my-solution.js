// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    if (strs.length < 2) return [strs];
    const map = new Map();
    for (s of strs) {
        const key = genKey(s);
        if (map.has(key)) {
            const tmp = map.get(key);
            tmp.push(s);
            map.set(key, tmp);
        } else {
            map.set(key, [s]);
        }
    }
    const result = [];
    for (const v of map.values()) {
        result.push(v);
    }
    return result;

    function genKey(s) {
        return [...s].sort().join('');
    }
};


const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));