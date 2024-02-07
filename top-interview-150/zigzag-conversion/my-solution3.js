// https://leetcode.com/problems/zigzag-conversion
// a good solution!

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows == 1) return s;
    let result = [];
    const gap = [2 * numRows - 2];
    for (let row = 2; row < numRows; ++row) {
        gap.push([2 * numRows - 2 * row, 2 * row - 2]);
    }
    gap.push(2 * numRows - 2);
    for (let row = 1; row <= numRows; ++row) {
        let index = row - 1;
        if (row == 1 || row == numRows) {
            while (index < s.length) {
                result.push(s[index]);
                index += gap[0];
            }
        } else {
            let flag = false;
            while (index < s.length) {
                result.push(s[index]);
                index += flag ? gap[row - 1][1] : gap[row - 1][0];
                flag = !flag;
            }
        }
    }
    return result.join('');
};

const s = 'PAYPALISHIRING';
const numRows = 4;
// const s = 'AB';
// const numRows = 1;
console.log(convert(s, numRows));