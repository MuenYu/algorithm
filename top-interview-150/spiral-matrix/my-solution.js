// https://leetcode.com/problems/spiral-matrix

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length === 1) return matrix[0];
    let direction = 0;
    let count = 0
    const total = matrix.length * matrix[0].length;
    const limit = [matrix[0].length-1, matrix.length-1, 0, 1];
    let i = 0, j = 0;
    const result = [];
    while (count < total) {
        result.push(matrix[i][j]);
        switch (direction) {
            // right
            case 0:
                if (j < limit[0]) {
                    ++j;
                } else {
                    --limit[0];
                    direction = (direction + 1) % 4;
                    ++i;
                }
                break;
            // down
            case 1:
                if (i < limit[1]) {
                    ++i;
                } else {
                    --limit[1];
                    direction = (direction + 1) % 4;
                    --j;
                }
                break;
            // left
            case 2:
                if (j > limit[2]) {
                    --j;
                } else {
                    ++limit[2];
                    direction = (direction + 1) % 4;
                    --i;
                }
                break;
            // up
            case 3:
                if (i > limit[3]) {
                    --i
                } else {
                    ++limit[3];
                    direction = (direction + 1) % 4;
                    ++j
                }
                break;
        }
        ++count;
    }
    return result;
};

// const matrix = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(spiralOrder(matrix));

const arr = [1,2,3,4,5];
const arr2 = arr.slice(0,2);
arr2[0] = 5;
console.log(arr2);
console.log(arr);