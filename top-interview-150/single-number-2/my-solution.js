// https://leetcode.com/problems/single-number-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const set = new Set();
    const ignore = new Set();
    for (const num of nums) {
        if (!ignore.has(num)) {
            if (set.has(num)) {
                set.delete(num);
                ignore.add(num);
            } else set.add(num);
        }
    }
    return [...set][0];
};

const nums = [2,2,3,2];
console.log(singleNumber(nums));