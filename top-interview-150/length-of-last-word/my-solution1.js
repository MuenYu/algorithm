// https://leetcode.com/problems/length-of-last-word/
// this solution is the best

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let result = 0, space = true;
    for (let i = s.length - 1; i > -1; --i) {
        if (space === false && s[i] === ' ') {
            break;
        }
        else if (s[i] !== ' ') {
            ++result;
            space = false;
        }
    }
    return result;
};

console.log(lengthOfLastWord('999 999 999  '));