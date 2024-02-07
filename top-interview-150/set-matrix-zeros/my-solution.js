// https://leetcode.com/problems/set-matrix-zeroes
// AC with acceptable speed

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const rows = new Set();
    const cols = new Set();
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }
    for (const row of rows) {
        matrix[row].fill(0);
    }
    for (const col of cols) {
        for (let i = 0; i < m; ++i) {
            matrix[i][col] = 0;
        }
    }
    return matrix;
};

// const matrix = [[1,1,1],[1,0,1],[1,1,1]];
const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
console.log(setZeroes(matrix));