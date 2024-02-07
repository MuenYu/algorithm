// https://leetcode.com/problems/minimum-window-substring
// timeout

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (s.length < t.length) return "";
    if (s === t) return s;
    const map = new Map();
    for (c of t) {
        if (map.has(c)) {
            const val = map.get(c);
            map.set(c, val + 1);
        } else {
            map.set(c, 1);
        }
    }
    let min = s, left = 0, right = t.length, flag = false;
    while (right <= s.length) {
        const str = s.substring(left, right);
        if (validation(map, str)) {
            flag = true;
            min = min.length > str.length ? str : min;
            ++left;
        } else {
            ++right;
        }
    }
    return flag? min: "";
};

function validation(map, s) {
    const checkMap = new Map(map);
    for (c of s) {
        if (checkMap.has(c)) {
            const val = checkMap.get(c);
            if (val === 1) {
                checkMap.delete(c);
            } else {
                checkMap.set(c, val - 1);
            }
        }
    }
    return checkMap.size === 0;
}

const s = "abc";
const t = "cba";
console.log(minWindow(s, t));
