// https://leetcode.com/problems/valid-parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const begin = new Set(['(','[','{']);
    for (const c of s) {
        if (begin.has(c)) {
            stack.push(c);
        } else if (c === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        } else if (c === ']' && stack[stack.length - 1] === '[') {
            stack.pop();
        } else if (c === '}' && stack[stack.length - 1] === '{') {
            stack.pop();
        } else return false;
    }
    return stack.length === 0;
};