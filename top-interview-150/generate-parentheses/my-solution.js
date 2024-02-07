// https://leetcode.com/problems/generate-parentheses

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let l = n - 1;
    let status = 1;
    const result = [];
    const length = l << 1;
    const arr = [];
    function dfs() {
        if (arr.length === length) {
            result.push('(' + arr.join('') + ')');
            return;
        }
        if (status > 0) {
            arr.push(')');
            --status;
            dfs();
            arr.pop();
            ++status;
        }
        if (l > 0) {
            --l;
            arr.push('(');
            ++status;
            dfs();
            arr.pop();
            --status;
            ++l;
        }
    }
    dfs();
    return result;
};

console.log(generateParenthesis(3));