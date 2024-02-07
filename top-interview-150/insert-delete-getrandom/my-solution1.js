// https://leetcode.com/problems/insert-delete-getrandom-o1
// slow but ac

var RandomizedSet = function () {
    this.data = new Set();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.data.has(val)) {
        return false;
    }
    this.data.add(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.data.has(val)) {
        this.data.delete(val);
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    const arr = Array.from(this.data);
    const index = Math.floor(Math.random() * arr.length);
    return (arr[index]);
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
var obj = new RandomizedSet();
console.log(obj);
// var param_1 = obj.insert(val)
// var param_2 = obj.remove(val)
// var param_3 = obj.getRandom()