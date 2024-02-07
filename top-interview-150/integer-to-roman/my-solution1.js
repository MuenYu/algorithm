// https://leetcode.com/problems/integer-to-roman
// it is the best solution

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const amount = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let index = 0;
    let result = '';
    while (num > 0) {
        if (amount[index] <= num) {
            const tmp = parseInt(num / amount[index]);
            num = num % amount[index];
            result += trans(amount[index], tmp);
        }
        ++index;
    }
    return result;
};

function trans(num, count) {
    switch (num) {
        case 1000: return 'M'.repeat(count);
        case 900: return 'CM'.repeat(count);
        case 500: return 'D'.repeat(count);
        case 400: return 'CD'.repeat(count);
        case 100: return 'C'.repeat(count);
        case 90: return 'XC'.repeat(count);
        case 50: return 'L'.repeat(count);
        case 40: return 'XL'.repeat(count);
        case 10: return 'X'.repeat(count);
        case 9: return 'IX'.repeat(count);
        case 5: return 'V'.repeat(count);
        case 4: return 'IV'.repeat(count);
        case 1: return 'I'.repeat(count);
    }
}

console.log(intToRoman(800));