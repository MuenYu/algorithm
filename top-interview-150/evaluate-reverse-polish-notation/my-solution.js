// https://leetcode.com/problems/evaluate-reverse-polish-notation

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];
    for (const c of tokens) {
        if (!isNaN(c)) {
            stack.push(c);
        } else {
            const num2 = parseInt(stack.pop());
            const num1 = parseInt(stack.pop());
            switch (c) {
                case '+':
                    stack.push(num1 + num2);
                    break;
                case '-':
                    stack.push(num1 - num2);
                    break;
                case '*':
                    stack.push(num1 * num2);
                    break;
                case '/':
                    const tmp = num1 / num2;
                    if (tmp > 0) stack.push(Math.floor(tmp));
                    else stack.push(Math.ceil(tmp));
                    break;
            }
        }
    }
    return stack.pop();
};

const tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
console.log(evalRPN(tokens));