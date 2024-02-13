// https://leetcode.com/problems/single-number

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const set = new Set();
    for (const num of nums) {
        if (set.has(num)) set.delete(num);
        else set.add(num);
    }
    return [...set][0];
};

const nums = [4,1,2,1,2];
console.log(singleNumber(nums));