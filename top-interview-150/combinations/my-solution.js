// https://leetcode.com/problems/combinations

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const arr = [];
    const result = [];
    dfs(0);
    function dfs(idx) {
        if (arr.length === k) {
            result.push(arr.slice());
            return;
        }
        if (n - idx < k - arr.length) {
            return;
        }
        for (let i = idx + 1; i <= n; ++i) {
            arr.push(i);
            dfs(i);
            arr.pop();
        }
    }
    return result;
};

console.log(combine(4, 2));