// https://leetcode.com/problems/plus-one

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    digits = digits.reverse();
    let carry = 1;
    for (let i = 0; i < digits.length; ++i) {
        digits[i] += carry;
        if (digits[i] > 9) {
            digits[i] -= 10;
            carry = 1;
        } else {
            carry = 0;
            break;   
        }
    }
    if (carry !== 0)
        digits.push(carry);
    return digits.reverse();
};

const digits = [9];
console.log(plusOne(digits));