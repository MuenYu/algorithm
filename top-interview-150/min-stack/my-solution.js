// https://leetcode.com/problems/min-stack

var MinStack = function () {
    this.arr = [];
    this.min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.arr.push(val);
    if (this.min.length === 0 || this.min[this.min.length - 1] >= val) {
        this.min.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const val = this.arr.pop();
    if (this.min[this.min.length - 1] === val) {
        this.min.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.arr[this.arr.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min[this.min.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack()
obj.push(3)
console.log(obj.arr);
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()