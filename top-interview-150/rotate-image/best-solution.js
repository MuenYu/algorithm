// https://leetcode.com/problems/rotate-image

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    if (matrix.length === 1) return matrix;
    const n = matrix.length;
    const rounds = Math.floor(n / 2);
    let idx = 0;
    for (let i = 0; i < rounds; ++i) {
        const reverseIdx = n - i - 1;
        [matrix[i], matrix[reverseIdx]] = [matrix[reverseIdx], matrix[i]];
    }
    for (let i = 0; i < n; ++i) {
        for (let j = i; j < n; ++j) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    return matrix;
};

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(rotate(matrix));