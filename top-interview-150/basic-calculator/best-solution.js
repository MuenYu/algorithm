// https://leetcode.com/problems/basic-calculator

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = [];
    let operand = 0;
    let result = 0;  // 用来存储最终结果
    let sign = 1;  // 用来存储符号，初始化为正号
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === ' ') {
            continue;
        } else if (!isNaN(char)) {
            operand = operand * 10 + parseInt(char);
        } else if (char === '+') {
            result += sign * operand;
            sign = 1;
            operand = 0;
        } else if (char === '-') {
            result += sign * operand;
            sign = -1;
            operand = 0;
        } else if (char === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (char === ')') {
            result += sign * operand;
            result *= stack.pop();  // 弹出括号前的符号
            result += stack.pop();  // 加上括号前的结果
            operand = 0;
        }
    }
    return result + (sign * operand);
};