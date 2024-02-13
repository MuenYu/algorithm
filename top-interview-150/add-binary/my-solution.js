// https://leetcode.com/problems/add-binary

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const length = a.length > b.length ? a.length : b.length;
    const result = [];
    let carry = 0;
    for (let i = 1; i <= length; ++i) {
        let num = carry;
        if (a.length - i > -1) num += parseInt(a[a.length - i])
        if (b.length - i > -1) num += parseInt(b[b.length - i])
        carry = Math.floor(num / 2);
        result.push(num % 2);
    }
    if (carry !== 0) result.push(carry);
    return result.reverse().join('');
};

console.log(addBinary("1010", "1011"));