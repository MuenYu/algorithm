// https://leetcode.com/problems/search-a-2d-matrix

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let low = 0, high = matrix.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (matrix[mid][0] === target) return true;
        else if (matrix[mid][0] > target) high = mid - 1;
        else low = mid + 1;
    }
    if (high < 0) return false;
    const row = high;
    low = 0, high = matrix[row].length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (matrix[row][mid] === target) return true;
        else if (matrix[row][mid] > target) high = mid - 1;
        else low = mid + 1;
    }
    return false;
};


const matrix = [[1]];
const target = 0;
console.log(searchMatrix(matrix, target));