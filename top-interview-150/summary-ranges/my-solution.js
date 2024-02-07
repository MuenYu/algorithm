// https://leetcode.com/problems/summary-ranges

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (nums.length == 0) return [];
    if (nums.length == 1) return [nums[0].toString()];
    const result = [];
    for (let l = 0; l < nums.length;) {
        let r = l + 1;
        while (r < nums.length && nums[r] === nums[r - 1] + 1) {
            ++r;
        }
        if (l + 1 == r) result.push(`${nums[l]}`);
        else result.push(`${nums[l]}->${nums[r - 1]}`);
        l = r;
    }
    return result;
};

const nums = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums));