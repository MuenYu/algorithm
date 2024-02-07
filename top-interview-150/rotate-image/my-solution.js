// https://leetcode.com/problems/rotate-image
// AC but slow

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    if (matrix.length === 1) return matrix;
    const n = matrix.length;
    const tmp = [];
    for (let i = 0; i < n; ++i) {
        tmp.push([...matrix[i]]);
        for (let j = n - 1; j > -1; --j) {
            matrix[i][n - j - 1] = j > i ? matrix[j][i] : tmp[j][i];
        }

    }
    return matrix;
};

const arr = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
console.log(rotate(arr));