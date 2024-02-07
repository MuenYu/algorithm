// https://leetcode.com/problems/zigzag-conversion
// AC but slow

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows == 1) return s;
    const map = [];
    for (let i = 0; i < numRows; ++i) {
        map.push([]);
    }
    let index = 0;
    let flag = false; // true +, false -, 
    for (c of s) {
        console.log(index);
        map[index].push(c);
        if (index == numRows-1 || index == 0) {
            flag = !flag;
        }
        index = flag ? ++index : --index;
    }
    let result = '';
    
    for (arr of map) {
        result += arr.join('');
    }
    return result;
};

// const s = 'PAYPALISHIRING';
// const numRows = 3;
const s = 'AB';
const numRows = 1;
console.log(convert(s, numRows));