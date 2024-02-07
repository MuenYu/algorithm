// https://leetcode.com/problems/longest-consecutive-sequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const set = new Set(nums);
    let count = 0;
    for (const a of nums) {
        if (!set.has(a-1)) {
            let b = a+1;
            while (set.has(b)) {
                ++b;
            }
            count = Math.max(count, b-a);
        }
    }
    return count;
};

const nums = [1,2,0,1];
console.log(longestConsecutive(nums));