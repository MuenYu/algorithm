// https://leetcode.com/problems/n-queens-ii

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    const result = [];
    const status = new Array(n).fill(true);
    const arr = [];

    function dfs() {
        if (arr.length === n) {
            result.push([...arr]);
            return;
        }
        for (let i = 0; i < n; ++i) {
            if (status[i]) {
                if (diagonalCheck(arr.length, i)) {
                    status[i] = false;
                    arr.push(i);
                    dfs();
                    arr.pop();
                    status[i] = true;
                }
            }
        }
    }

    function diagonalCheck(x, y) {
        for (let i = 0; i < arr.length; ++i) {
            const rowGap = Math.abs(x - i);
            const colGap = Math.abs(y - arr[i]);
            if (rowGap === colGap) return false;
        }
        return true;
    }
    dfs();
    return result.length;
};

console.log(totalNQueens(9));