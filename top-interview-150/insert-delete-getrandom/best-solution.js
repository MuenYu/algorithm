// https://leetcode.com/problems/insert-delete-getrandom-o1

var RandomizedSet = function () {
    // store numbers
    this.data = [];
    // store nums and index
    this.map = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) {
        return false;
    }
    const idx = this.data.length;
    this.data.push(val);
    this.map.set(val, idx);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.map.has(val)) {
        return false;
    }
    const idx = this.map.get(val);
    const tmp = this.data.pop();
    this.map.delete(val);
    if (idx === this.data.length) {
        return true;
    }
    this.data[idx] = tmp;
    this.map.set(tmp, idx);
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    const idx = Math.floor(Math.random() * this.data.length);
    return this.data[idx];
};


const rs = new RandomizedSet();
// console.log(`arr: ${rs.data}`);
// rs.insert(1);
// console.log(`arr: ${rs.data}`);
// rs.remove(2);
// console.log(`arr: ${rs.data}`);
// rs.insert(2);
// console.log(`arr: ${rs.data}`);
// console.log(`random: ${rs.getRandom()}`);
// rs.remove(1);
// console.log(`arr: ${rs.data}`);
// rs.insert(2);
// console.log(`arr: ${rs.data}`);
// console.log(`random: ${rs.getRandom()}`);

rs.insert(1);
rs.remove(1);
rs.insert(2);
console.log(rs.data);
