// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const length = nums.length;
    nums.push(nums[0]);
    for (let i = 1;i<length;++i) {
        if (nums[i-1] !== nums[i]) {
            nums.push(nums[i]);
        }
    }
    nums.splice(0, length);
};