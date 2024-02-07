// https://leetcode.com/problems/letter-combinations-of-a-phone-number

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length===0) return [];
    // build map
    const map = new Map();
    for (let i = 97, j = 2; j < 10; ++j) {
        if (j === 7 || j === 9) {
            map.set(`${j}`, [String.fromCharCode(i), String.fromCharCode(i + 1), String.fromCharCode(i + 2), String.fromCharCode(i + 3)]);
            i += 4;
        } else {
            map.set(`${j}`, [String.fromCharCode(i), String.fromCharCode(i + 1), String.fromCharCode(i + 2)]);
            i += 3;
        }
    }
    const result = new Set();
    function dfs(i, str) {
        if (i === digits.length) {
            result.add(str);
            return;
        }
        const letters = map.get(digits[i]);
        for (const letter of letters) {
            dfs(i + 1, str + letter);
        }
    }
    dfs(0, '');
    return Array.from(result);
};

console.log(letterCombinations("23"));